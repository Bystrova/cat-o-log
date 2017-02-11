const cats = require('./cats-service');
const path = require('path');
const fs = require('fs');
const multer = require('multer')

const PICTURES_FOLDER = path.resolve(__dirname, '../public/cats');

module.exports = router => {
  router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

  router.route('/cats')
    .get((req, resp) => {
      resp.json(cats.all());
    })
    .post((req, resp) => {
      let cat = req.body;
      cat.id = cats.lastId();
      if (cats.add(cat))
        resp.status(200).send();
      else
        resp.status(500).json({
          error: 'cat write error'
        });
    });

  router.route('/cats/:cat_id')
    .get((req, resp) => {
      if (_isCatIdValid(req. resp)) {
        resp.json(cats.byId(+req.params.cat_id)); 
      }
    })
    .put((req, resp) => {
      if (!_isCatIdValid(req, resp)) {
        return;
      } else if (cats.replace(+req.params.cat_id, req.body)) {
        resp.status(200).send();
      } else {
        resp.status(500).json({
          error: "cat deletion error"
        });
      }
    })
    .delete((req, resp) => {
      if (!_isCatIdValid(req, resp)) {
        return;
      } else if (cats.remove(+req.params.cat_id))
        resp.status(200).send();
      else
        resp.status(500).json({
          error: "cat deletion error"
        });
    });

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, PICTURES_FOLDER);
    },
    filename: function (req, file, cb) {
      cb(null, 'cat-' + cats.lastId() + path.extname(file.originalname));
    }
  })
  const upload = multer({
    storage: storage
  });

  router.post('/cats/upload', upload.single('cat_pic'), (req, resp) => {
    if (!req.file) {
      resp.status(400).send({
        error: "no files was upload"
      });
    } else {
      resp.status(200).send();
    }
  });
}



function _isCatIdValid(req, resp) {
  if (typeof +req.params.cat_id != 'number') {
    resp.status(400).json({
      error: 'Id must be a number'
    });
    return false;
  }
  return true;
}
