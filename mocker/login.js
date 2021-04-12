const auth = require('./auth.json');

module.exports = {
  'POST /api/login': (req, res) => {
    return res.status(200).json(auth);
  },
};
