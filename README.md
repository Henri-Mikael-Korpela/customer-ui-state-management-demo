# Customer UI and state management demo

# Setup

## Development

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

## Progress
- Set up Dockerfile for NodeJS v20 (28 min)
- Create Vite app with React, expose port 5173 for development, manage to display dev server example in the browser (12 min)
- Configure frontendend Dockerfile better, add setup instructions (~25 min)