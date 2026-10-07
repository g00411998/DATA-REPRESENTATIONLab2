import MovieItems from "./MovieItems";

export default function Movies(props) {
    return props.mymovies.map(
        (movie) => {
            return <MovieItems mymovie={movie} key={movie.imdbID}></MovieItems>
        }
    )
  }
