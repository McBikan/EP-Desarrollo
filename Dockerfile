# Dockerfile

# Imagen base de Node.js (actualizada a una versión más reciente)
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración (package.json, package-lock.json)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar solo la carpeta `server`, `client` y otros archivos necesarios
COPY ./server ./server
COPY ./client ./client
#COPY ./prometheus ./prometheus

# Exponer el puerto de la aplicación
EXPOSE 3000

# Cambiar el directorio de trabajo a `server` donde está `index.js`
WORKDIR /app/server

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
