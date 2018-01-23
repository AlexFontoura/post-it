var lista = [];
function atualizarTela(secao){
    //criar uma variavel que vai guardar o html das notas
    var template="";

    //percorrer a lista de notas e criar o template de cada nota
    for(var i=0;i<lista.length;i++){

        template+= "<form class='note'>";
        template+= "<button class='note__control' type='button' onClick='removerNota("+i+",this.parentElement)'>X</button>";        
        template+="<h2 class='note__title' type='text' name='title' >"+lista[i].titulo+"</h2>";
        template+="<h3 class='note__body' name='body' rows='5'>"+lista[i].conteudo+"</h3>";
        template+="</form>";
            
    //colocar o html inner da seção
        
        secao.innerHTML = template;
    }
}

function adicionarNota(inputTitle,textareaTexto, formulario, secao){
    //criar variavel nota
    var nota={
        titulo:inputTitle.value,
        conteudo:textareaTexto.value
    };
        
    //adicionar nota dentro da lista
    lista.push(nota);

    //atualizar a seção de notas
    atualizarTela(secao);


    //limpar formulário
    formulario.reset();

   
}

function removerNota(i, secao){

    lista.splice(i,1);
    console.log("teste");

    atualizarTela(secao);
    console.log("teste1");
}
