# Analisis de vulnerabilidad: Cross-Site Scripting (XSS)
## 1. Evidencia del Ataque
**Ubicación:** Módulo `XSS (Reflected)`
**Payload Utilizado:** `<script>alert('XSS')</script>`
**Resultado:** Ejecución arbitraria de código JavaScript en el navegador del usuario en el contexto de la sesión activa.
**Referencia de Imagen:** `![XSS](img_karcha/xss_karcha.png)`

## 2. Explicación Técnica
El portal recibe datos enviados por el usuario a través de un parámetro HTTP (ej. método GET o POST) y los renderiza de vuelta en la estructura HTML de la página de respuesta sin codificar ni limpiar los caracteres especiales (`<`, `>`, `"`, `'`). El navegador interpreta estos caracteres como etiquetas HTML legítimas en lugar de texto plano, ejecutando el script incrustado.

## 3. Puntaje y Severidad CVSS v3.1
**Vector CVSS:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`
**Puntaje Base:** **6.1 (Media)**
**Justificación:** Requiere que la víctima haga clic en un enlace malicioso (UI:R). El alcance cambia (S:C) porque el script se ejecuta en el navegador de la víctima, pudiendo secuestrar cookies de sesión (`document.cookie`) de alumnos o docentes.

## 4. Política de Prevención (3.1.4)
Todo dato provisto por un tercero o reflejado desde una solicitud HTTP debe considerarse inseguro de manera predeterminada. Ningún dato sin sanitizar o sin codificar contextualmente puede ser insertado directamente en el DOM (Document Object Model) del portal.

## 5. Control de Mitigación (3.1.5)
**Implementación:** Aplicar **Codificación de Salida (Context-Aware Output Encoding)** convirtiendo caracteres especiales en sus entidades HTML seguras (ej. `<` a `&lt;`), y configurar la directiva `HttpOnly` en las cookies de sesión para impedir su lectura vía JavaScript.