FROM ubuntu:latest

COPY . /var/www/html

RUN apt-get update -y && \
    apt-get upgrade -y && \ 
    apt-get install nodejs -y && \ 
    apt-get install npm -y && \
    npm install 

EXPOSE 80
CMD npm start