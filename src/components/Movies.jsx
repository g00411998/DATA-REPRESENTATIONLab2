// Import the component used to display an individual movie.
import MovieItems from "./MovieItems";
// Loop through the movie array and render a MovieItems component for each movie.
export default function Movies(props) {
  return props.myMovies.map((movie) => {
    return <MovieItems mymovie={movie} key={movie.imdbID}></MovieItems>
  });
}
