
const inicial = {users:[{id:'123321',user:"admin",password:"admin",nome:"Simon Korkovich",email:"skorkovich@katta.com"}]};
if (sessionStorage.getItem('logado')){
    window.location.href = "../index.html";
}
let db = localStorage.getItem('banco');

if(db){
    db = JSON.parse(localStorage.getItem('banco'));
} else {
    db = inicial;
    localStorage.setItem('banco',JSON.stringify(inicial));
}



function logar(){
    let u = document.getElementById('user').value;
    let p = document.getElementById('pass').value;

    for (let i = 0; i < db.users.length; i++){
        if(db.users[i].user == u && db.users[i].password == p){
            window.alert("Bem vindo "+db.users[i].nome);
            sessionStorage.setItem('logado',db.users[i].id);
            window.location.href = "../index.html";
            return 0;
        }
    }
    window.alert("Usuário ou Senha Inválido !!!");
}
