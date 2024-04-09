# ProyectoISBN

## Configuración

1. **Instalación de dependencias**: Desde la carpeta `back`, ejecuta `npm install` en la terminal para instalar las dependencias necesarias.

2. **Base de datos**: Es importante tener una base de datos PostgreSQL creada. En el archivo `back/src/config/data-source.ts`, cambia los datos de conexión por los correspondientes a tu base de datos:

   ```typescript
   username: "coloca los tuyos",
   password: "coloca los tuyos",
   database: "coloca los tuyos",
## Ejecución

- **Iniciar servidor**: Ejecuta `npm start` desde la carpeta `back` para levantar el servidor.
- Para ejecutarlo en local antes de cada ruta es: `http://localhost:3000`

## Endpoints

### Obtener todos los usuarios
- **Método:** GET
- **Ruta:** /users
- **Descripción:** Obtiene todos los usuarios.

### Obtener un usuario por su ID
- **Método:** GET
- **Ruta:** /users/:id
- **Descripción:** Obtiene un usuario por su ID.

### Registrar un nuevo usuario
- **Método:** POST
- **Ruta:** /users/register
- **Descripción:** Registra un nuevo usuario.
- **Estructura del body:** JSON
    ```json
    {
        "name": "Raul",
        "email": "alice@example.com",
        "birthdate": "1995-03-20",
        "nDni": 555555555,
        "username": "alicej",
        "password": "strongpassword"
    }
    ```
### Iniciar sesión
- **Método:** POST
- **Ruta:** /users/login
- **Descripción:** Inicia sesión.
- **Estructura del body:** JSON
    ```json
    {
        "username": "alicej",
        "password": "strongpassword"
    }
    ```

### Obtener todos los turnos
- **Método:** GET
- **Ruta:** /appointment
- **Descripción:** Obtiene todos los turnos.

### Obtener un turno por su ID
- **Método:** GET
- **Ruta:** /appointment/:id
- **Descripción:** Obtiene un turno por su ID.

### Crear un nuevo turno
- **Método:** POST
- **Ruta:** /appointment/schedule
- **Descripción:** Crea un nuevo turno.
- **Estructura del body:** JSON
    ```json
    {
        "date": "2024-04-02",
        "time": "10:30 PM",
        "userId": 1
    }
    ```

### Cancelar un turno por su ID
- **Método:** DELETE
- **Ruta:** /appointment/cancel/:id
- **Descripción:** Cancela un turno por su ID.
