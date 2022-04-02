const { render } = require("express/lib/response");
const Items = require("../models/Items")
const orderById= {order: [["id","ASC"]]}
let mensagem = "";
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
        res.render("cadastro", {mensagem});
        }catch (err) {
        res.status(500).send({err: err.message})
        }
}
const timeout = () =>{
    setTimeout(() => {
        mensagem = "";
      }, 3000);
}
const create = async (req, res) => {
    try{ 
        const item = req.body;
        if (!item.nome) {
          res.render("cadastro", {
            mensagem: "Descrição é obrigatório",
          });
          timeout();;
         }
        if (!item.descricao) {
            res.render("cadastro", {
              mensagem: "Descrição é obrigatório",
            });
            timeout();
        }
        
        if (!item.tamanho) {
          
            res.render("cadastro", {
              mensagem: "Tamanho é obrigatório de P até XXG",
            });
            timeout();
        }
        
        if (!item.imagem) {
            res.render("cadastro",{
              mensagem: "Imagem é obrigatório",
            });
            timeout();
        }
        if(!item){
        return res.redirect('cadastro')
      }
        await Items.create(item)
        res.redirect('/');
        }catch (err) {
        res.status(500).send({err: err.message})
        }
}
    const detalhes = async (req, res) => {
        const item = await Items.findByPk(req.params.id);
        try{
            res.render('detalhes',{ items: item, itemPut: null, itemDel: null});
        }catch (err) {
            res.status(500).send({err: err.message})
            }
    }
    const getById = async (req, res) => {
        try{
            const method = req.params.method;
            const loja = await Items.findAll();
            const item = await Items.findByPk(req.params.id)
    if(method == 'put'){
    res.render("detalhes",{
    items: item,
    itemPut: item,
    itemDel: null
    
     })
    }else {
    res.render('detalhes',{
    items:item,
    itemPut: null,
    itemDel: item
    
     })
    
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

    const update = async (req,res) => {
        try{
            const item = req.body;
            await Items.update(item, {where: {id: req.params.id}})
            res.redirect("/")
                 }catch (err) {
            res.status(500).send({err: err.message});
    		         }
    }

    const remove = async (req,res) => {
        try{
            await Items.destroy({where: {id: req.params.id}})
            res.redirect("/")
                 }catch (err) {
            res.status(500).send({err: err.message});
    		         }
    }
    
    

module.exports = { 
    cadastro,
	getAll,
    create,
    detalhes,
    getById,
    update,
    remove,
	}
