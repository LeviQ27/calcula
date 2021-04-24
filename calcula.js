
var x = Number(prompt("Digite o primeiro número"));
var c = Number(prompt("Digite o operador:\n" +
                "1-Soma\n" +
                "2-Subtração\n" +
                "3-Multiplicação\n" +
                "4-Divisão\n"));
var y = Number(prompt("Digite o segundo número"));


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
  }
}

alert(Number(calculo(c, x, y)));
