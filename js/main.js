const API_KEY = "6c47ad6a"

function getMovies(searchString, page = 1) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&page=${page}`)
        .then(response => response.json())
}



// getMovies("Fast", 12).then((result) => {
//     console.log(result);
// })

var page = 1

var moviesRow = document.querySelector(".movies")
var searchForm = document.querySelector(".search-form")

var searchInput = document.querySelector(".search-input")
searchForm.addEventListener('submit', event => {
    event.preventDefault()

    getMovies(searchInput.value, page).then(result => {
        renderMovies(result.Search)
    })
})

getMovies(searchInput.value).then(result => {
    renderMovies(result.Search)
})
function renderMovies(movies) {
    moviesRow.innerHTML = null
    let fragment = new DocumentFragment()
    movies.forEach(movie => {
        fragment.appendChild(createMovieEl(movie))
    });

    moviesRow.appendChild(fragment)
}

function createMovieEl(movie) {
    console.log(movie)
    let movieTemplate = document.querySelector("#movie-item")
    let movieEl = movieTemplate.content.cloneNode(true)

    movieEl.querySelector(".movie-title").textContent = movie.Title
    movieEl.querySelector(".movie-description").textContent = movie.Year
    return movieEl
}