/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(3000, function(){
	console.log('Servidor online');
})