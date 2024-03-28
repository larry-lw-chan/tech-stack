# Specify a base image
FROM node:21.4.0-alpine3.18

WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./


# Default Command
CMD ["npm", "start"]