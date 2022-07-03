let id_raw = new URLSearchParams(window.location.search);
let id = id_raw.get('item');
let infos = JSON.parse(localStorage.getItem('infos'));
let logado = sessionStorage.getItem('logado');
let dados = infos[logado].metas[id];

let user = JSON.parse(localStorage.getItem('banco'));

document.getElementById('nome').innerHTML = "<b>Nome da Meta:</b> "+dados.nome;
document.getElementById('valor').innerHTML = "<b>Valor da Meta:</b> R$ "+dados.valor;

function deleta(){
    if(window.confirm("Deseja apagar esta Meta ?")){
        infos[logado].metas.splice(id,1);
        localStorage.setItem('infos',JSON.stringify(infos));
        window.location.href = '../pages/lista_metas.html';
    }
}

function editar(){
    window.location.href = "../pages/edita_metas.html?item="+id;
}
