# Librería Middas

Esta aplicación web es una librería virtual que permite a los usuarios registrar sus cuentas, acceder a una amplia variedad de libros, gestionar su colección personal, y marcar libros como favoritos para acceder fácilmente a ellos en el futuro. Además, ofrece funcionalidades como recuperación de contraseña y un sistema de autenticación seguro. Está desarrollada con el stack MERN (MongoDB, Express.js, React.js, Node.js) y utiliza diversas tecnologías tanto en el frontend como en el backend para ofrecer una experiencia completa y funcional.

## Características

- Registro de usuarios
- Recuperación de contraseña
- Login de usuarios
- Listado de libros
- CRUD de libros
- Agregar libro a favoritos
- Visualizar libros favoritos

## Tecnologías Utilizadas

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dependencias:
  - CORS
  - JWT
  - Passport
  - Multer
  - Cloudinary
  - bcryptjs
  - Nodemailer

### Frontend

- React.js
- Dependencias:
  - Tailwind CSS
  - daisyUI
  - react-hook-form
  - axios
  - jwt-decode
  - react-data-table
  - react-icons
  - sonner
  - react-router-dom
  - yup

## Instalación en Local

1. Clona el repositorio: `git clone https://github.com/pablopaul01/LibreriaMiddas.git`
2. Renombra el archivo `EXAMPLE.env` a `.env` y agrega los datos necesarios para el funcionamiento en local.
3. Instala las dependencias del backend: `cd backend && npm install`
4. Instala las dependencias del frontend: `cd frontend && npm install`
5. Inicia el servidor backend: `npm start` en la carpeta `backend`
6. Inicia el servidor frontend: `npm start` en la carpeta `frontend`
7. Accede a la aplicación en tu navegador: `http://localhost:5173`

## Uso

### Endpoints del Backend

La ruta base para acceder a los endpoints es `http://localhost:8080/api/v1`

#### Usuarios

- `POST /users/register`: Para registrar un usuario.
- `GET /users`: Para obtener todos los usuarios.
- `GET /users/:id`: Para obtener un usuario por su ID.
- `POST /users/login`: Para que un usuario inicie sesión.
- `POST /users/recover`: Para enviar un correo de recuperación de contraseña.
- `PUT /users/reset/:id/:token`: Para cambiar la contraseña de un usuario que no la recuerda.
- `PUT /users/favorite/:userId`: Para agregar un libro a favoritos en el usuario.
- `PUT /users/favorite/remove/:userId`: Para remover un libro de favoritos en el usuario.

#### Libros

- `POST /books`: Para crear un nuevo libro.
- `GET /books`: Para obtener todos los libros.
- `GET /books/:id`: Para obtener un libro por su ID.
- `PUT /books/:id`: Para actualizar un libro.
- `DELETE /books/:id`: Para borrar un libro.

## Contribución

Indica cómo contribuir a tu proyecto, ya sea reportando problemas, sugiriendo mejoras o enviando pull requests.

## Licencia

Indica la licencia bajo la cual se distribuye tu aplicación.
