# Pay Jason

A simple Node/Express application to make payments easier. The application displays various payment methods with their respective logos and QR codes.

## Features
- Node/Express Backend
- Dynamic data population via environment variables
- Dockerized setup
- QR codes generated dynamically

## Prerequisites

- Node.js
- Docker
- Git

## Setup and Installation

### Clone the Repository

```
git clone https://github.com/jscanzoni/pay_jason.git
cd pay_jason
```

### Option 1: Run with Node.js

1. Install Dependencies
   ```
   npm install
   ```

2. Create .env file based on .env.example
   ```
   cp .env.example .env
   ```

3. Run the Application
   ```
   npm start
   ```

### Option 2: Run with Docker

1. Build Docker Image
   ```
   docker build -t pay-jason .
   ```

2. Run Docker Container
   ```
   docker run -e PAYMENT_METHODS='your_JSON_string_here' -p 3000:3000 pay-jason
   ```

## Environment Variables

- PAYMENT_METHODS: JSON string containing array of objects for payment methods.

Example:
```
[{"label":"PayPal","link":"https://paypal.com","logo":"paypal.png"},{"label":"Venmo","link":"https://venmo.com","logo":"venmo.png"}]
```

## Contributing

Feel free to submit pull requests or open issues.

## License

MIT
