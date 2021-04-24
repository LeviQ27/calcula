/*
Script em Javascript para as funções calcular e calcularFatorial
*/
//Função que chama os dados inputados na web no espaço escrito Calculadora e chama a função calculo e retorna o resultado
function calcular(){
  // variáveis que recebem os números a serem operados e o operador
  var operador = parseInt(document.getElementById("operator").value); //recebe o operador, em forma numeral que está apresentada no html
  var num1 = parseInt(document.getElementById("num1").value); //primeiro número a receber
  var num2 = parseInt(document.getElementById("num2").value); //segundo número a receber
  var resp2 = document.getElementById("resposta1"); //variável que vai retornar para aparecer no output

  resp2.innerHTML = calculo(operador, num1, num2); //retorno do cálculo no elemento resposta1 no output em referência a calcular()
}

//Função que chama os dados inputados na web no espaço Calcular Fatorial, chama a função fatorial e retorna o resultado
function calcularFatorial(){
  var num = parseInt(document.getElementById("num").value); // Variável que recebe um número
  var resp = document.getElementById("resposta"); //variável que vai retornar para aparecer no output

  resp.innerHTML = fatorial(num); // retorno do cálculo no elemento resposta no output em referência à calcularFatorial
}

//Função recursiva que faz um cálculo fatorial de um número. Exercício 10 de Javascript
function fatorial(x)
{
  if(x==0) return 1; // se o x que fatorial recebe for igual a 0, retorna 1 e finaliza a recursividade
  else if(x > 0) return x * fatorial(x-1); // enquanto o valor de x for maior que zero, vai retornar a multiplicação de x com o proximo valor subtraido a um dentro da função fatorial, até chegar em 0
  else return String("Valor inválido, Fatorial não admite valores menores que 0"); //Caso o usuário passe número negativo, retorna uma string de erro
}

//Função criada em referência ao exercício 8
//A função vai fazer um switch em cada caso que o usuário inputar na web, e caso não insira um numeral, em referência ao operador, válido, retorna uma string de erro
var calculo = function(c, x, y){
  switch(c){
    case 1:
    return x + y;
    break;
    case 2:
    return x - y;
    break;
    case 3:
    return x * y;
    break;
    case 4:
    return x/y;
    break;
    default:
    return String("Operador inválido\n");
    break;
  }
}
