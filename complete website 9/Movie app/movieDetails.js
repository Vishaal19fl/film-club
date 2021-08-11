const movie1 = document.getElementById('movie1')


  function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
  
    axios.get('http://www.omdbapi.com/?i='+movieId+'&apikey=5349bc49')
      .then((response) => {
        console.log(response);
        let movie = response.data;
  
        let output =`
          <div class="row">
            <div class="col-md-4">
              <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2>${movie.Title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="well">
              <h3>Plot</h3>
              ${movie.Plot}
              <hr>
              
              <a href="../index.html" class="btn btn-default">Go Back To Search</a>
            </div>
          </div>
        `;
  
        movie1.innerHTML=output;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  