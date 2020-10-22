const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngsController');
const SessionController = require('./controllers/SessionController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;

/*
** Tipo de parâmetros
** 
** Query Params: depois do ?
** Route Params: Identifica recursos
** Requesty Body: Corpo da requisição
** 
*/