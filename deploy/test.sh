#!/bin/bash

set -e

cd deploy
bundle install
bundle exec rake test:pull test:screenshot test:user_journeys
