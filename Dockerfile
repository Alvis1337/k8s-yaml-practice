FROM node:21.6.2 as build-stage

WORKDIR /build

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . ./

RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=build-stage /build/dist /var/www/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
