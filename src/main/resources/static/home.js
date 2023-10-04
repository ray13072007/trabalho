//Mapeamento dos botões
$('a').click(function(event){
    event.preventDefault();
    controleRotasGet($(this).attr("href"));
});

function controleRotasGet(url){
    switch(url){
        case "/logout":
            geradorSwal();
            break;
    }
}

function geradorSwal(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success me-2',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Sair?',
      text: "Você realmente deseja sair da aplicação?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-thumbs-up"></i> Sim!',
      cancelButtonText: '<i class="fa-solid fa-thumbs-down"></i> Não!',
      reverseButtons: false
    })
}