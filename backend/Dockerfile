# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the required port
EXPOSE 5000

# Set the command to run your TypeScript application
CMD ["npx", "ts-node", "index.ts"]
