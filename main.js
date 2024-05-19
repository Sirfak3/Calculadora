function nmr(nmr){
    document.getElementById("tela").value += nmr; // Permite adicionar búmeros na tela.
}
function operador(op){
    document.getElementById("tela").value += op; // Permite adiocionar operadores na tela.
}
function clearTela(){ // Limpa a tela e o histórico.
    document.getElementById("tela").value = '';
    document.getElementById("historico").value = '';
}

// Funções para memoria ▼.
var memoria = document.getElementById("tela").value;

function adcMemoria(){
    memoria = document.getElementById("tela").value;
}
function chamarMemoria(){
    document.getElementById("tela").value += memoria;
}
function clearMemoria(){
    memoria = '';
}

//raiz cubica = Math.cbrt();
//raiz quadrada = Math.sqrt()

// Função para deletar o ultimo número ▼.
function deletar(){
    const valores = document.getElementById("tela").value;
    const valoresnew = valores.replace(/.$/, '');
    document.getElementById("tela").value = valoresnew;
}

var elemento = document.getElementById('tela');
var valor = elemento.value;

// Função para calcular ▼.
function calculateResult(){
    let conta = document.getElementById("tela").value; 
    document.getElementById("historico").value = conta; // Imprime a expressão na caixa superior.

    // Substitui os simbolos ▼.
    conta = conta.replace(/÷/g, '/');
    conta = conta.replace(/×/g, '*');
    conta = conta.replace(/,/g, '.');

    conta = conta.replace(/^0+(?=[^,])/, ''); // Remove o 0(zero) da conta que inicie com o mesmo e não seja seguido de uma virgula.

    conta = conta.replace(/√/, 'Math.sqrt('); 
    if (valor.startsWith('√')) {
    elemento.value = valor + ')';
    }
    try{
        let result = eval(conta); // Transforma o valor da tela em uma expressão númerica. Retorna undefined se a tela estiver vazia.
        document.getElementById("tela").value = result; // Imprime o resultado da expressão na tela.
    }
    catch(error){
        document.getElementById("tela").value = 'Erro'; // Retorna a mensagem erro se houver algo não especificado no try.
    }
}
