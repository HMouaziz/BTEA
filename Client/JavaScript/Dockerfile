FROM node:20.13.1-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port and start the application
EXPOSE 3000

CMD ["npm", "run", "dev"]