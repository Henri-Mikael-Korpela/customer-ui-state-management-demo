FROM ubuntu:22.04

RUN apt-get update

# Install cURL (Client for URL) in order to download NodeJS
RUN apt-get install -y curl

# Install NodeJS v20
RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh && bash nodesource_setup.sh
RUN apt install -y nodejs

# Ensure correct NodeJS version (20) is installed
RUN node -v | grep "v20" || exit 1