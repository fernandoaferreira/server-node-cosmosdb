const mongo = require('mongoose');

const mongoUri = '';
mongo.connect(mongoUri, { useNewUrlParser: true });

mongo.Promise = global.Promise;
console.log('.. Azure CosmosDB Conectado');

module.exports = mongo;