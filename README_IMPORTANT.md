# ⚠️ INFORMACIÓN IMPORTANTE DEL PROYECTO

## Problemas de Sincronización en la Nube (Google Drive / OneDrive)

Este proyecto puede experimentar errores graves durante la ejecución de comandos como `npm install` o `npm run dev` si la carpeta del proyecto está siendo **sincronizada en tiempo real** por un cliente de nube como Google Drive, OneDrive o Dropbox.

Los clientes de sincronización en la nube a menudo "bloquean" los archivos de la pesada carpeta `node_modules` y `.git`, lo que causa errores de lectura/escritura (EPERM, EBUSY) en Node.js, Vite y Git.

### 🛠️ Solución Recomendada:

1. **Mueve la carpeta del proyecto** fuera de cualquier directorio administrado por Google Drive o OneDrive a una ubicación completamente local y nativa (ej: `C:/Proyectos/FlujoOsint`).
2. Una vez movida, abre la terminal allí y vuelve a ejecutar:
   ```bash
   npm install
   npm run dev
   ```

## Despliegue Automatizado (gh-pages)

El proyecto está actualmente integrado mediante flujos de **GitHub Pages**. 

No uses la herramienta de MCP (Model Context Protocol) ni servicios complejos para alojarlo. Tu web funciona 100% de manera gratuita con el uso nativo de HashRouter.

- Si haces modificaciones al código fuente de la carpeta `src/`, debes guardarlas con `git add .` y `git commit`.
- Tras esto, simplemente ejecuta **`npm run deploy`** en la terminal.
- El proyecto se reconstruirá en una carpeta `dist/` temporal que subirá automáticamente a la rama virtual de `gh-pages`, actualizando la página web en directo.
