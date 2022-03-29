module.exports=function(app){ //estou pegando o module criado em server.js

	app.get('/formulario', function(req, res){
		res.render('admin/formulario.ejs');
	});
}