/*
    Variáveis 
    Funções
    Laços de Repetição
    Template String
    Eventos
    Seletores
    Estruturas de Dados
*/

let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];
let textoPesquisa = ""
let categoriaAtual = "all"

let containerProdutos = document.querySelector(".products-container")
let input = document.querySelector(".search-input")
let botoes = document.querySelectorAll(".category-btn")

function mostrarProdutos(){
    let htmlProdutos = ""

    let produtosFiltrados = produtos.filter(produto => {
        let passouCategoria = (categoriaAtual === "all" || produto.categoria === categoriaAtual)



        let passouPesquisa = produto.nome.toLowerCase().includes(textoPesquisa)

        return passouPesquisa && passouCategoria
    })  

    produtosFiltrados.forEach(produto => {
       htmlProdutos = htmlProdutos + `
        <div class="product-card">
            <img class="product-img" src="${produto.imagem}" alt="${produto.nome}">
            <div class="product-info">
              <h3 class="product-name">${produto.nome}</h3>
              <p class="product-description">${produto.descricao}</p>
              <p class="product-price">R$ ${produto.preco}</p>
              <button class="product-button">Ver detalhes</button>
            </div>
          </div>
        `
    });
    containerProdutos.innerHTML = htmlProdutos 
}

function pesquisar(){
    textoPesquisa = input.value

    mostrarProdutos()

}

function trocarCategoria(categoria){
    categoriaAtual = categoria
    botoes.forEach( botao => {
        botao.classList.remove('active')
        
        if (botao.getAttribute("data-category") === categoria){
            botao.classList.add("active")
        }
    })

    mostrarProdutos()
    
}

window.onload = mostrarProdutos
window.addEventListener('DOMContentLoaded', () => {
    mostrarProdutos()
    input.addEventListener('input', pesquisar)

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            let categoria = botao.getAttribute("data-category")

            trocarCategoria(categoria)
            console.log(botoes)
        })
    })

})