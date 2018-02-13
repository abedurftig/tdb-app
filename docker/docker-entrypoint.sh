#!/bin/sh
sed 's@API_URL: .*@'"API_URL: '$API_URL'"'@' -i /usr/share/nginx/html/env.js
nginx -g 'daemon off;'
