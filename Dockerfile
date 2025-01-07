FROM nginx:alpine 
RUN apk update && apk upgrade
RUN apk add --update nodejs npm
RUN apk add --update npm
RUN mkdir -p /tmp/site
COPY . /tmp/site
WORKDIR /tmp/site
RUN mkdir -p /tmp/site/_site
RUN npm install && npm run build && mv /tmp/site/_site/* /usr/share/nginx/html
