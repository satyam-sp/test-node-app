const pool = require('../config/database');

const CafeTiming = require('../models/cafesTiming.model')

module.exports.getCafesTiming = (req, res) => {
    CafeTiming.findAll()
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  };