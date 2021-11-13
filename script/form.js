class Movie{
    // movieName;
    // rating;
    // image;
    // linkToMovie;
    // synopsis;
    constructor(movieName,image,linkToMovie,synopsis,rating){
        this.movieName = movieName;
        this.image = image;
        this.linkToMovie = linkToMovie;
        this.synopsis = synopsis;
        this.rating  = rating;
    }
};


let formBtn = document.getElementById("formBtn");
let movieName = document.getElementById("movieName");
let rating = document.getElementById("rating");
let image = document.getElementById("image");
let linkToMovie = document.getElementById("linkToMovie");
let synopsis = document.getElementById("synopsis");


formAddMovie.addEventListener("submit", (event) => {
    event.preventDefault();

    let movie =  new Movie (movieName.value,image.value,linkToMovie.value,synopsis.value,rating.value)

    let options = {
        method: 'POST',
        body: JSON.stringify({movie}),
        headers:{
         'Content-Type' : 'application/json'
        }
    }
    
    let postUrl = 'https://moviesmern.herokuapp.com/movies/saveMovie';                                                 
    
    let sendDataToApi = async () => {//שמירת הפונקצייה בתור משתנה על מנת להצליח להדפיס את התוצאה(זה משמש אותי לראות אם הצלחתי או לא)
        try{
            return await fetch(postUrl,options)
             .then(res => res.json())
        }
        catch(err){
            return err;
        }
    }

    sendDataToApi()
     .then(data => console.log(data));

     formBtn.value=""
     movieName.value="" 
     rating.value=""
     image.value=""
     linkToMovie.value=""
     synopsis.value=""
     alert("Your movie additional successfuly");
})


////////////////////////////////////////////////////////////////////////////////////
// ------------(not a good way)---------
// async function uploudUserMovie(someOption) {
//     try{
//         return await fetch('https://moviesmern.herokuapp.com/movies/saveMovie',someOption)
//         .then(response=>response.json())
        
//     }
//     catch(error){
//         return error;
//     }
// };

// let formAddMovie = document.getElementById("formAddMovie");
// formBtn.onclick = ()=>{
//     let userMovie = new Movie(movieName.value,rating.value,image.value,linkToMovie.value,synopsis.value);
//     console.log(userMovie);
//     let option = {
//         method:'POST',
//         body:JSON.stringify({userMovie}),
//         headers:{"Content-Type" : "application/json"}
//     };
//     uploudUserMovie(option)
//     .then((res)=>{console.log(res)})
//     .catch(rej=>rej);
// };
///////////////////////////////////////////////////////////////////////////////////
