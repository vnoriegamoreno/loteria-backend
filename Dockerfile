# Usar una imagen base de Node.js# Usar una imagen base de Node.js
FROM node:18.17.0

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Ejecutar las migraciones de Sequelize antes de iniciar la API
RUN npm run migrate

# Exponer el puerto en el que se ejecutará la API (el puerto predeterminado para Express es 3000)
EXPOSE 3000

# Comando para iniciar la API
CMD ["npm", "start"]
