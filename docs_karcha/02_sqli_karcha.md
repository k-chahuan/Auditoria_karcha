# Análisis de Vulnerabilidad: Inyección SQL (SQLi)

## 1. Evidencia del Ataque
**Ubicación:** Módulo `SQL Injection`
**Payload Utilizado:** `' OR '1'='1`
**Resultado:** Exposición completa de la tabla de usuarios en la base de datos sin necesidad de una autenticación legítima.
**Referencia de Imagen:** `![SQLi](img_karcha/sqli_karcha.png)`

## 2. Explicación Técnica
La vulnerabilidad ocurre debido a la falta de sanitización y parametrización de las entradas de usuario en la consulta SQL. el codigo se comunica directamente con el sistema, gracias a esto se pueden ejecutar comandos desde el lugar en la que el usuario pueda hacer la consulta.