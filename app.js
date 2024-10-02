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
let productos = obtenerAlmacenamientoLocal('productos') || listaProductos;



//Variables que traemos de nuestro html
const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contenedor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById('numero');
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x');

//Variables que vamos a usar en nuestro proyecto

let lista = []
let valortotal = 0

window.addEventListener('load', () => {
  visualizarProductos();
  contenedorCompra.classList.add("none")
})


function visualizarProductos() {
  console.log(productos);  // Verifica que los productos existen y tienen datos

  contenedor.innerHTML = ""
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].existencia > 0) {
      contenedor.innerHTML +=
        `<div>
    <img src="${productos[i].urlImagen}" alt="">
    <div class="informacion">
        <p>${productos[i].nombre}</p>
            <p class="precio">Q${productos[i].valor}</p>
            <button onclick=comprar (${i}) >Comprar</button>
    </div>
</div>
`
    } else {
      contenedor.innerHTML +=
        `<div></div>
    <img src="${productos[i].urlImagen}" >
    <div class="informacion">
        <p>${productos[i].nombre}</p>
            <p class="precio">Q${productos[i].valor}</p>
            <p class="soldOut">Sold out</p>
    </div>
</div>`
    }
  }
}

function comprar(indice) {
  lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })


  let van = true   //encargado de revisar si el ciclo se va a seguir iterando
  let i = 0 //realiza las iteraciones

  //Mientras encuentre un producto que tenga el mismo nombre al que estoy agregando,
  //quiero que a este elimines una existencia, si la existencia es 0 entonces llamar la funcion
  //de visualizar productos para actualizar la vista al usuario
  while (van == true) {
    if (productos[i].nombre == productos[indice].nombre) {
      productos[i].existencia += 1
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
carrito.addEventListener("click", function () {
  body.style.overflow = "hidden"
  contenedorCompra.classList.remove('none')
  contenedorCompra.classList.add('contenedorCompra')
  informacionCompra.classList.add('informacionCompra')
  mostrarElementosLista()
})
function mostrarElementosLista() {
  productosCompra.innerHTML = ""
  valortotal = 0
  for (let i = 0; i < lista.length; i++) {
    productosCompra.innerHTML +=
      `
<div>
    <div class="img">
        <button onclick=eliminar(${i}) class="botonTrash">
            <img src="img/trash.png">
        </button>
        <p>${lista[i].nombre}</p>
    </div>
    <p>Q${lista[i].precio}</p>
</div>
`
    valortotal += parseInt(lista[i].precio)
  }
  total.innerHTML = `<p>Valor total <p>Q${valortotal}</p> </p>
`
}

function eliminar(indice){
  let van = true
  let i = 0
  while (van == true) {
      if (productos[i].nombre == lista[indice].nombre) {
          productos[i].existencia += 1
          lista.splice(indice, 1)
          van = false
      }
      i += 1
  }
  
  guardarAlmacenamientoLocal("productos", productos)

  numero.innerHTML = lista.length
  if (lista.length == 0){
      numero.classList.remove("disenoNumero")
  }
  visualizarProductos()
  mostrarElementosLista()
}
  x.addEventListener("click", function(){
    body.style.overflow = "auto"
    contenedorCompra.classList.add('none')
    contenedorCompra.classList.remove('contenedorCompra')
    informacionCompra.classList.remove('informacionCompra')
})



