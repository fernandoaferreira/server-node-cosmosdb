module.exports = (appApi) => {

    appApi.post('/itens', (req, res) => {

        appApi
            .app
                .controllers
                    .itemController.createItem(req, res);

    });
};