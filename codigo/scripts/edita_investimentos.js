let id_raw = new URLSearchParams(window.location.search);
let id = id_raw.get('item');
let infos = JSON.parse(localStorage.getItem('infos'));
let logado = sessionStorage.getItem('logado');
let dados = infos[logado].investimentos[id];
let dados_gerais = infos[logado].investimentos

let user = JSON.parse(localStorage.getItem('banco'))
for(let i = 0; i < user.users.length;i++){
    if (user.users[i].id == logado){
        document.getElementById('nor').innerHTML = "Bem Vindo, "+user.users[i].nome+"!";
    }
}

document.getElementById('inv').value = dados.id;
document.getElementById('valor').value = dados.valor;

function salvar(){
    if(document.getElementById('inv').value && document.getElementById('valor').value){
        for (let i = 0; i < dados_gerais.length; i++){
            if(document.getElementById('inv').value == dados_gerais[i].id){
                let aux = parseFloat(dados_gerais[i].valor) + parseFloat(document.getElementById('valor').value);
                dados_gerais[i].valor = aux;
                infos[logado].investimentos.splice(id,1);
                localStorage.setItem('infos',JSON.stringify(infos));
                window.location.href = "../pages/lista_investimentos.html";
                return 0;
            }

        }   

        dados.id = document.getElementById('inv').value;
        dados.valor = document.getElementById('valor').value;

        localStorage.setItem('infos',JSON.stringify(infos));
        window.location.href = "../pages/lista_investimentos.html";
    }
}