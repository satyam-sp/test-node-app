const Promise = require('promise');
const db = require('../config/database');

module.exports = {
  // READ
  findAll: function() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cafes ORDER BY id ASC', [])
        .then((results) => {
          resolve(results.rows);
        })
        .catch((error) => { 
          reject(error)
         });
    });
  },

}

