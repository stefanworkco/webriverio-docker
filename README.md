# WebdriverIO & Docker

## Documentation

First, use [nvm](https://github.com/nvm-sh/nvm) to ensure the correct Node.js version (specified in .nvmrc)

```bash
nvm use
```
Install dependencies
--------------------

`yarn`

## Docker
Run tests using docker containers as browsers (chrome + firefox)

Install docker
--------------
- Mac/Win https://docs.docker.com/get-docker/

Usage
-----
  - First, install Docker on your computer
  - Open terminal and go to the folder of this repository
  - To start Docker hub (download images and build containers):
        `docker-compose up -d`
  - To run test use standard call:  
        `yarn wdio`
  - Check `http://localhost:4444/grid/console` and wait for chrome and firefox to register themselves.

     To see whats going on in the browsers during the test, you can connect
     with a [vnc client](https://www.realvnc.com/en/connect/download/viewer/)
     to `localhost:5901` for Chrome and `localhost:5902` for Firefox. (VNC pass: secret).

Clean up
--------

Shut down the docker grid with command:
  - `docker-compose down`

