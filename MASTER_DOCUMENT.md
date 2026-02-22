# 📘 DOCUMENTO MAESTRO: OSINT FLOW NAVIGATOR
## Plataforma Web/App para Flujos de Trabajo de Investigación OSINT

**Versión**: 1.0 Final  
**Fecha**: 16 de Febrero de 2026  
**Ubicación**: Santander, Cantabria, España  
**Documento Completo**: Diseño + Base de Datos de Herramientas

***

## 📑 ÍNDICE

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Análisis de la Competencia](#análisis-competencia)
3. [Arquitectura de la Aplicación](#arquitectura)
4. [Diseño de Interfaz (UI/UX)](#diseño-ui-ux)
5. [Base de Datos Completa de Herramientas](#base-herramientas)
6. [Flujos de Trabajo Mejorados](#flujos-trabajo)
7. [Especificaciones Técnicas](#especificaciones-tecnicas)
8. [Modelo de Datos JSON](#modelo-datos)
9. [Hoja de Ruta de Desarrollo](#roadmap)

***

<a name="resumen-ejecutivo"></a>
## 1. 🎯 RESUMEN EJECUTIVO

### 1.1. Visión del Producto

**OSINT Flow Navigator** es una plataforma web/app que revoluciona la manera en que los investigadores OSINT trabajan, proporcionando:

- ✅ **Input inteligente**: Detecta automáticamente el tipo de dato (email, teléfono, IP, etc.)
- ✅ **Flujos guiados**: 22 flujos de trabajo estructurados con más de 450 herramientas
- ✅ **Pivotaje automático**: Sugiere siguientes pasos basándose en hallazgos
- ✅ **Trazabilidad completa**: Registra todo el proceso de investigación
- ✅ **Alertas OPSEC**: Indica nivel de exposición de cada herramienta
- ✅ **Exportación profesional**: Reportes en PDF, JSON, Markdown

### 1.2. Usuarios Objetivo

- 🕵️ **Investigadores OSINT** (profesionales y aficionados)
- 📰 **Periodistas de investigación**
- 🛡️ **Analistas de ciberseguridad**
- 👮 **Fuerzas de seguridad y analistas de inteligencia**
- 🎓 **Estudiantes de ciberseguridad**
- 🔍 **Detectives privados**

### 1.3. Propuesta de Valor Única

| Competencia (Ciberpatrulla) | OSINT Flow Navigator |
|-----------------------------|----------------------|
| Listado estático de herramientas | **Motor de flujo interactivo** |
| Sin input de datos | **Campo inteligente con detección automática** |
| Flujos separados | **Sistema de pivotaje entre flujos** |
| No guarda progreso | **Workspace persistente con historial** |
| Sin notas ni capturas | **Panel de investigación completo** |
| Herramientas sin contextualizar | **Alertas OPSEC y recomendaciones** |
| Sin exportación | **Reportes profesionales automáticos** |

***

<a name="análisis-competencia"></a>
## 2. 🆚 ANÁLISIS DE LA COMPETENCIA

### 2.1. Ciberpatrulla.com/links

**Fortalezas observadas:**
- ✅ Organización clara por tipo de dato
- ✅ Flujos visuales con pasos
- ✅ Descripción de herramientas
- ✅ Clasificación por nivel de dificultad
- ✅ Tips de Julián (contexto práctico)

**Debilidades que resolveremos:**
- ❌ No hay campo de entrada de datos
- ❌ No detecta automáticamente el tipo de dato
- ❌ No hay sistema de notas o workspace
- ❌ No guarda progreso de investigación
- ❌ No sugiere pivotes entre flujos
- ❌ No hay alertas de privacidad/OPSEC
- ❌ No hay sistema de favoritos o personalización
- ❌ No hay exportación de resultados
- ❌ Herramientas duplicadas en varios flujos

### 2.2. Otras Plataformas OSINT

| Plataforma | Ventajas | Desventajas |
|------------|----------|-------------|
| **IntelTechniques.com** | Muchos recursos, buscadores custom | Sin flujos guiados, disperso |
| **OSINT Framework** | Mapa conceptual visual | Abrumador para principiantes |
| **Aware Online** | Tutoriales detallados | Sin herramientas integradas |

**Nuestro diferenciador**: Combinamos la claridad de Ciberpatrulla + flujos interactivos + workspace + inteligencia.

***

<a name="arquitectura"></a>
## 3. 🏗️ ARQUITECTURA DE LA APLICACIÓN

### 3.1. Stack Tecnológico Recomendado

**Frontend:**
- **Framework**: React.js (Vite)
- **UI Components**: Tailwind CSS + shadcn/ui
- **Estado**: Zustand o Pinia
- **Routing**: React Router
- **Visualización**: React Flow / D3.js para grafos de flujo

**Backend:**
- **API**: Node.js + Express (Optional for V1)
- **Base de datos**: PostgreSQL (datos estructurados) + MongoDB (notas/capturas) -- *Local First for V1*

### 3.2. Arquitectura de Datos

```
┌─────────────────────────────────────────────────────────┐
│                   OSINT FLOW NAVIGATOR                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐      ┌──────────────┐               │
│  │   Frontend   │◄────►│   Backend    │               │
│  │  (React/Vue) │      │   (API)      │               │
│  └──────────────┘      └──────┬───────┘               │
└─────────────────────────────────────────────────────────┘
```

***

<a name="diseño-ui-ux"></a>
## 4. 🎨 DISEÑO DE INTERFAZ (UI/UX)

### 4.1. Dashboard Principal

```
╔═══════════════════════════════════════════════════════════════╗
║  🔍 OSINT Flow Navigator          [🔔] [⚙️] [👤 Usuario]      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                 ║
║         ┌─────────────────────────────────────────────┐       ║
║         │  ¿Qué dato quieres investigar?              │       ║
║         │  ───────────────────────────────────────    │       ║
║         │  |  juan.perez@example.com           | 🔍  │       ║
║         │  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾    │       ║
║         │                                             │       ║
║         │  💡 Detectado automáticamente: EMAIL        │       ║
║         │  📊 Flujo disponible: 5 pasos · 25 tools   │       ║
║         │                                             │       ║
║         │  [▶ Iniciar Investigación]  [🎯 Ver Flujo] │       ║
║         └─────────────────────────────────────────────┘       ║
║                                                                 ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                 ║
║  🎯 ACCESOS RÁPIDOS POR TIPO DE DATO                          ║
║                                                                 ║
║  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     ║
║  │ 📧     │ │ 📱     │ │ 👤     │ │ 🧑     │ │ 📸     │     ║
║  │ Email  │ │Teléfono│ │Username│ │ Nombre │ │  Foto  │     ║
║  │25 tools│ │14 tools│ │17 tools│ │22 tools│ │24 tools│     ║
║  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     ║
║                                                                 ║
║  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     ║
║  │ 🌐     │ │ 🔗     │ │ 🏢     │ │ 📍     │ │ ✈️     │     ║
║  │   IP   │ │  URL   │ │Empresa │ │Dirección│ │Transporte   ║
║  │20 tools│ │28 tools│ │19 tools│ │18 tools│ │12 tools│     ║
║  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     ║
║                                                                 ║
║  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     ║
║  │ 📄     │ │ 💰     │ │ 🎥     │ │ 🎙️     │ │ 💬     │     ║
║  │Documento│ │ Crypto │ │ Vídeo │ │ Audio │ │Telegram│     ║
║  │ 8 tools│ │ 9 tools│ │12 tools│ │15 tools│ │16 tools│     ║
║  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     ║
║                                                                 ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                 ║
║  🛡️ FLUJOS ESPECIALES                                          ║
║                                                                 ║
║  ┌────────────────────┐ ┌────────────────────┐               ║
║  │ 🔐 INVESTIGAR      │ │ ✅ VERIFICAR        │               ║
║  │    DE FORMA SEGURA │ │    SI ES VERDAD     │               ║
║  │    (OPSEC)         │ │    (FACT-CHECK)     │               ║
║  │    22 tools        │ │    35 tools         │               ║
║  └────────────────────┘ └────────────────────┘               ║
║                                                                 ║
║  ┌────────────────────┐ ┌────────────────────┐               ║
║  │ 🕵️ INVESTIGAR      │ │ 📡 MONITORIZAR      │               ║
║  │    EN DARK WEB     │ │    UN TEMA          │               ║
║  │    23 tools        │ │    28 tools         │               ║
║  └────────────────────┘ └────────────────────┘               ║
║                                                                 ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                 ║
║  📂 TUS INVESTIGACIONES RECIENTES                              ║
║                                                                 ║
║  ┌─────────────────────────────────────────────────────────┐  ║
║  │ 📧 Caso #47: Phishing - victim@company.com             │  ║
║  │ 🕐 Hace 2 horas · Paso 3/5 · [Continuar] [Ver] [📤]   │  ║
║  └─────────────────────────────────────────────────────────┘  ║
