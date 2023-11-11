// var nome = "João Ribeiro"
//console.log(nome)
//alert(nome)
// document.write(nome)

// var valor1 = 2
// var valor2 = 3
// let soma = valor1 += valor2
// console.log(soma)

// nome = "Pedro"
// sobrenome = " Henrique"
// console.log(nome += sobrenome)


// let frase = 'Pedro\ns é mt lindo!'
// console.log(frase.indexOf('lindo!'))

// let numero = 20

// if(numero < 10){
//     console.log('Este número é menor que 10.')
// } else {
//     console.log('Este número é maior ou igual a 10.')
// }

// let valor1 = 100
// let valor2 = "10"

// if(valor1 !== valor2){
//     console.log("Os valores são iguais.")
// }

// let valor1 = 20;
// if(valor1 == 20 || valor1 > 100){
//     console.log('O valor é igual a 20 ou superior a 100')
// }

// if((10 + 20 > 30) || (40 + 50 < 100)){
//     console.log("Pelo menos uma das condições é verdadeira ")
// }


// let valor = 2
// let resultado = valor < 10 ? "o numero é menor que dez" : "o numero é maior que dez"
// console.log(resultado)
 

// let avaliacao = 50
// switch (avaliacao) {
//     case 1:
//         console.log("Resultado mau")
//         break
//     case 2:
//         console.log("Resultado insuficiente")
//         break
//     case 3: 
//         console.log("Resultado positivo")
//         break
//     case 4: 
//         console.log("Resultado bom")
//         break
//     case 5: 
//         console.log("Resultado exelente")
//         break
//     default:
//         console.log("Avaliação inválida")
//         break
// }

// let valor = 10 
// switch (valor) {
//     case 10:
//         console.log('Valor igual a 10')
//         break
//     case true:
//         console.log('Valor verdadeiro')
// }
 

// let idade = 15
// switch(idade) {
//     case 15:
//         console.log("Não está apto para dirigir")
//         break;
//     case 17: 
//         console.log("Ainda não está apto a dirigir, porém após um ano já vai está apto")
//         break; // parar
//     case 18: 
//         console.log("Parabéns você já está apto para dirigir")
//         break;
//     default: 
//         console.log("Número inválido")
// }

// let nomes = ["joão", "ana", "carlos"] // array
// console.log(nomes[2])
// console.table(nomes) //tabela com os elementos do array

// nomes[1] = "maria" // alterando o elemento de um array
// console.table(nomes) // exibir tabela de array com alteração feita 

// console.log(nomes.length)

// console.table(nomes)
// let outros_nomes = ["joaquim", "carla", "maunel"]
// nomes = nomes.concat(outros_nomes)
// console.table(nomes)

// let todos_os_nomes = nomes.join("--")
// console.log(todos_os_nomes)

// let nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernanda"]

// nomes.sort()
// nomes.reverse()
// console.table(nomes)

// let valores = [1, 30, 20, 200, 50, 56, 45]
// valores.sort()
// console.table(valores)
// valores.reverse()
// console.table(valores)

// let valor = 0
// while(valor <=   10){
//     console.log(valor)
//     valor++
// }

// for(let valor = 0; valor < 5; valor++){
//     console.log(valor)
// }

//  let nomes = ['joao', 'ana', 'carlos']
// nomes.forEach((n) => console.log(n))

// function escrever(){
//     console.log('Aqui está a frase da função.')
// }

// escrever()

// function escrever(mensagem){
//     console.log(mensagem)
// }

// escrever('olá mundo')
// escrever('as funções são fáceis de criar')

// function adicionar(a, b){
//     return a + b
// }

// let resultado = adicionar(100, 200)
// console.log('Resultado: ' + resultado)

// function saudacao(mensagem = 'Bom dia'){
//     console.log(mensagem)
// }

// saudacao()
// saudacao('boa noite')

// function escrever1(){
//     console.log("Olá mundo1")
// }

// let escrever2 = function(){
//     console.log("Olá mundo2")
// }

// escrever1()
// escrever2()

// let funcao = function(){
//     console.log("Texto da Função")
// }

// funcao()

// let funcao1 = function(){
//     console.log("funcao 1")
// }

// let funcao2 = () => {
//     console.log("funcao 2")
// }

// funcao1()
// funcao2()

// let funcao = (a,b) => {
//     return a +b
// }

// console.log(funcao(10,20))

// let escrever = (a,b) => a * b
// console.log(escrever(5,5))

// let valor = 10
// function escrever(valor){
//     console.log("função: " + valor)
// }

// escrever()
// console.log(valor)

let pessoa = {

    //propriedades
    nome: "João",
    apelido: "Ribeiro",
    idade: 48,
    genero: "Masculino",

    //métodos
    apresentar_nome: function() {
        return this.nome + " " + this.apelido
    },

    apresentar_idade: function() {
        return this.idade + " anos de idade"
    },

    //array
    hobbies: [
        'Programação',
        'Cinema',
        'Música'
    ]
}

console.log(pessoa.nome)
console.log(pessoa['genero'])
console.log(pessoa.apresentar_nome())
console.log(pessoa.apresentar_idade())
console.table(pessoa.hobbies)