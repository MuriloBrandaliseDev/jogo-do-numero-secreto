alert('Boas-vindas ao jogo do Número Secreto');

let numeroMaximo = 5;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

//enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual o número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secretro e maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
