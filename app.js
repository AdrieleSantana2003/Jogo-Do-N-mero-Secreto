let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ; 



function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;  
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número de 1 a 10: ');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (numeroSecreto==chute){
        exibirTextoNaTela('h1','Acertou!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = (`Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativas}`);
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto>chute){
            exibirTextoNaTela('p','O número secreto é maior');
    }else{
        exibirTextoNaTela('p','O número secreto é menor');
    }
    limparCampo();
    tentativas++;
}

}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; 
}

function exibirMeansagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10: ');
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMeansagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

