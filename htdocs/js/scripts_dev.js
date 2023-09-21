// comentário de linha único
/*
    
    Bloco de código

    alert("texto") - Exibe uma caixa de alerta

    document.querySelector("elemento") - Selecionar um elemento através do seletor CSS

    .addEventListener("evento", function) - Adicionar um evento de escuta que aguarda a interação do usuário

    let nomeDaVariavel - cria uma variável que é um espaço na memória do navegador para armazenar algo

    .getAttribute("atributo") - Retorna o valor do atributo escolhido

*/

// Pegar os cliques no elemento escolhido
let elementoPai = document.querySelector(".senha"); // elemento onde está o ::before

// busca o pseudo-elemento before
let olho = window.getComputedStyle( elementoPai, "::before" );

// informa que o campo inicia como password
let password =  true; 

// colocando o disparador ao clicar no elemento ( olho )
elementoPai.addEventListener("click", function( event ){
    
    // pegando o campo da senha
    let campo = document.querySelector(".senha input");

    // busca o elemento root no CSS
    let raiz = document.querySelector(":root");

    // colocando o clique apenas no ícone do olho
    if (event.target === elementoPai) 
    {
          // let olho = window.getComputedStyle(root);
          // alert(" O valor da propriedade: " + olho.getPropertyValue('--olho'));
          // alterando o tipo do campo entre password e text
          if( campo.type === "password" )
          {
               // mudamos para text para senha ficar visível
               campo.type = "text";
               
               // altera o ícone do olho
               raiz.style.setProperty( "--olho", '"\\F33F"' );
               
          }
          else
          {
               //mudamos para password ocultando a senha
               campo.type = "password"; 

               raiz.style.setProperty( "--olho", '"\\F33E"' );

          }
     }

})




