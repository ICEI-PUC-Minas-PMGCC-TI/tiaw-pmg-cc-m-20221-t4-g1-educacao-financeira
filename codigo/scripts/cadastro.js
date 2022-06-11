if (!localStorage.getItem('banco')){
    window.location.href = "../pages/login.html";
}

function cadastrar(){
    let db = JSON.parse(localStorage.getItem('banco'));
    let id = Math.floor(Math.random() * 1000) + 1;

    for (let i = 0; i < db.users.length; i++){
        if(db.users[i].user == document.getElementById('user').value){
            window.alert("Usuário Já Existe !!!");
            return 0;
        }
    }

    let aux = {id: id,
            user:document.getElementById('user').value,
            password: document.getElementById('pass').value,
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value};

    db.users.push(aux);
    localStorage.setItem('banco',JSON.stringify(db));
    window.alert("Usuário Cadastrado com Sucesso !!!");
    window.location.href = "../pages/login.html"

}