// Display the details of the movie passed through the mymovie prop.

export default function MovieItems(props) {
  return (
    


    <article className="movie-card">
       {/* Display the movie title. */}
        <h3>{props.mymovie.Title}</h3>
        <p>{props.mymovie.Year}</p>
        <img src={props.mymovie.Poster} alt={`${props.mymovie.Title} poster`} />
    </article>
  )
}
