# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios (package.json, tsconfig.json, src)
COPY package*.json tsconfig.json /app/
COPY src /app/src/

# Instala las dependencias
RUN npm install

# Expone el puerto en el que el servidor Express escucha
EXPOSE 3003

# Define el comando para compilar el código TypeScript y luego iniciar el servidor
CMD npm run build && npm start
