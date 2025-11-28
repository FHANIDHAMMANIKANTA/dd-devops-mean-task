# 1. Use Node image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy backend source code
COPY . .

# 5. Environment + Port
ENV PORT=8080
EXPOSE 8080

# 6. Start server
CMD ["node", "server.js"]

