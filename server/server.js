const Express = require('express');
const http = require('http');

const app = new Express();
const server = new http.Server(app);
const router = Express.Router();

const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./cats-api')(router);

app.all('*', function (req, resp, next) {
  resp.header('Access-Control-Allow-Origin', '*');
  resp.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  resp.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

router.get('/', (req, res) => {
  res.sendFile(require('path').join(__dirname, 'index.html'));
});

app.use(router);

server.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});
