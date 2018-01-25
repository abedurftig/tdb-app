#!/bin/bash
APP_NAME="not_set"
if [ "$1" == "master" ]
then
  APP_NAME=$HEROKU_APP_NAME
fi
if [ "$1" == "develop" ]
then
  APP_NAME=$HEROKU_APP_NAME-staging
fi
if  [ "$APP_NAME" != "not_set" ]
then
  cd $TRAVIS_BUILD_DIR/heroku
  git init
  git config user.name $HEROKU_GIT_USER_NAME
  git config user.email $HEROKU_GIT_USER_EMAIL
  heroku git:remote $APP_NAME
  git add -A && git commit -m $TRAVIS_BRANCH@$TRAVIS_BUILD_NUMBER
  git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$APP_NAME.git master -f
fi
