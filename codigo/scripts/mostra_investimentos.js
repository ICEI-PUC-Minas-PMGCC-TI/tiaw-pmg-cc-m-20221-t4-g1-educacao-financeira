let id_raw = new URLSearchParams(window.location.search);
let id = id_raw.get('item');
let infos = JSON.parse(localStorage.getItem('infos'));
let logado = sessionStorage.getItem('logado');
let dados = infos[logado].investimentos[id];
let desc = ["CDB","RDB","CRA","CRI","Debêntures","Debêntures incentivadas","LC","LCA","LCI","Letra Financeira","Letra de Câmbio","Títulos do Tesouro Direto",
"Ações","Fundos imobiliários","Derivativos","Câmbio e moedas","ETFs","BDRs","Ouro"];
let user = JSON.parse(localStorage.getItem('banco'));

for(let i = 0; i < user.users.length;i++){
    if (user.users[i].id == logado){
        document.getElementById('nor').innerHTML = "Bem Vindo, "+user.users[i].nome+"!";
    }
}




document.getElementById('nome').innerHTML = "<b>Tipo do Investimento:</b> "+desc[dados.id-1];
document.getElementById('valor').innerHTML = "<b>Valor do Investimento:</b> R$ "+dados.valor;

function deleta(){
    if(window.confirm("Deseja apagar este Investimento ?")){
        infos[logado].investimentos.splice(id,1);
        localStorage.setItem('infos',JSON.stringify(infos));
        window.location.href = '../pages/lista_investimentos.html';
    }
}

function editar(){
    window.location.href = "../pages/edita_investimentos.html?item="+id;
}
