# Use an official Node runtime as the base image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the React app
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run the web server
CMD ["nginx", "-g", "daemon off;"]

