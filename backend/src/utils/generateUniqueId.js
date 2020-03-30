const crypto = require('crypto');   

module.exports = function generateIdUniqueId() {
    return crypto.randomBytes(4).toString('HEX');

}


