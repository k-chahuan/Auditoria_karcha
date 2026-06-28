# Identificación de Activos de Información y Riesgos Asociados (OWASP / ISO 27001)

Para la **Universidad del Pacífico**, se han identificado y clasificado los siguientes 5 activos esenciales del Portal institucional:

### Activo-01. Base de Datos de Calificaciones e Historial Académico:
**Tipo de activo:** Información Digital

**Clasificación de criticidad:** Crítica

**vulnerabilidad Asociada:** Inyección SQL (SQLi)

**Impacto:** Pérdida de integridad de los títulos, alteración ilícita de notas y destrucción de registros históricos.

---
### Activo-02. Pasarela de Pago de Aranceles y Matrículas:
**Tipo de activo:** Servicio / Software

**Clasificación de criticidad:** Crítica

**vulnerabilidad Asociada:** 	Inyección de Comandos

**Impacto:** Desvío de fondos institucionales, fraude financiero y robo de credenciales bancarias.

---
### Activo-03. Sesiones Activas de Alumnos y Docentes:
**Tipo de activo:** Datos de Sesión

**Clasificación de criticidad:** Alta

**vulnerabilidad Asociada:** XSS Reflejado

**Impacto:** Secuestro de cuentas de profesores para suplantación de identidad y publicación de evaluaciones falsas.

---
### Activo-04. Servidor Web de Producción (Instancia en la Nube):
**Tipo de activo:** Infraestructura

**Clasificación de criticidad:** Crítica

**vulnerabilidad Asociada:** Inyección de Comandos

**Impacto:** Caída total del servicio del portal ("Denegación de Servicio"), impidiendo la toma de ramos.

---
### Activo-05. Fichas Personales y Socioeconómicas de Alumnos:
**Tipo de activo:** Información Digital

**Clasificación de criticidad:** Alta

**vulnerabilidad Asociada:** Inyección SQL (SQLi)

**Impacto:** Filtración de datos sensibles de vulnerabilidad social y RUTs, multas bajo la Ley de Protección de Datos.

---