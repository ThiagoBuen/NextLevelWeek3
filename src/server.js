// Importar dependências
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
//Iniciando o express
const server = express();
//Criar rota
server
  //Usando arquivos estáticos
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))
  //Configurar template engine

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)
  .get('/orphanages', pages.orphanages)
  .post('/save-orphanage', pages.saveOrphanage)
  .post('/delete-orphanage', pages.deleteOrphanage);

//ligar o server
server.listen(5500);
