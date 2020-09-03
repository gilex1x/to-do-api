FROM node:latest
LABEL Nataliza González <nataliagonzalezjunco@gmail.com>

WORKDIR /api-app
COPY ./package.json ./package.json
RUN npm install --production-only

COPY ./ ./
CMD npm start
EXPOSE 3000
