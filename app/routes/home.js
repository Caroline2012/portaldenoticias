module.exports=function(app){
	
	app.get('/', function(req, res){ //req= o que o usuário enviou, a requisiçao
		res.render('home/index.ejs');
	});
}