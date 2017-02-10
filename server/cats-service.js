const fs = require('fs');
const path = require('path');
const CATS_STORAGE_PATH = path.resolve(__dirname, './storage/cats.json');

function all() {
  return _readCats();
}

function byId(id) {
  return _readCats().find((el) => {
    if (el.id == id) return true;
  });
}

function add(cat) {
  let cats = _readCats();
  cats.push(cat);
  return _writeCats(cats);
}

function replace(id, newCat) {
  return _removeOrReplace(id, newCat);
}

function remove(id) {
  return _removeOrReplace(id);
}

function count() {
  return _readCats().length;
}

function _removeOrReplace(id, newCat) {
  let cats = _readCats(), isUpdated = false;
  cats.find((el, index, arr) => {
    if (el.id == id) {
      if (newCat) {
        cats.splice(index, 1, newCat);
      } else {
        cats.splice(index, 1);
      }
      isUpdated = _writeCats(cats);
    }
  });
  return isUpdated;
}


function _readCats() {
  let cats;
  try {
    cats = fs.readFileSync(CATS_STORAGE_PATH, 'utf-8');
  } catch (e) {
    console.error('storage read error!', e);
  }
  try {
    cats = JSON.parse(cats);
  } catch (e) {
    console.error('storage parse error', e);
    cats = null;
  }
  return cats;
}

function _writeCats(cats) {
  try {
    fs.writeFileSync(CATS_STORAGE_PATH, JSON.stringify(cats));
  } catch (e) {
    console.error('storage write error!', e);
    return false;
  }
  return true;
}

module.exports = {
  all,
  byId,
  add,
  remove,
  replace,
  count,
};
