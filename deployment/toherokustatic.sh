#!/bin/bash
cd $CI_PROJECT_DIR/heroku
git init
git config user.name $HEROKU_GIT_USER_NAME
git config user.email $HEROKU_GIT_USER_EMAIL
#heroku git:remote $HEROKU_APP_NAME
heroku git:remote tdb-app
git add -A && git commit -m "Test"
#git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git master -f
git push https://heroku:$HEROKU_API_KEY@git.heroku.com/tdb-app.git master -f