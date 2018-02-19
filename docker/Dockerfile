FROM nginx:1.13.8-alpine
COPY ./public /usr/share/nginx/html
COPY ./docker/docker-entrypoint.sh /
COPY ./docker/nginx.conf /
ENTRYPOINT ["/docker-entrypoint.sh"]