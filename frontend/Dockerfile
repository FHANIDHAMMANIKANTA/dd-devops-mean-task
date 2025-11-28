# Step 1: Build Angular app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build Angular app for production
RUN npm run build -- --configuration production

# Step 2: Serve build using Nginx
FROM nginx:alpine

# Use custom Nginx config for Angular routes
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output to Nginx html folder
COPY --from=build /app/dist/angular-15-crud /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

