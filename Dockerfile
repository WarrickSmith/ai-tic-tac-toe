# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . /app/

# Build the application
RUN npm run build

# Expose port 3003
EXPOSE 3003

# Start the application
# run npm install serve -g

# CMD ["serve", "-s", "dist"]

CMD ["npm", "run", "preview"]