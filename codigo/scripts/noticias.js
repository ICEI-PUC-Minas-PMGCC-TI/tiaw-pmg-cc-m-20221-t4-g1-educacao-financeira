$(document).ready(function(){

    $.getJSON("https://gnews.io/api/v4/top-headlines?topic=business&contry=br&lang=pt&token=fec6b7ea73a2f6ca467d753c3f00a012", function(data){
        for(let i = 0; i < 3; i++){
            $('#noticia').html($('#noticia').html()+'<a href="'+data.articles[i].url+'" style="all: unset;"><div class="row noticia"><div class="col-4"><img src="'+data.articles[i].image+'" alt="Puts" height="100%" width="100%"></div><div class="col-8"><h6>'+data.articles[i].title+'</h6><p>'+data.articles[i].description+'</p></div></div></a>');
        }
    });

});
