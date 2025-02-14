# Imagen base de Node.js
FROM node:18

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos y paquetes
COPY package.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Construcción de la aplicación
RUN npm run build

# Servir la app en un servidor web estático
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Exponer puerto
EXPOSE 3000
