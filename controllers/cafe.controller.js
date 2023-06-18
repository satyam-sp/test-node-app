const pool = require('../config/database');

const Cafe = require('../models/cafe.model')

module.exports.getCafes = (req, res) => {
    Cafe.findAll()
      .then((result) => {
        console.log(result,'result')
        return res.json(result);
      })
      .catch((err) => {
        console.log(err,'err')
        return res.status(500).json({ error: err.message });
      });
};