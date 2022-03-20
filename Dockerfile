
### STAGE 1:BUILD ###
FROM node:17-alpine AS build

WORKDIR /dist/src/app

RUN npm cache clean --force

COPY . .
RUN yarn install
RUN yarn format
RUN yarn lint
RUN yarn build --prod

### STAGE 2:BUILD ###
FROM nginx:latest AS ngi

COPY --from=build /dist/src/app/build /usr/share/nginx/html

COPY /config/nginx.conf  /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 90