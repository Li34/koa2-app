const Model = require('../models/index');

const getNavs = () => {
  return Model.Nav.find().exec()
}

module.exports = {
  getNavs
};
