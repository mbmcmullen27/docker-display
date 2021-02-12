FROM node:14-alpine

WORKDIR /home

COPY . /home
RUN cd /home; npm install

CMD [ "npm", "start"]
