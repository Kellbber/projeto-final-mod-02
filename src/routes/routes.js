const routes = require('express').Router();
const LojaController = require('../controllers/LojaController')

routes.get('/', LojaController.getAll);
routes.get('/cadastro', LojaController.cadastro);
routes.post('create', LojaController.create);
module.exports = routes;