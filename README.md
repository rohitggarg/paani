Client for phones that macchariya uses to communicate
===
* Building via docker:

```shell
docker run --rm -it \
    -v `pwd`:/home/project \
    -w /home/project \
    node_build:alpine npm install
```

* Running serve via docker:

```shell
docker run --rm -it \
    -v `pwd`:/home/project \
    -w /home/project \
    -p8080:8080 \
    node:alpine ./node_modules/.bin/tabris serve
```
