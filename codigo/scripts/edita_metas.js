let id_raw = new URLSearchParams(window.location.search);
let id = id_raw.get('item');
let infos = JSON.parse(localStorage.getItem('infos'));
let logado = sessionStorage.getItem('logado');
let dados = infos[logado].metas[id];

document.getElementById('nome').value = dados.nome;
document.getElementById('valor').value = dados.valor;

function salvar(){
    dados.nome = document.getElementById('nome').value;
    dados.valor = document.getElementById('valor').value;

    localStorage.setItem('infos',JSON.stringify(infos));
    window.location.href = "../pages/lista_metas.html";
}