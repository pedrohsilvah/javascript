// let elemento = document.documentElement;

// elemento = document.head
// console.log(elemento)

// console.log(elemento)
// console.log(typeof(elemento))

// let id = document.getElementById('titulo')

// console.log(id.innerHTML) 

// let e = document.getElementsByTagName("p")
// e[1].innerText = "Olá mundo!"

// let e = document.querySelector(".subtitulo")
// console.log(e)  

// document.querySelector("body").style.backgroundColor = "red"

// let link = document.querySelector('a');

// link.setAttribute('href', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.petz.com.br%2Fblog%2F%2Fwp-content%2Fuploads%2F2021%2F11%2Fenxoval-para-gato-Copia.jpg&tbnid=vJ0O0mEfKlj4CM&vet=12ahUKEwjh0veznNWCAxWlTrgEHXzfC6AQMygIegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.petz.com.br%2Fblog%2Fbem-estar%2Fenxoval-para-gato%2F&docid=GfY1AYGJ6B5EYM&w=750&h=450&q=imagem%20gatos&ved=2ahUKEwjh0veznNWCAxWlTrgEHXzfC6AQMygIegQIARB_');

// console.log(link.getAttribute('href'));
// let novo_elemento = document.createElement('p')

// let div = document.querySelector('#elemento_1')
// novo_elemento.innerText = 'Texto do parágrafo'

// div.appendChild(novo_elemento)

// let div1 = document.querySelector('#elemento_1')
// let novo_paragrafo = document.createElement('p').innerText = 'olá mundo!!'

// div1.prepend(novo_paragrafo)

// function funcao(){
//     console.log('clique2')
// }

// function alterar_texto(e){
//     document.querySelector("h1").innerText = "Novo título"
//     console.log(e.target)
// }


// const botao = document.querySelector("button")
// const caixa = document.querySelector(".caixa") 

// botao.addEventListener('click', function executar() {
//     console.log("clique")
//     caixa.style.backgroundColor = 'aquamarine'
//     botao.removeEventListener('click', executar)
// })

let h1 = querySelector("h1")
let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")

section.addEventListener('click', function executar1(event){
    h1.innerText = "Olá section"

    event.stopPropagation()
})

article.addEventListener('click', function executar2(event){
    h1.innerText = "Olá section"

    event.stopPropagation()
})

div.addEventListener('click', function executar3(event){
    h1.innerText = "Olá section"

    event.stopPropagation()
})

