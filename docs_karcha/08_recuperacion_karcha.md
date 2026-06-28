# Plan de Continuidad y Recuperación ante Desastres (DRP)

Frente a un incidente real que comprometa la disponibilidad o integridad del Portal de la Universidad del Pacífico, se define la siguiente estrategia basada en estándares de la industria:

## 1. Mejoras Tecnológicas de Infraestructura
**Implementación de un WAF (Web Application Firewall):** Despliegue de reglas automatizadas en Cloudflare/AWS WAF para bloquear patrones de ataques conocidos (SQLi, Directory Traversal, Command Injection) antes de que impacten al servidor.

**Principio de Mínimo Privilegio:** Aislar la base de datos en una VPC privada, asegurando que el usuario web solo disponga de permisos estrictamente necesarios (`SELECT`, `INSERT`, `UPDATE`), denegando accesos de administración como `DROP` o acceso a tablas de sistema.

## 2. Plan de Recuperación ante Desastres (DR)
**Política de Respaldos (Backup):** Automatización de respaldos diarios de la base de datos académica (cifrados en reposo) y replicación horaria de logs hacia un repositorio externo inmutable.

**Estrategia de Restauración:** En caso de alteración de datos por SQLi, se activará el protocolo de aislamiento del servidor afectado, levantando una nueva instancia limpia desde la última imagen Docker aprobada y restaurando la base de datos al último punto íntegro conocido.

**Notificación de Incidentes:** Activación del canal de comunicación oficial para informar a los estudiantes y la comunidad de la Universidad del Pacífico sobre ventanas de mantenimiento extraordinarias, cumpliendo los marcos legales vigentes de protección de datos personales.