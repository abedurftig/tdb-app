#!/bin/bash
APP_NAME="not_set"
API_URL="not_set"
if [ "$1" == "master" ]
then
  APP_NAME=$HEROKU_APP_NAME
  API_URL=$API_URL_MASTER
fi
if [ "$1" == "develop" ]
then
  APP_NAME=$HEROKU_APP_NAME-staging
  API_URL=$API_URL_DEVELOP
fi
if  [ "$APP_NAME" != "not_set" ] && [ "$API_URL" != "not_set" ]
then
  cd $TRAVIS_BUILD_DIR/heroku
  sed 's@API_URL: .*@'"API_URL: '$API_URL'"'@' -i public/env.js
  git init
  git config user.name $HEROKU_GIT_USER_NAME
  git config user.email $HEROKU_GIT_USER_EMAIL
  heroku git:remote $APP_NAME
  git add -A && git commit -m $TRAVIS_BRANCH@$TRAVIS_BUILD_NUMBER
  git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$APP_NAME.git master -f
fi
