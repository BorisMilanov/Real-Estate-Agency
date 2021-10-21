const mongoose = require('mongoose');

async function initDatabase() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

module.exports = initDatabase;