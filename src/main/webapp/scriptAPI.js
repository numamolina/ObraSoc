const API_KEY = "84ab20313d06213ce6699a238aa3a6fb";
const API_BEARER = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGFiMjAzMTNkMDYyMTNjZTY2OTlhMjM4YWEzYTZmYiIsInN1YiI6IjY2NTliMGEyZGQyOGEyMjI0ZTk0MWYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hXA-_B5E0NpJpHsWX7jcjqvdKYDHhb8Vve5QRu6Mib0";
const API_URL = "https://api.themoviedb.org/3";
let currentPage = 1;

function llamarAPI(page) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_BEARER}`
    }
  };

  fetch(`${API_URL}/trending/movie/day?page=${page}`, options)
    .then(response => response.json())
    .then(data => dibujarDatos(data))
    .catch(err => console.error('Error en la llamada a la API:', err));
}

function dibujarDatos(data) {
  const peliculasContainer = document.querySelector(".elementos");
  const resultadosLimitados = data.results.slice(0, 6); // Limita a los primeros 3 resultados
  const filas = resultadosLimitados.map((obj) => Pelicula(obj)).join(""); // Genera el HTML para los 3 resultados
  peliculasContainer.innerHTML = filas; // Inserta el HTML en el contenedor
}

function Pelicula(obj) {
  return `
    <a href="./pages/detalle.html">
      <div class="pelicula">
        <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}" loading="lazy">    
        <div class="tituloPelicula">
          <h4>${obj.title}</h4>
        </div>
      </div>
    </a>
  `;
}

function cargarPaginaSiguiente() {
  currentPage++;
  llamarAPI(currentPage);
}

function cargarPaginaAnterior() {
  if (currentPage > 1) {
    currentPage--;
    llamarAPI(currentPage);
  }
}

document.querySelector(".anterior").addEventListener("click", cargarPaginaAnterior);
document.querySelector(".siguiente").addEventListener("click", cargarPaginaSiguiente);

llamarAPI(currentPage);
