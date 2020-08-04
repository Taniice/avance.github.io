
$(document).ready(function(){
    $("#listSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  
  //MENU CAMBIAR ATRIBUTOS

  let menuvertical = document.querySelector("menuvertical")

  menuvertical.addEventListener("click",resaltar)

  resaltar = () => alert("Hello World!");