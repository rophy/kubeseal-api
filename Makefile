build:
	docker build -t kubeseal-api .

test:
	docker run --rm -it --name=kubeseal-api -e SEALED_SECRETS_CERT=/app/certs/test-cert.pem -p 3000:3000 -v `pwd`/certs:/app/certs kubeseal-api index.js
