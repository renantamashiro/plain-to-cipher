# app build
FROM node:lts-alpine AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# nginx server
FROM nginx:alpine
COPY --from=build ./app/dist/plain-to-cipher/ /usr/share/nginx/html
EXPOSE 80