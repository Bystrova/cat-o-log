const Express = require('express');
const http = require('http');

const app = new Express();
const server = new http.Server(app);
const router = Express.Router();

const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const port = 8080;

app.use(fileUpload());
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
  res.json({
    "cats": "meow"
  });
});

app.use(router);

server.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});
