# Base Node image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy app files
COPY . .

# Environment variables from Docker
# can override these in docker-compose or docker run
ENV PAYMENT_METHODS="[]"

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
