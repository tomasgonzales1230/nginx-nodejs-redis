FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY ./server.js ./
COPY ./app.js ./

EXPOSE 3000

CMD ["npm","start"]
