# To-Do App with React + Vite

Este proyecto es una aplicación de lista de tareas (To-Do) creada con React y Vite. La aplicación permite a los usuarios agregar, buscar, completar y eliminar tareas de manera interactiva.

## Características

- **Agregar tareas:** Los usuarios pueden agregar nuevas tareas a la lista.
- **Buscar tareas:** Incluye un campo de búsqueda para filtrar tareas por texto.
- **Completar tareas:** Los usuarios pueden marcar tareas como completadas.
- **Eliminar tareas:** Las tareas pueden ser eliminadas de la lista.
- **Modal interactivo:** Un modal se utiliza para agregar nuevas tareas.
- **Persistencia local:** Las tareas se guardan en el almacenamiento local del navegador usando un custom hook.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

src/ ├── App/ 
│ ├── AppUI.jsx 
│ ├── index.jsx 
│ └── useLocalStorage.jsx 
├── CreateTodoButton/ 
│ ├── CreateTodoButton.css 
│ └── index.jsx 
├── Modal/ 
│ ├── Modal.css 
│ └── index.jsx 
├── TodoContext/ 
│ └── index.jsx 
├── TodoCounter/ 
│ ├── TodoCounter.css 
│ └── index.jsx 
├── TodoForm/ 
│ ├── TodoForm.css 
│ └── index.jsx 
├── TodoItems/ 
│ ├── CompleteIcon.jsx 
│ ├── DeleteIcon.jsx 
│ ├── TodoItem.css 
│ └── index.jsx 
├── TodoList/ 
│ ├── TodoList.css 
│ └── index.jsx 
├── TodoLoading/ 
│ ├── TodosLoading.css 
│ └── index.jsx 
├── TodoSearch/ 
│ ├── TodoSearch.css 
│ └── index.jsx 
├── assets/ 
│ └── react.svg 
├── index.css 
└── main.jsx

## Tecnologías Utilizadas

- **React:** Biblioteca para construir interfaces de usuario.
- **Vite:** Herramienta de construcción rápida para proyectos de frontend.
- **React Icons:** Biblioteca de íconos para React.
- **CSS:** Estilización personalizada para los componentes.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Yuenfey/curso-react-intro.git

2. Navega al directorio del proyecto:
   cd curso-react-intro/react-intro1

3. Instala las dependencias:

## Scripts Disponibles
npm run dev: Inicia el servidor de desarrollo.
npm run build: Construye la aplicación para producción.
npm run preview: Previsualiza la aplicación construida.
npm run lint: Ejecuta ESLint para verificar errores de estilo y sintaxis.

## Uso
1. Inicia el servidor de desarrollo:
    npm run dev

2. Abre tu navegador y navega a http://localhost:5173.

## Personalización
Puedes personalizar el proyecto modificando los componentes en la carpeta src/. Los estilos están definidos en archivos CSS individuales para cada componente.