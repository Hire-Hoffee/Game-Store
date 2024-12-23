FROM node:22-alpine

WORKDIR /server

COPY package*.json ./

RUN npm ci --production

COPY . .

EXPOSE 7001

CMD rm -rf ./build && cp -r /build/out ./build && npm start
