FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install ca-certificates -y

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install --yes build-essential

WORKDIR /home

COPY . /home
RUN cd /home; npm install

EXPOSE 8080

CMD [ "npm", "start"]