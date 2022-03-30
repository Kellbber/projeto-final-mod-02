const Items = require("../models/Items")
const orderById= {order: [["id","ASC"]]}
const getAll = async (req, res) => {
	try{
	const loja = await Items.findAll(orderById);
	res.render("index", {loja})
	}catch (err) {
	res.status(500).send({err: err.message})
	}
}
const cadastro = (req, res) =>{
    try{ 

        res.render("cadastro");
        }catch (err) {
        res.status(500).send({err: err.message})
        }
}
const create = async (req, res) => {
    try{ 
        const item = req.body;
        if(!item){
            return res.redirect('cadastro')
        }await Items.create(item)
        res.redirect('/');
        }catch (err) {
        res.status(500).send({err: err.message})
        }
}
module.exports = { 
    cadastro,
	getAll,
    create,
	}