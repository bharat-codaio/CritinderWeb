#!/bin/sh

docker kill critinder-deploy

docker container rm critinder-deploy

docker rmi -f critinder-web

docker build -f Dockerfile.live -t critinder-web .

docker run --name critinder-deploy -d -p 80:8080 -dit --restart unless-stopped critinder-web
