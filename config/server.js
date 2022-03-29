const express=require('express'); //importação do express
const app=express(); //execuçao do express
app.set('view-engine', 'ejs'); //configuraçao do ejs como motor de telas(renderizar, carregar no navegador)
app.set('views', './app/views'); //alteraçao de diretorio (a pasta views se encontra dentro da pasta app)

module.exports=app; //vou exportar o 'app' (retorna app)