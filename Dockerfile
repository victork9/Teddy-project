FROM node:16-alpine

COPY ./*.env/ ./.env


WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn  run build

EXPOSE 3000

CMD ["npx", "vite", "preview", "--host"]
