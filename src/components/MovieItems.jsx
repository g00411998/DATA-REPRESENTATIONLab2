

export default function MovieItems(props) {
  return (
    


    <div>
        <h3>{props.mymovie.Title}</h3>
        <p>{props.mymovie.Year}</p>
        <img src={props.mymovie.Poster} alt={props.mymovie.Title}></img> 
    </div>
  )
}