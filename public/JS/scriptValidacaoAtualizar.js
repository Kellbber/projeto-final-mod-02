const inputNome = document.querySelector("#nomeAtualizar");
const labelNome = document.querySelector("#labelNomeAtualizar")

const inputDescricao = document.querySelector("#descricaoAtualizar");
const labelDescricao = document.querySelector("#labelDescricaoAtualizar")

const inputTamanho = document.querySelector("#tamanhoAtualizar");
const labelTamanho = document.querySelector("#labelTamanhoAtualizar")

const inputImagem = document.querySelector("#imagemAtualizar");
const labelImagem = document.querySelector("#labelImagemAtualizar")

const buttonCadastrar = document.querySelector("#btnAtualizar")

let campo1 = true;
let campo2 = true;
let campo3 = true;
let campo4 = true;


inputNome.addEventListener("blur",  ()=>{
    if(inputNome.value.length<3){
        labelNome.innerText = "Nome: (campo obrigatório)";
        labelNome.style.color = "red";
        campo1 = false;
        
    }else{
        labelNome.innerText = "Nome:"
        labelNome.style.color = "white";
        campo1 = true;
    }
    validarButton();
})

inputDescricao.addEventListener("blur",()=>{
    if(inputDescricao.value.length == 0){
        labelDescricao.innerText = "Descrição: (campo obrigatório)"
        labelDescricao.style.color = "red";
        campo2 = false;
        
        
    }else{
        labelDescricao.innerText = "Descrição:"
        labelDescricao.style.color = "white";
        campo2 = true;
    }
    validarButton();
});
inputTamanho.addEventListener("click",  ()=>{
    if(inputTamanho.value.length==''){
        labelTamanho.innerText = "Tamanho: (campo obrigatório)";
        labelTamanho.style.color = "red";
        campo3 = false;
        
        
    }else{
        labelTamanho.innerText = "Tamanho:"
        labelTamanho.style.color = "white";
        campo3 = true;
    }
    validarButton();
})
inputImagem.addEventListener("blur",  ()=>{
    if(inputImagem.value.length == 0){
        labelImagem.innerText = "Imagem: (campo obrigatório)";
        labelImagem.style.color = "red";
        campo4 = false;
    }else{
        labelImagem.innerText = "Imagem:"
        labelImagem.style.color = "white";
        campo4 = true;
    }
    validarButton();
})

const validarButton = ()=>{

    if((campo1==false)||(campo2==false)||(campo3==false)||(campo4==false)){
        buttonCadastrar.setAttribute("disabled", "disabled")
        buttonCadastrar.classList.add("buttonDisable")
    }else{
        buttonCadastrar.removeAttribute("disabled", "disabled")
        buttonCadastrar.classList.remove("buttonDisable");
    }   
}

validarButton();

