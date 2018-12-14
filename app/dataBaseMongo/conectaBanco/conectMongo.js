const mongo = require('mongoose');

// ==>>> ATENÇÂO!
const mongoUri = 'Cole sua string de conexão do azure cosmosDB aqui';

mongo.connect(mongoUri, { useNewUrlParser: true });

mongo.Promise = global.Promise;
console.log('.. Azure CosmosDB Conectado');

module.exports = mongo;