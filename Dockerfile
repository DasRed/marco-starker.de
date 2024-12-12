FROM node:22-alpine

WORKDIR /var/www

RUN mkdir -p /var/www/.next
COPY ./.next /var/www/.next

COPY ./next.config.js /var/www/next.config.js
COPY ./package.json /var/www/package.json
COPY ./package-lock.json /var/www/package-lock.json

ENV NODE_ENV production

HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:7770/healthcheck || exit 1

CMD npm install --omit=dev && npm start
#CMD cron && /etc/init.d/nginx start && php-fpm >> /var/log/php-fpm-access.log 2> /var/log/php-fpm-error.log
#CMD while true; do sleep 5; done

