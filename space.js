document.getElementById('btnBuscar').addEventListener('click', function() {
    const query = document.getElementById('inputBuscar').value;
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then(response => response.json())
      .then(data => mostrarImagenes(data.collection.items))
      .catch(error => console.error('Error:', error));
  });
  function mostrarImagenes(items) {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = ''; // Limpiar resultados anteriores
    items.forEach(item => {
      const { title, description, date_created } = item.data[0];
      const imageUrl = item.links[0].href;
      const card = `<div class="card mb-3" style="max-width: 540px;">
 <div class="row g-0">
                         <div class="col-md-4">
                           <img src="${imageUrl}" class="img-fluid rounded-start" alt="${title}">
                         </div>
                         <div class="col-md-8">
                           <div class="card-body">
                             <h5 class="card-title">${title}</h5>
                             <p class="card-text">${description}</p>
                             <p class="card-text"><small class="text-muted">Fecha: ${new Date(date_created).toLocaleDateString()}</small></p>
                           </div>
                         </div>
                       </div>
                     </div>`;
       contenedor.innerHTML += card;
     });
   }
