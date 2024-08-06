# Use the official Node.js image as a base image
FROM node:22-alpine3.19 AS base
# Set the working directory
WORKDIR /dist/apps/

# Install a simple HTTP server
RUN npm install -g serve

# Expose the necessary ports
EXPOSE 4200 4201 4202

# Define the command to run all three services
CMD sh -c "serve remote1 -p 4201 & serve remote2 -p 4202 & serve host -p 80"
