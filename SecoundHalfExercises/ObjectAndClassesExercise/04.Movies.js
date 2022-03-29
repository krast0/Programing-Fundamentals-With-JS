function movies(array) {
  let exsitingMovies = [];
  for (let index = 0; index < array.length; index++) {
    let Currmovie = array[index];
    if (Currmovie.includes("addMovie")) {
      let splittedmovie = Currmovie.split("addMovie ");
      let nameOfMovie = splittedmovie[1];
      exsitingMovies.push({ name: nameOfMovie });
    } else if (Currmovie.includes("directedBy")) {
      let splittedMovie = Currmovie.split(" directedBy ");
      let nameOfMovie = splittedMovie[0];
      let director = splittedMovie[1];
      let movie = exsitingMovies.find(
        (movieObj) => movieObj.name === nameOfMovie
      );
      if (movie) {
        movie.director = director;
      }
    } else if (Currmovie.includes("onDate")) {
      let splittedMovie = Currmovie.split(" onDate ");
      let nameOfMovie = splittedMovie[0];
      let date = splittedMovie[1];
      let movie = exsitingMovies.find(
        (movieObj) => movieObj.name === nameOfMovie
      );
      if (movie) {
        movie.date = date;
      }
    }
  }



      for (const el of exsitingMovies) {
          if(el.name&&el.director&&el.date){
              console.log(JSON.stringify(el));
          }
      }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
