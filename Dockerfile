FROM node:lts

RUN apt-get update && apt-get install -y fish

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN mkdir -p /root/.ssh/ && ln -s /run/secrets/user_ssh_key /root/.ssh/id_rsa
RUN echo "Host *.trabe.io\n\tStrictHostKeyChecking no\n" >> /root/.ssh/config

CMD ["yarn", "dev"]