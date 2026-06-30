# BackendApropiacion

## Propósito del proyecto
Este repositorio contiene un backend básico desarrollado con Node.js y Express.js para la gestión de tareas. Sirve como base inicial para futuras implementaciones de usuarios, tareas, validaciones, middleware y conexión con bases de datos.

## Estructura del proyecto

```text
backendapropiacion/
├── app.js
├── package.json
├── README.md
└── src/
    └── routes/
        ├── users.routes.js
        └── tasks.routes.js
```

## Instalación
1. Abre la carpeta del proyecto en la terminal.
2. Ejecuta:

```bash
npm install
```

## Ejecución del servidor
Para iniciar el servidor utiliza:

```bash
npm start
```

El servidor quedará disponible en:

```text
http://localhost:3000
```

## Rutas disponibles
- GET / → mensaje principal del backend
- GET /saludo → saludo de prueba
- GET /users → listado de usuarios
- POST /users → creación de usuarios
- GET /tasks → listado de tareas
- POST /tasks → creación de tareas

## Notas
La aplicación está preparada para responder en formato JSON y para escuchar en todas las interfaces de red, lo que permite probarla desde otra computadora en la misma red usando la IP local del equipo.
