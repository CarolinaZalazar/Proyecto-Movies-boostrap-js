


// levantar api
const API_KEY = 'd4509f3d0b5f90d408371e62bbd5bc22';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;

async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';

    movies.forEach(movie => {
        const col = document.createElement('div');
        col.classList.add('col-md-3', 'mb-4');
        col.innerHTML = `
            <div class="card movie-card bg-dark text-white">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title movie-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview.substring(0, 50)}...</p>
                </div>
            </div>
        `;
        movieGrid.appendChild(col);
    });
}

fetchMovies();