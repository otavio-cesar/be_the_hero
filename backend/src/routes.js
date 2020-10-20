const express = require('express');

const routes = express.Router();

/* 
Tipo de parâmetros

Query Params: depois do ?
Route Params: Identifica recursos
Requesty Body: Corpo da requisição

*/

routes.get('/u/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento:'Semana OmiStack 11',
        aluno: "Otavio C "
    });
});

module.exports = routes;
