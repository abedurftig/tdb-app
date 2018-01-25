#!/bin/bash
cd $TRAVIS_BUILD_DIR/heroku
git init
git config user.name $HEROKU_GIT_USER_NAME
git config user.email $HEROKU_GIT_USER_EMAIL
heroku git:remote $HEROKU_APP_NAME
git add -A && git commit -m $TRAVIS_BRANCH@$TRAVIS_BUILD_NUMBER
git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git master -f
