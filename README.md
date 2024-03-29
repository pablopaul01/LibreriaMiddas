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
2. Renombra el archivo `EXAMPLE.env` a `.env` y agrega los datos necesarios para el funcionamiento en local. (para obtener los datos de las variables de entorno ingresar al siguiente [Link](https://es.anotepad.com/notes/nnjj6r2x))
3. Instala las dependencias del backend: `cd backend && npm install`
4. Instala las dependencias del frontend: `cd frontend && npm install`
5. Inicia el servidor backend: `npm run dev` en la carpeta `Back`
6. Inicia el servidor frontend: `npm run dev` en la carpeta `Front`
7. Accede a la aplicación en tu navegador: `http://localhost:5173`

## Uso

## Instrucciones de Uso

### Agregar un nuevo libro

Para agregar un nuevo libro hacer click en el botón "Agregar libro" y completar el formulario. Todos los datos son requeridos.

![Agregar nuevo libro](https://res.cloudinary.com/dcv6aut2v/image/upload/v1710336830/Middas/nuevo_book_ccgoec.jpg)

### Agregar un libro a favoritos

Para agregar un libro a los favoritos del usuario hacer click en el corazón de la fila del libro deseado. Una vez agregado el corazón se mostrará con color de relleno. Si queremos quitarlo de favoritos volvemos a hacer click en el corazón.

![Agregar a favoritos](https://res.cloudinary.com/dcv6aut2v/image/upload/v1710335986/Middas/1_h1bwhq.jpg)

### Editar un libro

Para editar un libro hacer click en el lápiz de la fila del libro deseado. Se abrirá un formulario donde podremos ingresar la información que queremos cambiar, pueden ser todos los campos o solo los que el usuario necesite cambiar. Si el campo no se va a modificar, dejar en blanco dicho campo.

![Editar libro](https://res.cloudinary.com/dcv6aut2v/image/upload/v1710335986/Middas/2_brskly.jpg)

### Eliminar un libro

Para eliminar un libro hacer click en el lápiz de la fila del libro deseado. Se pedirá confirmación antes de eliminar.

![Eliminar libro](https://res.cloudinary.com/dcv6aut2v/image/upload/v1710335986/Middas/3_ygvlgo.jpg)

### Ver más información sobre el libro

Para ver más información sobre el libro hacer click sobre el icono de info. Esto abrirá una card con la información completa del libro. Esto es útil para versiones móviles donde la tabla oculta la mayoría de las columnas.

![Información del libro](https://res.cloudinary.com/dcv6aut2v/image/upload/v1710335987/Middas/4_fzjgon.jpg)

### Ver listado de libros favoritos

Para ver el listado de todos los libros agregados a favoritos por el usuario.

![Listado de libros favoritos](https://res.cloudinary.com/dcv6aut2v/image/upload/v1710335988/Middas/6_s6jkyv.jpg)


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
