const inputNome = document.querySelector("#nome");
const labelNome = document.querySelector("#labelNome")

const inputDescricao = document.querySelector("#descricao");
const labelDescricao = document.querySelector("#labelDescricao")

const inputTamanho = document.querySelector("#tamanho");
const labelTamanho = document.querySelector("#labelTamanho")

const inputImagem = document.querySelector("#imagem");
const labelImagem = document.querySelector("#labelImagem")

const buttonCadastrar = document.querySelector("#btnCadastro")

let camposOk = 0;

inputNome.addEventListener("keyup",  ()=>{
    if(inputNome.value.length<3){
        labelNome.innerText = "Nome: (campo obrigatório)";
        labelNome.style.color = "red";
        
    }else{
        labelNome.innerText = "Nome:"
        labelNome.style.color = "black";
        camposOk++;
    }
    validarButton();
})

inputDescricao.addEventListener("keyup",()=>{
    if(inputDescricao.value.length == 0){
        labelDescricao.innerText = "Descrição: (campo obrigatório)"
        labelDescricao.style.color = "red";
        
    }else{
        labelDescricao.innerText = "Descrição:"
        labelDescricao.style.color = "black";
        camposOk++;
    }
    validarButton();
});
inputTamanho.addEventListener("click",  ()=>{
    if(inputTamanho.value==''){
        labelTamanho.innerText = "Tamanho: (campo obrigatório)";
        labelTamanho.style.color = "red";
        
    }else{
        labelTamanho.innerText = "Tamanho:"
        labelTamanho.style.color = "black";
        camposOk++;
    }
    validarButton();
})
inputImagem.addEventListener("keyup",  ()=>{
    if(inputImagem.value.length == 0){
        labelImagem.innerText = "Imagem: (campo obrigatório)";
        labelImagem.style.color = "red";
        camposOk = false;
    }else{
        labelImagem.innerText = "Imagem:"
        labelImagem.style.color = "black";
        camposOk++;
    }
    validarButton();
})

const validarButton = ()=>{

    if(camposOk<4){
        buttonCadastrar.setAttribute("disabled", "disabled")
        buttonCadastrar.classList.add("buttonDisable")
    }else{
        buttonCadastrar.removeAttribute("disabled", "disabled")
        buttonCadastrar.classList.remove("buttonDisable");
    }   
}

validarButton();

