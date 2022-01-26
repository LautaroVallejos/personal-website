FROM node:17-alpine3.14

COPY . /usr/code/
WORKDIR /usr/code/

RUN npm install
CMD ["node", "npm run start"]

EXPOSE 3000


