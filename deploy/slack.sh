SLACK_HOOK_URL=${SLACK_HOOK_URL%$'\r'}
curl -X POST --data-urlencode 'payload={"channel": "#as24_web_experience", "username": "showcar-release", "text": "DEVELOP!!! New ShowCar UI release was done. See build here: <https://gitlab.com/web-experience/showcar-ui/pipelines/'"$CI_BUILD_ID"'>" }' "$SLACK_HOOK_URL"
