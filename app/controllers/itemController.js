const itemRepo = require('../dataBaseMongo/repositorio/item.repo');

module.exports.createItem = async (req, res) => {

    try {

        const dados = req.body;

        const itemCadastrado = await itemRepo.create(dados);

        res.status(200).send(itemCadastrado);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Erro interno do servidor');
        
    };

};