function validaFaleConosco(){
if (document.frmfaleconosco.txtnome.value==""){
    alert("Preencha o campo nome")
    document.frmfaleconosco.txtnome.focus();
    return false;
}
if (document.frmfaleconosco.txtfone.value==""){
    alert("Preencha o campo telefone")
    document.frmfaleconosco.txtfone.focus();
    return false;
}
if (document.frmfaleconosco.txtemail.value==""){
    alert("Preencha o campo Email")
    document.frmfaleconosco.txtemail.focus();
    return false;
}
if (document.frmfaleconosco.selmotivo.value==""){
    alert("Informe o motivo")
    document.frmfaleconosco.selmotivo.focus();
    return false;
}
else if (document.frmfaleconosco.selmotivo.value == "PR") {
    const selectProduto = document.querySelector("select[name='selproduto']");
    if (!selectProduto || selectProduto.value == "") {
        alert("Escolha um produto");
        selectProduto.focus();
        return false;
    }
}
if (document.frmfaleconosco.txacomentario.value==""){
    alert("Preencha o campo Comentário")
    document.frmfaleconosco.txacomentario.focus();
    return false;
}


return true;
}

function verificaMotivo(motivo){
    //Capturamos a estrutura da div cujo ID é opcaoProduto na variável elemento
    var elemento = document.getElementById("opcaoProduto");

    //Se o valor da variável motivo for "PR"
    if(motivo=="PR"){
        //Criamos um elemento (tag) <select> e guardamos  na variável homônima
        var select = document.createElement("select");

        select.setAttribute("name","selproduto");
        //Conteúdo atual da variável select:
        //<select name="selproduto"></select>

        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor vazio
        option.setAttribute("value","");
        //Criamos um nó de texto "Escolha" e gravamos na variável 'texto'
        var texto = document.createTextNode("Escolha");
        //Colocamos o nó de texto  criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="">Escolha</option>

        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variável select:
        //<select name="selproduto"><option value="">Escolha</option></select>

        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor "FR"
        option.setAttribute("value","FR");
        //Criamos um nó de texto "Freezer" e geavamos na variável 'texto'
        var texto = document.createTextNode("Freezer");
        //Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="FR">Freezer</option>
        
        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variável select:
        /*
        <select name="selproduto">
        <option value="">Escolha</option><ooption value="FR">Freezer</option>
        </select>
        */

        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor "GE"
        option.setAttribute("value","GE");
        //Criamos um nó de texto "Freezer" e geavamos na variável 'texto'
        var texto = document.createTextNode("Geladeira");
        //Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="GE">Geladeira</option>
        
        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variável select:
        /*
        <select name="selproduto">
        <option value="">Escolha</option><option value="FR">Freezer</option<option value="GE">Geladeiras</option>
        </select>
        */

        //Colocamos o select criado como "filho" da tag div capturada no inicio da função
        elemento.appendChild(select);
        //Se o valor da variável motivo não for "PR" ...
}else{
    //Se a div possuir algum "primeiro filho"
    if (elemento.firstChild)
        //Removemos ele
    elemento.removeChild(elemento.firstChild);
}

}//Fim da função verifivaMotivo
