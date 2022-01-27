FROM node:17

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

RUN npm install -g npm@8.3.2

EXPOSE 3000

CMD ["npm", "start"]