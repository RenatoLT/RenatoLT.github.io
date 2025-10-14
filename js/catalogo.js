document.addEventListener('DOMContentLoaded', function () {
  fetch('../datos/catalogo.json')
    .then(response => response.json())
    .then(productos => {
      const contenedor = document.getElementById('catalogo');
      if (!contenedor) return;
      const row = document.createElement('div');
      row.className = 'row';
      productos.forEach(producto => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-text"><b>Precio:</b> $${producto.precio.toLocaleString()}</p>
              <button class="btn btn-dark w-100">Agregar al carrito</button>
            </div>
          </div>
        `;
        row.appendChild(col);
      });
      contenedor.appendChild(row);
    })
    .catch(error => {
      document.getElementById('catalogo').innerHTML = '<p>Error al cargar el catálogo.</p>';
    });
});