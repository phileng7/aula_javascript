function clicou(){
  console.log("Clicou botao");
}
function agradecer(){
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar. </b><u>Redirecionar.</u>";
}
function redirecionar(){
  window.open("https://www.ig.com.br/");    //abre em outra aba
  window.location.href = "https://www.ig.com.br/";  //abre na mesma aba
}
function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado, passou o mouse";
  elemento.innerHTML = "Obrigado, passou o mouse";
}
function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
  console.log("Pagina carregada");
}
function funcaoChange(elemento){
  console.log(elemento.value);
}
/*
function soma(n1, n2){
  return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome);
}
function validaIdade(idade){
  var validar = true;
  if (idade >= 10)
    validar = true;
  else
    validar = false;
  return validar;
}
console.log(soma(10, 5)); 
console.log(setReplace("Vai Japao", "Japao", "Brasil")); 
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
*/
/*
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDay());    //weekday, 0=Monday..6= Saturday
console.log(d.getDate());   //dia do mes
*/
/*
for(count=0; count < 5; count++){
    console.log(count);
}
*/
/*
var count = 0;
while (count <= 5 ){
    console.log(count);
    count ++;
}
*/
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    console.log("Maior de idade");
} else{
    console.log("Menor de idade");
}
*/
/*var nome = "Joao Pedro";
var idade = 28;
var idade2 = 10;
var frase = "Japao tem um grande time";
//alert(nome  + " tem " + idade);
//alert(idade + idade2)
console.log(idade + idade2)
console.log(frase.replace("Japao","Brasil"))
console.log(frase.toUpperCase());
*/

/*Array
var lista = ["maca", "pera", "laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("Uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join("-"));
*/
/* Dicionario
var fruta = {nome: "maca", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
*/
/*
//lista de Dicionarios
var frutas = [{nome: "maca", cor:"vermelha"}, {nome: "uva", cor:"verde"}];
console.log(frutas);
console.log(frutas[1].nome);
*/
