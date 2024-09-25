//insertar imagenes con ciclos

const listaProductos = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    precio: 200
  }));

  document.getElementById('contenedor').innerHTML = listaProductos.map(producto => `
    <div>
      <img src="img/colaboradores${producto.id}.png" alt="${producto.nombre}">
      <div class="informacion">
        <p>${producto.nombre}</p>
        <p class="precio">Q${producto.precio} <span>.00</span></p>
        <button>Agregar</button>
      </div>
    </div>
  `).join('');
//termina ciclo

function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
let productos = obtenerAlmacenamientoLocal('productos') || [];

//Variables que traemos de nuestro html
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const content = document.getElementById('content');
const carrito = document.getElementById('carrito');
const numero = document.getElementById('numero');
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x');

//Variables que vamos a usar en nuestro proyecto

let lista = []
let valortotal = 0


  
function comprar(indice) {
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })


    let van = true   //encargado de revisar si el ciclo se va a seguir iterando
    let i = 0 //realiza las iteraciones

    //Mientras encuentre un producto que tenga el mismo nombre al que estoy agregando,
    //quiero que a este elimines una existencia, si la existencia es 0 entonces llamar la funcion
    //de visualizar productos para actualizar la vista al usuario
    while (van == true) {
        if (productos[i].nombre == productos[indice].nombre) {
            productos[i].existencia -= 1
            if (productos[i].existencia == 0) {
                visualizarProductos()
            }
            van = false
        }
        //llave "productos" es el nombre de la base de datos y se le pasa la nueva info
        guardarAlmacenamientoLocal("productos", productos)
        i += 1
    }
    numero.innerHTML = lista.length
    numero.classList.add("disenoNumero")
    return lista
}
carrito.addEventListener("click", function(){
    body.style.overflow = "hidden"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra')
    mostrarElementosLista()
})
function mostrarElementosLista(){
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i< lista.length; i++) {
      productosCompra.innerHTML
       
    }
}


