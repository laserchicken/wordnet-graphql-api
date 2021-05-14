FROM node:alpine

WORKDIR /code

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "production"]
