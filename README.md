# How to run
# Create container
#### Create container
```docker build -t node -f Dockerfile .```
#### or pull container
```docker pull st1lson/dev_ops:latest```
# Run docker container
```docker run --cpus=0.5 -p 80:80 -m 1024m st1lson/dev_ops```
# Test endpoint
```curl http://localhost:80/```
