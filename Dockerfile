FROM node:lts

RUN apt-get update && apt-get install -y fish

WORKDIR /code

COPY package*.json ./

RUN yarn install

RUN mkdir -p /root/.ssh/ && ln -s /run/secrets/ssh_key /root/.ssh/id_rsa
RUN echo "Host *.trabe.io\n\tStrictHostKeyChecking no\n" >> /root/.ssh/config

CMD ["yarn", "dev"]