var botaoMenu = document.querySelector("#botao-menu");
console.log(botaoMenu);
var logoDttLg = document.querySelector("#logo-dt3-lg");
var logoDttSm = document.querySelector("#logo-DT3-sm");


// botaoMenu.addEventListener("click", function(){
//     logoDtt.classList.add("logo-inativo");
// })

console.log(window.screen);

if(window.screen.width <= 991){
    logoDttSm.classList.remove("logo-inativo");
    logoDttLg.classList.add("logo-inativo");
}else{
    logoDttSm.classList.add("logo-inativo");
    logoDttLg.classList.remove("logo-inativo");    
}

//Bug na responsividade caso a tela seja dimensionada após seu carregamento.
//A tela prescisa ser calculada novamente para a correção do menu.
//Para recarregar a página document.location.reload(false); - gera loop.