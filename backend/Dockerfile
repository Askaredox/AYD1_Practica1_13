FROM node:current-alpine
WORKDIR /app
COPY package.json .
RUN npm install --quiet
COPY . .
CMD node server.js