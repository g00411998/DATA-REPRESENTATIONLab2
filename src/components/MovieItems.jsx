import Card from 'react-bootstrap/Card';

export default function MovieItems(props) {
  // Display the movie title, poster, and release year.
  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{props.mymovie.Title}</Card.Title>
          <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
        </Card.Body>
        <Card.Footer className="text-muted">{props.mymovie.Year}</Card.Footer>
      </Card>
    </div>
  )
}
