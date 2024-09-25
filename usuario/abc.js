const listaProductos = Array.from({ length: 15}, (_, i) =>({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    precio: 200
}));

document.getElementById('contenedor').innerHTML = listaProductos.map(producto => `
    <div>
    <img src="img/colaboradores${producto.id}.png" alt="${producto.nombre}">
    <div class="informacion">
        <p>${producto.nombre}</p>
        <p class="precio">Q${producto.precio}.00</p>
        <button>Agregar</button>
    </div>
</div>
    `).join('');


const listaProductos =  Array.from ({length : 15}, (_,i) => ({
    id: i+1,
    nombre: `Producto ${i+1}`,
    precio: 200
}));
document.getElementById('contenedor').innerHTML = listaProductos.map( producto => `
    
<div>
    <img src="img/colaboradores${producto.id}.png" alt="${producto.nombre}">
    <div class="informacion">
        <p>${producto.nombre}</p>
        <p class="precio">Q${producto.precio}.00</p>
        <button>Agregar</button>
    </div>
    <div>
    `).join('');

const listaProductos = Array.from({length : 15}, (_,i) => ({
    id: i+1,
    nombre: `Producto ${i+1}`,
    precio: 200
}));
document.getElementById('contenedor').innerHTML= listaProductos.map( producto => `
    
    `).join('');

const listaProductos = Array.from({length: 15}, (_,i) => ({
    id: i+1,
    nombre: `Producto ${i+1}`,
    precio: 200
}));
document.getElementById('contenedor').innerHTML= listaProductos.map( productos => `
    
    `).join('');

const listaProductos = Array.from({length: 15}, (_,i) => ({
    id: i+1,
    nombre: `Producto ${i+1}`,
    precio: 200
}));
document.getElementById('contenedor').innerHTM= listaProductos.map( producto => `
    
    `).join('');

const listaProductos = Array.from({length : 15}, (_,i) => ({
    id: i+1,
    nombre: `Producto ${i+1}`,
    precio: 200
}));
document.getElementById('contenedor').innerHTML= listaProductos.map( producto => `
    
    `).join('');

const listaProductos = Array.from({length : 15}, (_,i) => ({
    id: i+1,
    nombre: `Producto ${i+1}`,
    precio: 200
}));
document.getElementById('contenedor').innerHTML= listaProductos.map( producto => `
    
    `).join('');