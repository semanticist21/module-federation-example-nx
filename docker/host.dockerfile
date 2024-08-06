# Use the official Node.js image as a base image
FROM node:22
# Set the working directory

WORKDIR /apps/
COPY dist/apps/ .

# Install a simple HTTP server
RUN npm install -g serve

# Verify installation of serve
RUN serve --version

# Define the command to run all three services
CMD ["serve", "-s", "host", "-p", "80"]

