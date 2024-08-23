
let tamanhoSenha = document.querySelector(".password-size-number");
const checkbox = document.querySelectorAll(".password-checkbox")
const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "01234567890123456789"
const simbolos = "!@#$%&*():;><=+-_?/~[]{}^|"
const nivelSenha = document.querySelector(".password-strenght")

function botaoMais(){
    if (tamanhoSenha.textContent < 20){
        tamanhoSenha.textContent++;
        geraSenha();
    }
}

function botaoMenos(){
    if (tamanhoSenha.textContent > 4){
        tamanhoSenha.textContent--;
        geraSenha();
    }
}

function geraSenha(){
    alfabeto = ""

    if (checkbox[0].checked){
        alfabeto = alfabeto + maiusculas
    }
    
    if(checkbox[1].checked){
        alfabeto = alfabeto + minusculas
    }
    
    if(checkbox[2].checked){
        alfabeto = alfabeto + numeros
    }
    
    if(checkbox[3].checked){
        alfabeto += simbolos
    }

    let senha = ""
    for (i=1;i<=tamanhoSenha.textContent;i++){
        let numeroAleatorio = alfabeto[Math.floor(Math.random()*alfabeto.length)]    
        senha = senha + numeroAleatorio
    }
    document.querySelector(".principal-output").value = senha
    let forcaSenha = Math.log10(alfabeto.length**tamanhoSenha.textContent)
    classificaSenha(forcaSenha);
}

geraSenha();

function classificaSenha(forcaSenha){
    nivelSenha.classList.remove("weak")
    nivelSenha.classList.remove("media")
    nivelSenha.classList.remove("strong")
    if (forcaSenha < 15) {
        nivelSenha.classList.add("weak")
    } else if ( 25 > forcaSenha && forcaSenha > 15) {
        nivelSenha.classList.add("media")
    } else {
        nivelSenha.classList.add("strong")
    }
}