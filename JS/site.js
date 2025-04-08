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
if (document.frmfaleconosco.txacomentario.value==""){
    alert("Preencha o campo Comentário")
    document.frmfaleconosco.txacomentario.focus();
    return false;
}

return true;
}
