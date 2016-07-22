function menuPrincipal() {
    
 document.getElementById("menuContenido").classList.toggle("show") ;  
}

window.onclick = function (event) {
    if (!event.target.matches('#menuBoton')) {                      //esta linea esta bien, corre perfect.
        var dropdowns=document.getElementById("menuContenido");
        if(dropdowns.classList.contains('show')){
            
            dropdowns.classList.remove('show');
            }
           
          
         }
}

/*
var dropdowns=document.getElementById("menuContenido");
        if(dropdowns.classList.contains('show')){
            dropdowns.classList.remove('show');
            }
            */