# How to run
# Create container
## Create docker conatiner
```docker build -t node -f Dockerfile .```
## Run docker container
```docker run --cpus=0.5 -p 80:80 -m 1024m node```
# Or pull container from DockerHub
```docker pull st1lson/dev_ops:latest```
# Test endpoint
```curl http://localhost:80/```