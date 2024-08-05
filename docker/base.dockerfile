# Use the official Node.js image as a base image
FROM node:22-alpine3.19 AS base
# Set the working directory
WORKDIR /app

# Create separate service directories and copy respective index.js files
COPY dist/host /app/host
COPY dist/remote /app/remote
COPY dist/remote2 /app/remote2

# Install a simple HTTP server
RUN npm install -g http-server

# Expose the necessary ports
EXPOSE 4200 4201 4202

# Define the command to run all three services
CMD sh -c "http-server /app/host -p 4200 & http-server /app/remote -p 4201 & http-server /app/remote2 -p 4202 && wait"
