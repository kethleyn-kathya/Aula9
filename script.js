function multiplicacao(num1,num2){
    return num1*num2;
    }
    let menu = prompt("Digite:\n1-Multiplicação");
    menu = parseInt(menu);

    let num1 = parseInt(prompt("Digite um numero"));
    let num2 = parseInt(prompt("Digite outro numero"));

    if (menu==1){
    let resultado = multiplicacao(num1,num2);
    alert("O resultado da sua multiplicação é " + resultado ); }