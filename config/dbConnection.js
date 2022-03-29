const mysql=require('mysql'); //importaçao do mysql

module.exports=function(){ //exportaçao do modulo mysql
	return mysql.createConnection({ //cria uma conecçao com o banco de dados
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'portal_noticias'
	}); //só tem um parametro (o ; determina o final do objeto todo '{}')
}