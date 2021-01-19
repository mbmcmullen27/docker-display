FROM alpine:3.11

RUN apk update && apk upgrade 

RUN apk add nodejs
RUN apk add npm

WORKDIR /home

COPY . /home
RUN cd /home; npm install

CMD [ "npm", "start"]
