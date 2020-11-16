# react-ha-iframe
Test using react in a lovelace iframe powered by [home-assistant-js-websocket](https://github.com/home-assistant/home-assistant-js-websocket) for the data connection.

## Demo
Pass a long lived `apiToken` query string param and `host` if your host differs than the default.

Example card

![example](https://i.imgur.com/gMm7f5S.png)

Start the docker container to expose port 8080 then configure the webpage card.

```
docker run -p 3000:80 hacksore/react-ha-iframe
```

Configure the card

![Imgur](https://i.imgur.com/0LlobYF.png)



### Final thoughts
This is probably not practical to spawn a new socket connection for every card. Maybe you could use message posting to try and only use one socket.

This is just a POC so take what you want from this 😎