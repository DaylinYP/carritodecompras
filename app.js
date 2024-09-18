const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");

//cuando detectes un scroll en la pantalla, haz lo siguiente
// contenedor detecte que se hizo scroll 10px hacia abajo
//entonces agregar al header la clase scroll, sino se quita del css
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})


/************************************** */
const cartInfo = document.querySelector('.cart-product')