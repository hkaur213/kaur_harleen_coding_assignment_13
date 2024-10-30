# Use the official Node.js image for building the app.
FROM node:16 AS build

# Set the working directory to match the assignment name.
WORKDIR /kaur_harleen_coding_assignment_13

# Copy package.json and package-lock.json files to install dependencies first.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the application for production.
RUN npm run build

# Use the official Nginx image for serving the app.
FROM nginx:alpine

# Copy the build files from the previous stage to Nginx’s default directory.
COPY --from=build /kaur_harleen_coding_assignment_13/build /usr/share/nginx/html

# Expose port 8018 to access the app.
EXPOSE 8018

# Start Nginx server.
CMD ["nginx", "-g", "daemon off;"]
