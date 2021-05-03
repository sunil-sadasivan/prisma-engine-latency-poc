# prisma-engine-latency-poc

## Background
This PoC Demonstrates the significant added latency using the http / unix socket method for communicating between the Prisma engine and a node application.  Using the recently implemented N-API Rust bindings appear to fix this. 

## Run
```
$ docker-compose run current-without-napi

$ docker-compose run current-with-napi
```

## Result
![image](https://user-images.githubusercontent.com/31223104/116890435-9f23da00-abfb-11eb-9c6c-1a8c8f68f57e.png)

## Note
Running on Darwin directly without N-API appears to run fast. This could be related to the linux (Alpine and Debian) builds. 
