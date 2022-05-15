let infos = JSON.parse(localStorage.getItem('infos'));

let logado = sessionStorage.getItem('logado');

let dados;

let user = JSON.parse(localStorage.getItem('banco'))
for(let i = 0; i < user.users.length;i++){
    if (user.users[i].id == logado){
        document.getElementById('nor').innerHTML = "Bem Vindo, "+user.users[i].nome+"!";
    }
}


if (!infos[logado]){

    infos[logado] = {metas:[]};
    localStorage.setItem('infos',JSON.stringify(infos));
    dados = [];
 } else {
    dados = infos[logado].metas;
 }

if (dados.length > 0){
    for (let i = 0; i < dados.length; i++){
        document.getElementById('lista').innerHTML += "<a href='./mostra_metas.html?item="+i+"'><div class='retangulo'><h1>"+dados[i].nome+"<br>R$ "+dados[i].valor+"</h1></div></a>"
    }
    
} else {
    document.getElementById('lista').innerHTML = "<p>Nenhuma Meta Cadastrada :(</p>";
}
