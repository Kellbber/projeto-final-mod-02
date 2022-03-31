const routes = require('express').Router();
const LojaController = require('../controllers/LojaController')

routes.get('/', LojaController.getAll);
routes.get('/cadastro', LojaController.cadastro);
routes.post('/create', LojaController.create);
routes.get('/detalhes/:id', LojaController.detalhes);
routes.get('/detalhes/getById/:id/:method', LojaController.getById);
routes.post('/update/:id', LojaController.update);

module.exports = routes;