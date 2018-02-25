#!/bin/bash
while getopts p:t: option
do
 case "${option}"
 in
 p) PROJECT=${OPTARG};;
 t) TEST_RUN=${OPTARG};;
 esac
done
curl \
    -F "externalProjectId=$PROJECT" \
    -F "externalTestRunId=$TEST_RUN" \
    -F "file=@test-results.xml" \
    $API_URL/upload/junit4-xml-wrapped
