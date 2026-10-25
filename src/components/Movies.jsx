// Import the component used to display an individual movie.
import MovieItems from "./MovieItems";
// Loop through the movie array and render a MovieItems component for each movie.
export default function Movies(props) {
    return <div className="movie-grid">{props.mymovies.map(
        (movie) => {
            // Pass the movie as a prop and use its IMDb ID as a unique key.
            return <MovieItems mymovie={movie} key={movie.imdbID || `${movie.Title}-${movie.Year}`}></MovieItems>
        }
    )}</div>
  }
