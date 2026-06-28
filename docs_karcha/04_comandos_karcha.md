# Análisis de Vulnerabilidad: Inyección de Comandos (Command Injection)

## 1. Evidencia del Ataque
**Ubicación:** Módulo `Command Injection`
**Payload Utilizado:** `127.0.0.1; cat /etc/passwd`
**Resultado:** Ejecución de comandos del sistema operativo subyacente, revelando el archivo de usuarios del sistema.
**Referencia de Imagen:** `![Command Injection](img_karcha/comandos_karcha.png)`

## 2. Explicación Técnica
La aplicación web utiliza funciones de ejecución del sistema operativo (como `shell_exec()` o `system()`) para realizar tareas de infraestructura (ej. un ping de diagnóstico) concatenando directamente el string que ingresa el usuario. Al insertar un punto y coma `;`, el intérprete de comandos procesa el primer comando y acto seguido ejecuta la instrucción maliciosa del atacante con los privilegios del usuario de ejecución del servidor web (`www-data`).

## 3. Puntaje y Severidad CVSS v3.1
**Vector CVSS:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H`
**Puntaje Base:** **10.0 (Crítica)**
**Justificación:** Es la vulnerabilidad más peligrosa. Permite el control total del servidor web (C:H, I:H, A:H) de forma remota, lo que pondría en riesgo la disponibilidad completa del Portal de la Universidad del Pacífico.

## 4. Política de Prevención (3.1.4)
Se prohíbe terminantemente el uso de funciones que invoquen directamente al shell del sistema operativo a partir de variables manipulables por el usuario. El diseño de software debe optar por API nativas de los lenguajes de programación.

## 5. Control de Mitigación (3.1.5)
**Implementación:** Reemplazar la ejecución de shell por funciones internas del lenguaje, o en caso extremo, utilizar listas blancas de caracteres estrictas que solo permitan direcciones IP válidas usando expresiones regulares, rechazando operadores de concatenación como `;`, `&&`, y `|`.