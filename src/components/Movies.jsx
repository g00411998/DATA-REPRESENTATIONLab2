// Import the component used to display an individual movie.
import MovieItems from "./MovieItems";
// Loop through the movie array and render a MovieItems component for each movie.
export default function Movies(props) {
  // Render one MovieItems component for each movie in the array.
  return props.myMovies.map((movie) => {
    // Pass each movie to MovieItems and use imdbID as the unique key.
    return <MovieItems mymovie={movie} key={movie.imdbID}></MovieItems>
  });
}
