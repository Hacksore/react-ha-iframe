build:
	docker build . -t hacksore/react-ha-iframe:latest
start:
	docker run -p 3000:80 hacksore/react-ha-iframe:latest