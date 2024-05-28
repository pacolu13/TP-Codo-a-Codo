function createCardHTML(producto) {
    let estrellasHtml = '';

    //Recorro las estrellas para cada hotel de cada destino
    for (let i = 0; i < producto.estrellas; i++) {
        estrellasHtml += '⭐';
    }

    let template = `
    <figure class ="card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-nombre">
            <figcaption>${producto.nombre}</figcaption>
        </div>
        <div class="card-description">
            <p>${producto.descripcion}</p>
        </div>
        <div class="card-hotel">
            <p>${producto.hotel}</p>
            <p>${estrellasHtml}
        </div>
        <div class="card-price">
            <p>$${producto.precio} ARS</p>
        </div>
    </figure>`;
    return template;
}

function loadProducts(listaEmprendimientos) {
    const container = document.querySelector('.container');
    listaEmprendimientos.forEach(element => {
        let card = document.createElement('div');
        card.innerHTML = createCardHTML(element);

        container.appendChild(card);
    });
}

function errorLoad() {
    // Código para manejar errores
    console.log("Se produjo un error al cargar los productos.");
}

loadProducts(listaEmprendimientos);