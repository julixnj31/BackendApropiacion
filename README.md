# BackendApropiacion# Backend con Node.js y Express.js

## Introducción

Durante el desarrollo de esta guía se implementó un servidor backend básico utilizando Node.js y Express.js. El objetivo fue comprender cómo funciona la capa backend de una aplicación web, cómo se estructura un proyecto profesional y cómo se procesan las solicitudes realizadas desde un navegador.

---

# Reflexión Inicial

## 1. ¿Qué diferencias existen entre frontend y backend?

El frontend es la parte visual de una aplicación, es decir, la interfaz con la que interactúa el usuario mediante botones, formularios, imágenes y contenido visual.

El backend es la parte encargada de procesar la lógica del negocio, validar información, almacenar datos y responder solicitudes realizadas por el frontend.

---

## 2. ¿Por qué el backend es fundamental en aplicaciones reales?

Porque permite almacenar información de manera permanente, validar datos, controlar accesos, gestionar usuarios y procesar operaciones complejas. Sin backend una aplicación sería únicamente una interfaz visual sin funcionalidad real.

---

## 3. ¿Qué responsabilidades técnicas debe asumir un desarrollador backend?

* Diseñar y mantener servidores.
* Gestionar bases de datos.
* Crear APIs.
* Validar información.
* Implementar medidas de seguridad.
* Optimizar el rendimiento de las aplicaciones.
* Gestionar la comunicación entre frontend y backend.

---

## 4. ¿Qué implicaciones tiene no estructurar adecuadamente un proyecto desde el inicio?

Puede generar desorganización, dificultad para mantener el código, problemas para trabajar en equipo, errores frecuentes y una menor capacidad de crecimiento del proyecto.

---

# Contextualización

## ¿Qué es Node.js?

Node.js es un entorno de ejecución que permite utilizar JavaScript fuera del navegador. Gracias a Node.js es posible desarrollar servidores, trabajar con archivos, conectarse a bases de datos y gestionar peticiones HTTP.

---

## ¿Qué es Express.js?

Express.js es un framework para Node.js que simplifica la creación de servidores y rutas, permitiendo desarrollar aplicaciones backend de forma más rápida y organizada.

---

## ¿Por qué utilizar Express?

Porque facilita:

* La creación de servidores.
* El manejo de rutas.
* La gestión de peticiones y respuestas.
* La organización del proyecto.

---

# Actividad de Apropiación

## Proceso de Configuración

### ¿Qué pasos realizaste desde la creación de la carpeta hasta la ejecución del servidor?

1. Crear la carpeta del proyecto.
2. Inicializar Node.js mediante npm init -y.
3. Instalar Express utilizando npm install express.
4. Crear el archivo principal app.js.
5. Configurar el servidor en el puerto 3000.
6. Crear las rutas solicitadas.
7. Ejecutar el servidor mediante npm start o node app.js.
8. Verificar el funcionamiento desde el navegador.

---

### ¿Qué función cumple el archivo package.json?

El archivo package.json almacena la información principal del proyecto, incluyendo nombre, versión, dependencias instaladas y scripts de ejecución.

---

### ¿Qué ocurre al ejecutar npm install?

Node.js descarga e instala todas las dependencias necesarias para el proyecto y genera la carpeta node_modules junto con el archivo package-lock.json.

---

# Comprensión del Servidor

## ¿Qué significa que el servidor esté escuchando en un puerto?

Significa que el servidor permanece activo esperando solicitudes de los clientes a través de una dirección específica, por ejemplo localhost:3000.

---

## ¿Qué sucede internamente cuando accedes a http://localhost:3000/?

El navegador envía una petición HTTP al servidor. El servidor recibe la solicitud, identifica la ruta correspondiente, ejecuta la lógica asociada y devuelve una respuesta al navegador.

---

# Análisis de Rutas

## ¿Qué diferencia existe entre cada ruta creada?

Cada ruta representa una funcionalidad diferente:

* / → Muestra el mensaje principal del sistema.
* /aprendices → Gestiona la información relacionada con aprendices.
* /programas → Gestiona la información relacionada con programas de formación.

---

## ¿Qué papel cumplen los parámetros request y response?

### request (req)

Contiene toda la información enviada por el cliente al servidor.

### response (res)

Permite enviar una respuesta desde el servidor hacia el cliente.

---

# Reflexión Técnica

## ¿Qué dificultades encontraste?

Durante el desarrollo surgieron dificultades relacionadas con:

* Instalación de dependencias.
* Configuración inicial de Node.js.
* Comprensión de las rutas.
* Manejo de errores en la terminal.

---

## ¿Qué aprendiste que no habías comprendido completamente en la parte teórica?

Comprendí cómo funciona realmente la comunicación entre navegador y servidor, la importancia de las rutas y el papel que desempeña Express dentro del desarrollo backend.

---

## ¿Por qué es importante estructurar bien un proyecto desde el inicio?

Porque facilita el mantenimiento, mejora la organización del código, permite trabajar en equipo de manera eficiente y favorece el crecimiento futuro de la aplicación.

---

# Conclusiones

* Node.js permite desarrollar aplicaciones backend utilizando JavaScript.
* Express.js simplifica significativamente la creación de servidores y rutas.
* La correcta organización del proyecto facilita el mantenimiento y escalabilidad.
* Comprender el flujo petición-respuesta es fundamental para el desarrollo de aplicaciones web modernas.
* La práctica permitió fortalecer los conocimientos adquiridos sobre backend y preparar las bases para proyectos más complejos.

---

# Tecnologías Utilizadas

* Node.js
* Express.js
* JavaScript
* Visual Studio Code
* Git
* GitHub
* Navegador Web

---

# Autor
