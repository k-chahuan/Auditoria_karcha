# Matriz de Riesgo y Priorización de Hallazgos

## 1. Matriz de Riesgo (Probabilidad x Impacto)
Basado en el contexto universitario de la Universidad del Pacífico, donde el portal está expuesto a miles de estudiantes y atacantes externos, se construye la siguiente estimación:


## Vulnerabilidades:
### **Inyección de Comandos (ACT-04):**

**probabilidad (1-5)** = 3 (Media)
**impacto (1-5)** = 5 (Muy alto)
**criticidad total** = 15
**nivel de riesgo** (color) = <span style="color:#ef4444;font-weight:700;">Rojo - Crítico</span>

---
### **Inyección SQL (ACT-01 / ACT-05):**

**probabilidad (1-5)** = 4 (Alta)
**impacto (1-5)** = 4 (Mayor)
**criticidad total** = 16
**nivel de riesgo (color)** = <span style="color:#ef4444;font-weight:700;">Rojo - Crítico</span>

---
### **XSS Reflejado (ACT-03):**

**probabilidad (1-5)** = 4 (Alta)
**impacto (1-5)** = 2 (Menor)
**criticidad total** = 8
**nivel de riesgo (color)** = <span style="color:#f59e0b;font-weight:700;">Naranja - Medio</span>


## 2. Justificación Institucional
* **Inyección SQL:** Puntuada alta debido a la exposición del portal en internet. Su impacto es mayor porque la alteración de notas destruye la fe pública de la Universidad del Pacífico.
* **Inyección de Comandos:** Aunque la probabilidad técnica es menor que un XSS, su impacto es catastrófico al comprometer el sistema operativo completo de la institución.
* **XSS Reflejado:** Probabilidad alta debido al constante envío de enlaces de phishing entre alumnos, pero con impacto controlado a sesiones individuales.

## 3. Priorización de Atención
1. **Prioridad 1: Inyección SQL (Riesgo: 16)** - Por su alta probabilidad y devastador impacto a los datos duros de la universidad.
2. **Prioridad 2: Inyección de Comandos (Riesgo: 15)** - Mitigación inmediata de funciones de sistema operativo para proteger el servidor central.
3. **Prioridad 3: XSS Reflejado (Riesgo: 8)** - Implementación de políticas de sanitización global en el framework frontend/backend.