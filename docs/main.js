// 1. BASE DE DATOS DE PRODUCTOS (Array de Objetos)
const productosDB = [
    {
        id: 1,
        nombre: "Sweater Wool",
        precio: 45.00,
        categoria: "ropa",
        img: "https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: "Suéter de lana cómodo y cálido para el invierno."
    },
    {
        id: 2,
        nombre: "Nike Shoes",
        precio: 120.00,
        categoria: "zapatos",
        img: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Zapatillas deportivas de alto rendimiento."
    },
    {
        id: 3,
        nombre: "Pacman Flannel",
        precio: 25.50,
        categoria: "ropa",
        img: "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Camiseta retro con diseño de Pacman."
    },
    {
        id: 4,
        nombre: "Levi's Jeans",
        precio: 60.00,
        categoria: "ropa",
        img: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Jeans clásicos, duraderos y con estilo."
    },
    {
        id: 5,
        nombre: "Collar Sara",
        precio: 150.00,
        categoria: "accesorios",
        img: "https://images.pexels.com/photos/994524/pexels-photo-994524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Collar elegante bañado en oro."
    },
    {
        id: 6,
        nombre: "Anillos de Boda",
        precio: 300.00,
        categoria: "accesorios",
        img: "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: "Set de anillos para esa ocasión especial."
    }
];

// Variables Globales
const contenedor = document.getElementById('contenedor-productos');
const buscador = document.getElementById('buscador');
const checkboxes = document.querySelectorAll('.filter-check');
let productoSeleccionado = null; // Para el modal

// 2. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productosDB);
    iniciarReloj();
    cargarComentarios();
    
    // Configurar fecha mínima del input date (hoy)
    document.getElementById('modal-fecha').min = new Date().toISOString().split("T")[0];
});

