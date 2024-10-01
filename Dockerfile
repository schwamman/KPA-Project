FROM --platform=linux/amd64 node:20
## docker build -t kpa-www:latest .
## docker run --platform linux/amd64 -p 2999:2999 kpa-www:latest

WORKDIR /usr/src/app
EXPOSE 2999

COPY package*.json ./
RUN npm ci
COPY . .

ENV NODE_ENV=production
ENV PORT=2999
RUN npm run build

CMD [ "node", "server/index.mjs" ]
