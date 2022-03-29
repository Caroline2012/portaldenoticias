const dbConnection=require('../../config/dbConnection'); //voltando pastas ('...')

module.exports=function(app){

	var connection=dbConnection(); //executando a const dbConnection e armazenando

	app.get('/noticias', function(req, res){

		connection.query('select * from noticias', function (error, result){
			if (error) {
				console.log(error)
			}
			res.render('noticias/noticia.ejs', {noticias:result}); //preciso de um objeto json para passar a resposta
		});
	});
};