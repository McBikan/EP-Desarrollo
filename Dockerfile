# Usa la imagen oficial de Nginx como base
FROM nginx:alpine

# Copia los archivos del proyecto al directorio donde Nginx busca archivos
COPY . /usr/share/nginx/html

# Expone el puerto 80 para que el contenedor sirva el contenido web
EXPOSE 80