// 3. RENDERIZADO DE PRODUCTOS
function renderizarProductos(lista) {
    contenedor.innerHTML = ''; // Limpiar
    document.getElementById('cantidad-productos').innerText = `${lista.length} items`;

    if (lista.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center">No se encontraron productos.</div>';
        return;
    }

    lista.forEach(prod => {
        const html = `
            <div class="col">
                <div class="card h-100 product-card">
                    <div class="product-img-container">
                        <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text text-muted text-truncate">${prod.desc}</p>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0 text-danger">$${prod.precio.toFixed(2)}</span>
                            <button class="btn btn-outline-dark btn-sm" onclick="abrirModal(${prod.id})">
                                <i class="fas fa-shopping-cart me-1"></i> Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += html;
    });
}

// 4. LÓGICA DE FILTROS Y BÚSQUEDA
function filtrarProductos() {
    const texto = buscador.value.toLowerCase();
    
    // Obtener categorías seleccionadas
    let categoriasSeleccionadas = [];
    checkboxes.forEach(chk => {
        if (chk.checked && chk.value !== 'todos') {
            categoriasSeleccionadas.push(chk.value);
        }
    });

    const filtrados = productosDB.filter(prod => {
        const coincideTexto = prod.nombre.toLowerCase().includes(texto);
        const coincideCat = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(prod.categoria);
        return coincideTexto && coincideCat;
    });

    renderizarProductos(filtrados);
}

// Event Listeners para filtros
buscador.addEventListener('keyup', filtrarProductos);
checkboxes.forEach(chk => {
    chk.addEventListener('change', (e) => {
        // Lógica para desmarcar "todos" si se selecciona otro, o viceversa
        if (e.target.value === 'todos' && e.target.checked) {
            checkboxes.forEach(c => c.value !== 'todos' ? c.checked = false : null);
        } else if (e.target.checked) {
            document.getElementById('cat-all').checked = false;
        }
        filtrarProductos();
    });
});

// 5. LÓGICA DEL MODAL DE COMPRA Y CÁLCULOS
const modalCompra = new bootstrap.Modal(document.getElementById('modalCompra'));

function abrirModal(id) {
    productoSeleccionado = productosDB.find(p => p.id === id);
    
    // Llenar datos en el modal
    document.getElementById('modal-nombre').innerText = productoSeleccionado.nombre;
    document.getElementById('modal-desc').innerText = productoSeleccionado.desc;
    document.getElementById('modal-precio').innerText = `$${productoSeleccionado.precio.toFixed(2)}`;
    document.getElementById('modal-img').src = productoSeleccionado.img;
    document.getElementById('modal-cantidad').value = 1;
    document.getElementById('modal-fecha').value = "";
    
    calcularTotales();
    modalCompra.show();
}

// Calcular precios dinámicamente (Reemplaza el switch case 1-10)
const inputCantidad = document.getElementById('modal-cantidad');
inputCantidad.addEventListener('input', calcularTotales);
inputCantidad.addEventListener('change', calcularTotales);

function calcularTotales() {
    if (!productoSeleccionado) return;

    let cantidad = parseInt(inputCantidad.value);
    if (cantidad < 1) cantidad = 1;
    if (cantidad > 10) cantidad = 10; // Límite de ejemplo

    const subtotal = productoSeleccionado.precio * cantidad;
    const impuestos = subtotal * 0.10; // 10% impuesto
    const total = subtotal + impuestos;

    document.getElementById('res-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('res-impuesto').innerText = `$${impuestos.toFixed(2)}`;
    document.getElementById('res-total').innerText = `$${total.toFixed(2)}`;
}

function finalizarCompra() {
    const fecha = document.getElementById('modal-fecha').value;
    if (!fecha) {
        alert("Por favor selecciona una fecha de entrega.");
        return;
    }
    alert(`¡Gracias por tu compra!\nTu pedido de ${productoSeleccionado.nombre} llegará el ${fecha}.`);
    modalCompra.hide();
}

// 6. RELOJ
function iniciarReloj() {
    setInterval(() => {
        const now = new Date();
        document.getElementById('reloj').innerText = now.toLocaleTimeString();
    }, 1000);
}

// 7. SISTEMA DE COMENTARIOS (LocalStorage)
const formComentarios = document.getElementById('form-comentarios');
const listaComentarios = document.getElementById('lista-comentarios');

formComentarios.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('input-comentario').value;
    
    guardarComentario(texto);
    document.getElementById('input-comentario').value = ''; // Limpiar
});

function guardarComentario(texto) {
    let comentarios = JSON.parse(localStorage.getItem('sara_comentarios')) || [];
    comentarios.push(texto);
    localStorage.setItem('sara_comentarios', JSON.stringify(comentarios));
    pintarComentario(texto);
}

function cargarComentarios() {
    let comentarios = JSON.parse(localStorage.getItem('sara_comentarios')) || [];
    comentarios.forEach(c => pintarComentario(c));
}

function pintarComentario(texto) {
    const div = document.createElement('div');
    div.className = "alert alert-light border shadow-sm";
    div.innerHTML = `<i class="fas fa-user-circle me-2 text-secondary"></i> <strong>Usuario:</strong> ${texto}`;
    listaComentarios.prepend(div); // Poner el más nuevo primero
}

// --- LÓGICA DEL FORMULARIO DE CONTACTO ---

const formContactoReal = document.getElementById('form-contacto-real');
const alertaEnvio = document.getElementById('alerta-envio');

if(formContactoReal) {
    formContactoReal.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar que la página se recargue

        // Aquí podrías agregar código para enviar datos a un servidor real
        // Por ahora, simulamos el envío:
        
        const btnSubmit = this.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;

        // 1. Cambiar estado del botón
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        // 2. Simular espera de 2 segundos
        setTimeout(() => {
            // 3. Mostrar alerta de éxito
            alertaEnvio.classList.remove('d-none');
            
            // 4. Resetear formulario
            formContactoReal.reset();

            // 5. Restaurar botón
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = textoOriginal;

            // 6. Ocultar alerta después de 5 segundos
            setTimeout(() => {
                alertaEnvio.classList.add('d-none');
            }, 5000);

        }, 2000);
    });
}