# Etapa de construcción
FROM node:18 AS build
WORKDIR /app

# Copiar archivos y paquetes antes de instalar
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# Etapa de servidor web con Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
