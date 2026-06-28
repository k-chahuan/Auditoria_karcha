# Políticas de Prevención y Controles de Mitigación

Alineado con los marcos de trabajo **OWASP Top 10** y los controles **CIS Controls V8**, se establecen las directrices de tratamiento tecnológicas:

## 1. Controles para Riesgos Críticos (Rojo)
* **Control contra SQLi (OWASP A03:2021 - Data Integrity Failures):**
  * **Acción:** Forzar por arquitectura el uso exclusivo de ORM con consultas parametrizadas. Queda prohibida la producción si los analizadores estáticos de código (SAST) detectan concatenaciones en queries.
* **Control contra Inyección de Comandos (CIS Control 4: Secure Configuration of Enterprise Assets):**
  * **Acción:** Deshabilitar las funciones de ejecución de comandos (`shell_exec`, `exec`, `passthru`) en el archivo de configuración `php.ini` del entorno de producción de la Universidad del Pacífico.

## 2. Controles para Riesgos Medios (Naranjo)
* **Control contra XSS (OWASP A02:2021 - Cryptographic Failures / Injection):**
  * **Acción:** Implementación de una cabecera de seguridad **Content Security Policy (CSP)** estricta que limite las fuentes de ejecución de scripts, bloqueando la ejecución de código inline no autorizado.