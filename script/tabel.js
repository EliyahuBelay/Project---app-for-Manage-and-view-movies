containerToTabel = document.getElementById("containerToTabel")
moviesTabel = document.getElementById("moviesTabel");
moviesTabelTbody = document.getElementById("moviesTabelTbody");
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
    .then((res) => { displayTable(moviesTabelTbody, res) })
    .finally(() => { stopGif() });




function displayGif() {
    moviesTabelTbody.innerHTML += `<img id="loadingPic" src="pictures/loading-gif.gif">`
}

function stopGif() {
    loadingPic.style.display = "none";
}






function displayTable(container, object) {
    for (const iterator of object) {
        container.innerHTML +=
            `<tr><td class="tdMovie">${iterator.movieName}</td>
            <td class="tdMovie">${iterator.date}</td>
            <td class="tdMovie"><img width="95%" src="${iterator.image}"</td>
            <td class="tdMovie">${iterator.rating}</td>
            <td class="tdMovie">${iterator.synopsis}</td></tr>`
    }
}
