//Metodo de boton hacia arriba
function irArriba(){
    window.addEventListener('scroll',() =>{
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var btnUp = document.getElementById('btnUp');

        if(scroll > 95){
            btnUp.style.right = 50 + "px";
        } else [
            btnUp.style.right = -100 + "px"
        ]
    })
}

irArriba();