let id_raw = new URLSearchParams(window.location.search);
let id = id_raw.get('item');
let infos = JSON.parse(localStorage.getItem('infos'));
let logado = sessionStorage.getItem('logado');
let dados = infos[logado].investimentos;

let user = JSON.parse(localStorage.getItem('banco'))

function salvar(){

    if(document.getElementById('inv').value && document.getElementById('valor').value){

        for (let i = 0; i < dados.length; i++){

            if(document.getElementById('inv').value == dados[i].id){
                let aux = parseFloat(dados[i].valor) + parseFloat(document.getElementById('valor').value);
                dados[i].valor = aux;
                localStorage.setItem('infos',JSON.stringify(infos));
                window.location.href = "../pages/lista_investimentos.html";
                return 0;
            }

        }

        let aux = {id: document.getElementById('inv').value,
                valor: document.getElementById('valor').value}

        dados.push(aux);

        localStorage.setItem('infos',JSON.stringify(infos));
        window.location.href = "../pages/lista_investimentos.html";

    }
}