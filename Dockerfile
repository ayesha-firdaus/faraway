FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm run build
EXPOSE 3000


