containerMovieDetails = document.getElementById("containerMovieDetails"); 

// let obj = displayMovies().then(res=>res).catch(rej=>rej);
function getMoreInfoOnMovie(specificObject) {
    for (const key in specificObject) {
        containerMovieDetails.innerHTML = `<h1>${specificObject.movieName}</h1>`
    }
}
