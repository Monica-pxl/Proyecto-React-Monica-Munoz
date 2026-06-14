# Galería Interactiva — Proyecto React

## 1. Descripción del proyecto
**Galería Interactiva** es una aplicación web desarrollada con React y TypeScript que permite gestionar una colección de tarjetas fotográficas de paisajes. El proyecto pone en práctica los fundamentos de React: gestión de estado con hooks, comunicación entre componentes mediante props, tipado estático con TypeScript y estilos CSS propios sin librerías externas.

**Objetivo general:** Construir una SPA funcional con operaciones CRUD sobre una galería de tarjetas, incorporando funcionalidades adicionales como modo oscuro, drag & drop para reordenar y sistema de likes.

---

## 2. Tecnologías utilizadas

### Frontend
*   **Framework:** React (v19.x)
*   **Lenguaje:** TypeScript (v5.x)
*   **Bundler / Dev server:** Vite (v7.x)
*   **Estilos:** CSS propio (sin librerías de UI externas)

### Herramientas
*   **Linting:** ESLint (v9.x) con plugins para React Hooks y React Refresh.
*   **Control de versiones:** Git y GitHub.
*   **Editor:** Visual Studio Code.

---

## 3. Estructura del proyecto

```text
proyecto-monica-munoz/
├── public/                  # Recursos estáticos públicos
├── src/
│   ├── assets/              # Imágenes y recursos del proyecto
│   ├── componentes/
│   │   ├── Botones.tsx      # Botones de acción por tarjeta (like, editar, eliminar)
│   │   ├── Controles.tsx    # Panel lateral: formulario para añadir tarjetas y botones globales
│   │   ├── Galeria.tsx      # Componente principal: gestiona el estado y la cuadrícula de tarjetas
│   │   └── Tarjeta.tsx      # Tarjeta individual con modo de edición inline
│   ├── data/
│   │   └── data.ts          # Datos iniciales de los 6 paisajes (título, URL, descripción)
│   ├── App.tsx              # Componente raíz
│   ├── App.css              # Estilos globales
│   ├── index.css            # Reset y estilos base
│   └── main.tsx             # Punto de entrada de la aplicación
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Funcionalidades

*   **Visualización:** Galería en cuadrícula con tarjetas que muestran imagen, título y descripción.
*   **Añadir tarjeta:** Formulario con título (obligatorio), URL de imagen y descripción.
*   **Editar tarjeta:** Edición inline de los campos de cada tarjeta con validación de URL.
*   **Eliminar tarjeta:** Eliminación individual de cualquier tarjeta.
*   **Sistema de likes:** Contador de likes por tarjeta con toggle (dar/quitar like).
*   **Mostrar / Ocultar galería:** Botón global para alternar la visibilidad de la cuadrícula.
*   **Modo oscuro / claro:** Cambio de tema visual aplicado a toda la galería.
*   **Drag & drop:** Reordenación de tarjetas arrastrándolas a la posición deseada.

---

## 5. Instalación y ejecución

### 5.1 Requisitos previos
*   Tener instalado **Node.js** (v18 o superior) y **npm**.

### 5.2 Clonar el repositorio
```bash
git clone https://github.com/Monica-pxl/Proyecto-React-Monica-Munoz.git
cd proyecto-monica-munoz
```

### 5.3 Instalar dependencias
```bash
npm install
```

### 5.4 Iniciar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

### 5.5 Otros comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run build` | Genera la build de producción en `/dist` |
| `npm run preview` | Previsualiza la build de producción en local |
| `npm run lint` | Ejecuta el análisis de ESLint |

---

## 6. Componentes principales

*   **`Galeria`:** Componente contenedor que centraliza todo el estado (lista de tarjetas, visibilidad, tema). Gestiona las operaciones de añadir, eliminar, editar, dar like y reordenar mediante drag & drop.
*   **`Controles`:** Panel con el formulario de alta de nuevas tarjetas y los botones globales de visibilidad y tema.
*   **`Tarjeta`:** Representa cada elemento de la galería. Incluye un modo de edición inline con validación de la URL de imagen antes de guardar.
*   **`Botones`:** Agrupa los botones de acción (👍 like, editar, eliminar) que cada tarjeta expone al usuario.

---

## 7. Estado del proyecto

*   **Funcionalidades principales:** Completadas (CRUD, likes, tema, drag & drop).
*   **Tipado:** Completo con TypeScript en todos los componentes.
*   **Estilos:** CSS propio adaptado a modo claro y oscuro.

---

## 8. Autora

*   **Autora:** Mónica Muñoz de la Torre
*   **Centro:** DIGITECH — CFGS Desarrollo de Aplicaciones Web
*   **Curso:** 2025–2026
```
