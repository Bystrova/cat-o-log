const cats = require('./cats-service');

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
      if (cats.add(req.body))
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
};

function _isCatIdValid(req, resp) {
  if (typeof +req.params.cat_id != 'number') {
    resp.status(400).json({
      error: 'Id must be a number'
    });
    return false;
  }
  return true;
}
