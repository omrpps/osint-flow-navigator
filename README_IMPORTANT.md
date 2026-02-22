# OSINT Flow Navigator

## 🚀 Instalación y Ejecución

⚠️ **IMPORTANTE: Problemas con Google Drive / OneDrive**
Este proyecto se encuentra en una carpeta sincronizada (`D:/Mi unidad/...`). Esto causa bloqueos en los archivos y errores al instalar dependencias con `npm install`.

### ✅ Pasos para ejecutar el proyecto correctamente:

1.  **Mueve la carpeta del proyecto** fuera de Google Drive a una ubicación local (ej: `C:/Proyectos/FlujoOsint` o `Escritorio/FlujoOsint`).
2.  Abre una terminal en la nueva carpeta.
3.  Ejecuta los siguientes comandos:

```bash
# 1. Instalar dependencias base
npm install

# 2. Instalar dependencias de UI y navegación (si fallaron antes)
npm install lucide-react react-router-dom clsx tailwind-merge class-variance-authority zustand @radix-ui/react-slot

# 3. Iniciar el servidor de desarrollo
npm run dev
```

### 🛠️ Tecnologías
- **Vite + React**: Framework principal.
- **Tailwind CSS**: Estilos modernos.
- **Zustand**: Gestión de estado.
- **Lucide React**: Iconografía.

## 📄 Características Implementadas
- **Dashboard**: Vista general con tarjetas de acceso rápido.
- **Motor de Flujos**: Sistema paso a paso para investigaciones.
- **Input Inteligente**: Detecta Emails, IPs, etc. en la barra superior.
- **Modo Oscuro/Claro**: Preparado (sistema base en `index.css`).

## ⚠️ Known Issues
- `npm install` falla si la carpeta está sincronizándose en tiempo real. Pausa la sincronización o mueve la carpeta.
