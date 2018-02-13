FROM nginx:1.13.8-alpine
COPY ./public /usr/share/nginx/html
COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]