# Customer UI and state management demo

This is a simple small-scale customer app written using TypeScript, NodeJS, React, React Router and React Redux Toolkit. It fullfils the following criteria:

- It uses React framework.
- It uses a simple REST API.
- It uses React Router for navigation (and for state management in a way).
- It uses React Redux Toolkit for state management.

## Navigation in the user interface

The app has two pages: the index page and the pastry detail page. The index page displays a list of pastries and the pastry detail page displays the details of a single pastry.

Note that if you go back to the previous page after setting a rating, the rating will be updated and displayed in the pastries index. This way you can verify that the state is indeed shared between the two pages.

## Setup

### Development

It is recommended to use Docker for development. There is a Dockerfile in the root of the project called `frontend-dev` that will set up development environment with NodeJS, React and Vite. You can build the image with the following command:

```bash
docker build -f frontend-dev.Dockerfile -t <YOUR_IMAGE_NAME> .
```

After the image is built, you can run the container with the following command:

```bash
docker run \
    -it \
    --name <YOUR_CONTAINER_NAME> \
    -p <YOUR_PORT_TO_USE_IN_THE_HOST_ENVIRONMENT>:5173 \
    -v ./customer-frontend:/app \
    <YOUR_IMAGE_NAME>
```

Once the container is running, you can run the following commands inside that container to install the dependencies and to start the development server:

```bash
npm install
npm run dev
```

**Note** For developer experience, it is pretty bad that the container for frontend says that the development server is running on port 5173 even if you change to another port for the host environment. This is because the development server is hard-coded to run on port 5173 and the development server is not aware of the port mapping that Docker does. So, if you use any other port than 5173, ignore the port number that the development server says it is running on and use the port that you mapped to the host environment.

There is also a backend server that you can run with Docker. There is a Dockerfile in the root of the project called `backend-dev` that will set up a NodeJS server. You can build the image with the following command:

```bash
docker build -f backend-dev.Dockerfile -t <YOUR_IMAGE_NAME> .
```

After the image is built, you can run the container with the following command:

```bash
docker run \
    -it \
    --name <YOUR_CONTAINER_NAME> \
    -p 8081:8080
    -v ./customer-backend:/app
    <YOUR_IMAGE_NAME>
```

Please ensure that port 8081 is available in your host environment. Otherwise the frontend will not be able to fetch the pastries from the backend.

Once the container is running, you can run the following commands inside that container to install the dependencies and to start the development server:

```bash
npm install
npm start
```

Now you should have both the frontend and backend running. See also the Bash scripts in the root of the project for running the containers (they are tested on Ubuntu Linux on WSL2).

## Testing

There is no testing implemented in code for this demo. The functionality of the app has been tested constantly throughout the development process, but it would definitely benefit more automated testing and documentation associated with that.

I would have probably used Jasmine library for testing, for writing unit tests. I would have also liked to automate user interface testing using Cypress and to automate REST API testing.

Testing aspect is open for discussion.

## Other notes

I tried my best to keep the documentation up-to-date. I hope there are no serious mistakes in the documentation, especially in the development environment setup instructions.

I have had experience working with React Redux somewhat, but I needed to learn React Router and React Redux Toolkit for this demo from the basics. I had never set up React Redux from the ground up.

Also, React Redux had changed somewhat lately, so I had to learn the new way of doing things and I wanted to show a more modern approach to using tools that are available to me. This is one of the reasons why the development took longer than I expected.

This was a fun little project that taught me new things.

## Progress

Times are not 100% accurate, but I tried to keep track of time the best I could:

- Set up Dockerfile for NodeJS v20 (28 min)
- Create Vite app with React, expose port 5173 for development, manage to display dev server example in the browser (12 min)
- Configure frontend Dockerfile better, add setup instructions (~25 min)
- Implement a basic listing of different pastries with image, name and description (54 min)
- Add image zoom effect on pastry card hover (6 min)
- Add React Router, set up path to root component (App) (20 min)
- Add a basic pastry detail page using React Redux (3h 48min)
- Fix pastry image zoom bug which causes image to be displayed on top of the navbar (3 min)
- Set up backend server in NodeJS with a Dockerfile (29 min)
- Add path for serving pastry images (3 min)
- Initialize app state with all pastries loaded from the backend (1h 45min)
- Make star rating selector component (54 min)
- Ensure star rating is saved into global state and that state is displayed on pastries index (30 min)
- Final tweaks, documentation and cleanup (45 min)