var app = require('./config/server.js');

//var rotaHome = require('./app/routes/home')(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

//var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function(){
	console.log('############## Server Online... ##############');
});