let id_raw = new URLSearchParams(window.location.search);
let id = id_raw.get('item');
let infos = JSON.parse(localStorage.getItem('infos'));
let logado = sessionStorage.getItem('logado');
let dados = infos[logado].metas;

let user = JSON.parse(localStorage.getItem('banco'))

function salvar(){

    if(document.getElementById('nome').value && document.getElementById('valor').value){

        

        let aux = {nome: document.getElementById('nome').value,
                valor: document.getElementById('valor').value}

        dados.push(aux);

        localStorage.setItem('infos',JSON.stringify(infos));
        window.location.href = "../pages/lista_metas.html";

    }
}