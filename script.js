const form = document.getElementById('form');
let linhas = ''


form.addEventListener('submit', function(e){
    e.preventDefault();


    adicionarLinha()
    atualizaTabela()
})


function adicionarLinha(){
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');
    let linha = '<tr>';
    linha += `<td> ${nome.value}  </td>`
    linha += `<td> ${numero.value}  </td>`
    linha += `<tr>`
    linhas += linha
    nome.value = ''
    numero.value = ''
}

function atualizaTabela (){
    const Tabela = document.querySelector('tbody')
    Tabela.innerHTML = linhas
}

