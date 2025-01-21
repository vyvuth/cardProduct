const jsonServer = require("json-server");
const server = jsonServer.create();
const route = jsonServer.router("cards.json");
const middleWre = jsonServer.defaults();

server.use(middleWre);
server.use(route);

const PORT = 5000;
const HOST = "localhost";

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://${HOST}:${PORT}`);
});
