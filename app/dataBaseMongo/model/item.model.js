//conectando com o cosmosDB
const cosmosDb = require('../conectaBanco/conectMongo');

//Criand o modelo
const itemSchema = new cosmosDb.Schema({

    nome: String,
    qtd: String,
    valor: String

});

//definir a colection
const itemModel = cosmosDb.model('item', itemSchema);

//exportar para ser utilizada em outros modulos
module.exports = itemModel;

