# Gulu 

This is a mock interface of Hulu, and it is not currently in production. The project is entirely experimental, built with Next.js and Tailwind CSS. Information displayed to the user is sourced from the MovieDatabase.

Checkout the running app here for a demonstations

## Getting Started

## Local Run Instructions 

Clone or fork the project and follow the instruction below to get started with running the app on your machine. 

### To run locally without a docker container

`npm run dev`

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To run inside a docker container 

- first build the image 

`$ docker build -t gulu-frontend .`

- Run the image 

`$ docker run -e PORT=3000-p 3000:3000 gulu-frontend`
