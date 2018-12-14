const itemModel = require('../model/item.model');

module.exports.create = async (dados) => {

    try {
        
        const itemCadastrado = await itemModel.create(dados);

        return itemCadastrado;

    } catch (error) {

        console.log(error);
        return error;
        
    };

};