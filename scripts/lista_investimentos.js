let infos = JSON.parse(localStorage.getItem('infos'));

let logado = sessionStorage.getItem('logado');

let dados;

let desc = ["CDB","RDB","CRA","CRI","Debêntures","Debêntures incentivadas","LC","LCA","LCI","Letra Financeira","Letra de Câmbio","Títulos do Tesouro Direto",
"Ações","Fundos imobiliários","Derivativos","Câmbio e moedas","ETFs","BDRs","Ouro"];

let user = JSON.parse(localStorage.getItem('banco'))

if (!infos[logado]){

    infos[logado] = {metas:[],investimentos:[]};
    localStorage.setItem('infos',JSON.stringify(infos));
    dados = [];

 } else {
    dados = infos[logado].investimentos;
 }

if (dados.length > 0){
    for (let i = 0; i < dados.length; i++){
        document.getElementById('lista').innerHTML += "<a href='./mostra_investimentos.html?item="+i+"'><div class='retangulo'><h1>"+desc[dados[i].id-1]+"<br>R$ "+dados[i].valor+"</h1></div></a>"
    }
    
} else {
    document.getElementById('lista').innerHTML = "<h1 style='margin-left:0.5%;'>Nenhum Investimento Cadastrado </h1>";
}

