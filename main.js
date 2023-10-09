$(document).ready(function(){
    //event de slide quando clicado no adicionar
    $('header button').click(function(){
        $('form').slideDown();
    })

    //event de slide quando clicado no cancelar
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    //cancela o submit do form e insere uma img na tela de acordo com a url fornecida
    $('form').on("submit", function(e){
        e.preventDefault();

        const urlImagemNova = $('#url-img-nova').val(); //pega o valor de dentro do input
        const novoItem = $('<li style="display: none;"></li>'); //cria uma nova <li> dentro do site

        $(`<img src="${urlImagemNova}" />`).appendTo(novoItem); //insere uma img com a url fornecida em um novo <li>

        $(` 
            <div class="overlay_img_link">
                <a href="${urlImagemNova}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem); //cria o escopo de div das imgs,possui um <a> dentro da div, que fornece o link da img
        $(novoItem).appendTo('ul'); // por fim escreve essa nova <li> (o novoItem) dentro da lista (a <ul>)
        $(novoItem).fadeIn(1000); //tira o display: none do novoItem e executa o efeito JQuery fadeIn(faz o elemento aparecer na tela), o valor dela é em ms

        $('#url-img-nova').val(''); //limpa o input quando ao final do event de submit
    })
})