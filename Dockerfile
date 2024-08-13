FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm run build
EXPOSE 5000
CMD ["npx", "serve", "-s", "build", "-l", "5000"]

