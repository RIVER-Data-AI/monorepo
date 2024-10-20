FROM node:22-alpine3.19

WORKDIR /app

#ENV NODE_ENV production

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 3000
EXPOSE 3001

CMD [ "npm", "run", "start"]