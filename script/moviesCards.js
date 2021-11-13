containerToAllMovies = document.getElementById("containerToAllMovies");
// btnCard = document.getElementsByClassName("btnCard");


async function displayMovies() {
    try {
        displayGif()
        return await fetch('https://moviesmern.herokuapp.com/movies/all')
            .then(response => response.json())
            .then(response => response.data)
    }
    catch (error) {
        return error;
    }
}
displayMovies()
    .then((res) => { displayAllObjects(res, containerToAllMovies) })
    .catch(rej => rej)
    .finally(() => { stopGif() });


function displayGif() {
    containerToAllMovies.innerHTML = `<img id="loadingPic" src="pictures/loading-gif.gif">`
}

function stopGif() {
    loadingPic.style.display = "none";
}


function displayAllObjects(arrayOfObjects, container) {
    for (const iterator of arrayOfObjects) {
        container.innerHTML +=
            `<article class="card"><img class="picCard" src="${iterator.image}">
            <h2 class="text"> ${iterator.movieName}</h2>
            <h4 class="text">rating : ${iterator.rating}</h4><a><button onclick="deleteMovieById('${iterator._id}')" class="btnCard" type="button">Delete</button></a>
            <a><button onclick="" class="btnCard" type="button">More Info..</button></a></article>`

    }
}
////////////////////////////////////////////////////////


function displayAllObjectsSortedByName(arrayOfObjects, container) {
    arrayOfObjects.sort((a, b) => a.movieName - b.movieName);
    for (const iterator of arrayOfObjects) {
        container.innerHTML +=
            `<article class="card"><img class="picCard" src="${iterator.image}">
            <h2 class="text"> ${iterator.movieName}</h2>
            <h4 class="text">rating : ${iterator.rating}</h4><a><button onclick="deleteMovieById('${iterator._id}')" class="btnCard" type="button">Delete</button></a></article>`

    }
}
////////////////////////////////////////////////////////
function displayAllObjectsSortedById(arrayOfObjects, container) {
    let arr = arrayOfObjects.sort((a, b) => a._id - b._id);
    for (const iterator of arr) {
        container.innerHTML +=
            `<article class="card"><img class="picCard" src="${iterator.image}">
            <h2 class="text"> ${iterator.movieName}</h2>
            <h4 class="text">rating : ${iterator.rating}</h4><a><button onclick="deleteMovieById('${iterator._id}')" class="btnCard" type="button">Delete</button></a></article>`

    }
}
/////////////////////////////////////////////////
function displayAllObjectsSortedByRating(arrayOfObjects, container) {
    arrayOfObjects.sort((a, b) => a.rating - b.rating);
    for (const iterator of arrayOfObjects) {
        container.innerHTML +=
            `<article class="card"><img class="picCard" src="${iterator.image}">
            <h2 class="text"> ${iterator.movieName}</h2>
            <h4 class="text">rating : ${iterator.rating}</h4><a><button onclick="deleteMovieById('${iterator._id}')" class="btnCard" type="button">Delete</button></a></article>`

    }
}
/////////////////////////////////////////////////
async function deleteMovieById(someId) {
    let option = {
        method: `DELETE`
    }
    alert("You deleted this movie");
    
    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${someId}`, option)
            .then(response => response.json())
    }
    catch (error) {
        return error;
    }
}



//////////////////////////////////////////////////
sortBy = document.getElementById("sortBy");

btnSort = document.getElementById("btnSort");

btnSort.onclick = () => {
    switch (sortBy.value) {
        case "name":
            displayMovies()
                .then(res => displayAllObjectsSortedByName(res, containerToAllMovies))
                .catch(rej => rej)
                .finally(() => { stopGif() });
            break;
        case "id":
            displayMovies()
                .then(res => displayAllObjectsSortedById(res, containerToAllMovies))
                .catch(rej => rej)
                .finally(() => { stopGif() });
            break;
        case "rating":
            displayMovies()
                .then(res => displayAllObjectsSortedByRating(res, containerToAllMovies))
                .catch(rej => rej)
                .finally(() => { stopGif() });
            break;

        default:
            break;
    }
}


/////////////////////////////////////////////////////////////////////////////

let infoSingleMovie = document.getElementById("infoSingleMovie");


