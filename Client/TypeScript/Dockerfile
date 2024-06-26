FROM node:20.13.1-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build.log /usr/share/nginx/html/build.log

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
