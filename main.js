function nmr(number){
    document.getElementById("tela").value += number;
}
function operador(op){
    document.getElementById("tela").value += op;
}
function clearTela(){
    document.getElementById("tela").value = ''; // Limpa a tela
    document.getElementById("historico").value = ''; // Limpa a tela superior
} 

function calculateResult(){
    let conta = document.getElementById("tela").value;
    document.getElementById("historico").value = conta; // Imprime a expressão na caixa superior.

    conta = conta.replace(/÷/g, '/');
    conta = conta.replace(/×/g, '*');
    conta = conta.replace(/,/g, '.');
    
    if (conta.length > 1 == true && conta.startsWith('0') == true && conta.includes(',') == true){
        document.getElementById("tela").value = conta;
    }else{
        conta = conta.replace(/0/, '');
        document.getElementById("tela").value = conta;
        document.getElementById("historico").value = conta;
    }

    try{
        let result = eval(conta); // Calcula a expressão da tela. Retorna undefined se a expressão estiver vazia.

        document.getElementById("tela").value = result; // Imprime na tela o resultado do calculo.

    }
    catch (error){
        document.getElementById("tela").value = 'Erro'; // Imprime na tela a mensagem erro se ouver algo que nao foi especificado no try.
    }
}
