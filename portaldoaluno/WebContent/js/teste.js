$(document).ready(function() {
    $("#botao_teste").click(function(){
        $nome = document.getElementById("nome").value;
        $senha = document.getElementById("senha").value;
        $.ajax({
            url : "ServletLogin",
            data : {nome:$nome, senha:$senha, acao:"inserir"},
            method : "POST",
            dataType : "xml",
            success : function(xml) {
                $("#resultado").html(
                    $("valor", xml).text()
                );    
            },
            error : function(xhr, status) {
                alert('Desculpe, aconteceu um problema!');
            },
            complete : function(xhr, status) {
                alert('A requisição está completa!');
            }
        });
    });
});