# Use an official Node runtime as the base image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Use a lightweight server to serve the built app
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx to serve the built app
CMD ["nginx", "-g", "daemon off;"]
