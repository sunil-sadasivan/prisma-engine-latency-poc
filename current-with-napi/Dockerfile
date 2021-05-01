FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV production
COPY package.json /usr/src/app/.
RUN yarn install --production
COPY ./index.js /usr/src/app/.
COPY ./prisma /usr/src/app/.
RUN yarn prisma generate

CMD [ "node", "index.js" ]
