#!/bin/sh
sed 's@API_URL: .*@'"API_URL: '$API_URL'"'@' -i /usr/share/nginx/html/env.js
# delete default config
rm /etc/nginx/conf.d/default.conf
# add custom config (routing everything to index.html)
cp ./nginx.conf /etc/nginx/conf.d/
nginx -g 'daemon off;'
