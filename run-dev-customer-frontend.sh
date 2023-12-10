container_name="customer-frontend"
image_name="customer-ui-demo-nodejs-v20"

docker build -f frontend-dev.Dockerfile -t $image_name .
docker run -it --name $container_name -p 5173:5173 -v ./customer-frontend:/app $image_name