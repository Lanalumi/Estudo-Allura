alert("Boas-vindas ao jogo do Número secreto!");
let numerosecreto = 29;
let chute

while(chute != numerosecreto)
    {
    let chute = prompt("Escolha um número entre 1 e 30");
    if(numerosecreto == chute) {
    alert(`Você acertou o número secreto ${numerosecreto}`);
    }
    else{
        if (numerosecreto < chute )
            {
        alert(`O número secreto é menor que ${chute}`);
            }
        else{
        alert(`O número secreto é maior que ${chute}`);
            }
        }
    }
