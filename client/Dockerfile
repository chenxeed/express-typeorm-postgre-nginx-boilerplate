FROM node:21-alpine3.17

# Dependencies
COPY ./package* /client/
WORKDIR /client

RUN npm ci --unsafe-perm=true
RUN npm install -g next

WORKDIR /
COPY . /client
WORKDIR /client

CMD next dev
