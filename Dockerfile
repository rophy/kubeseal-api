FROM bitnami/sealed-secrets-kubeseal:v0.22.0 as kubeseal

FROM node:18.16.0-alpine3.18

COPY --from=kubeseal /usr/local/bin/kubeseal /usr/local/bin

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app