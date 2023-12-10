container_name="customer-backend"
image_name="customer-backend-demo-nodejs-v20"

docker build -f backend-dev.Dockerfile -t $image_name .
docker run -it --name $container_name -p 8081:8080 -v ./customer-backend:/app $image_name