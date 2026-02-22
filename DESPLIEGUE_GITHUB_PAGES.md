# Guía de Despliegue en GitHub Pages

¡Ya he preparado tu proyecto para que funcione sin problemas en GitHub Pages! Se han realizado los siguientes cambios:

1. **Enrutamiento:** Se ha cambiado de `BrowserRouter` a `HashRouter`. Esto evita que la página dé un error "404" si alguien refresca en una ruta específica (como `/tools`).
2. **Configuración de Vite:** Se ha añadido en `vite.config.js` la propiedad `base: '/osint-flow-navigator/'`. Esto asume que el nombre que le vas a poner a tu repositorio en GitHub será **osint-flow-navigator**. Si le pones otro nombre, tendrás que cambiar esa línea en `vite.config.js`.

---

## 🚀 Pasos para subirlo a GitHub

Como vimos que no tenías el comando `gh` en tu PC, te he preparado e inicializado el repositorio local con un "primer commit", así que ahora solo quedan los pasos manuales para subirlo:

### 1. Crea el Repositorio en GitHub
1. Abre tu navegador, ve a GitHub e inicia sesión.
2. Crea un nuevo repositorio (el botón verde "New" o el "+" arriba a la derecha).
3. Escribe el nombre del repositorio (idealmente: **osint-flow-navigator**).
4. Deja el proyecto como "Public" y dale a "Create repository". No marques nada más.

### 2. Enlaza tu proyecto local con el nuevo repositorio
En tu misma terminal de PowerShell (donde estamos trabajando), ejecuta estas líneas **una por una**. Asegúrate de cambiar `TU_USUARIO` por tu verdadero nombre de usuario de GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/osint-flow-navigator.git
git branch -M main
git push -u origin main
```

Si es la primera vez que subes algo, te pedirá que inicies sesión en GitHub desde una ventana en el navegador.

### 3. Despliega (Publica) en GitHub Pages

Para facilitar la publicación sin tener que configurar workflows complicados, lo más simple es usar una librería llamada `gh-pages`. Nos encargamos de configurarlo ahora:

Ejecuta el siguiente comando para instalar el publicador de páginas:
```bash
npm install gh-pages --save-dev
```

Luego, vamos a ir a tu archivo `package.json` y añadiremos dos scripts ("deploy" y "predeploy"). (Yo ya lo haré por ti ahora en un momento).

Una vez enlazado y preparados esos scripts, cada vez que quieras **actualizar tu página al público**, solo tendrás que ejecutar:
```bash
npm run deploy
```
*Este comando construirá el código fuente y lo publicará automáticamente en la rama de "gh-pages".*

### 4. Activa la página en GitHub
1. Ve a la página de tu repositorio recién creado en GitHub.
2. Entra en **Settings** (Ajustes).
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Source** (donde pone "Branch"), selecciona la rama **`gh-pages`** y haz clic en Save.

¡En 1 o 2 minutos tu página estará publicada de forma gratuita! Aparecerá un aviso en la sección superior indicando la URL de tu página.
