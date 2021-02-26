FROM node:alpine

RUN apk add git

WORKDIR /opt/datawarehouse/worker

ENV NODE_ENV=production

ENV SQL_HOST="localhost"
ENV SQL_USER="admin"
ENV SQL_PASSWORD="admin"
ENV SERVER_PORT=80

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
