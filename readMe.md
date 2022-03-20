# NUSMOC_MAY_2022_Wei Yixin_fibonacci

To run the web service:

1. Download Dockerfile.txt, run the following command in terminal
```
docker build -f path/to/Dockerfile.txt -t fib_project:v1 .
```
**(Recommended)** or go to the parent directory of Dockerfile.txt in terminal, run the following command
```
docker build -t fib_project:v1 .
```

2. Run the docker image, run the following command in terminal
```
docker run -p 3000:3000 -it fib_project:v1
```

3. The docker image is currently ran as a container. Run the following command in terminal, the terminal should be attached to the docker container now.
```
cd fibonacci_project/project/

nvm install 10
nvm alias default 10
npm install -g npm@6

npm install
npm run compile
npm start
```
P.S. This step is necessary since we need to install Node Version Manager, which is very difficult to install by simply running the Dockerfile, because it requires to update .bashrc file. 

4. Enter http://localhost:3000/ in browser, you should see the service running.
