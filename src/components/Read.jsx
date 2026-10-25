import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';

const MOVIES_URL = 'https://data-rep-mern-application.github.io/dataserver/movies.json';

export default function Read() {
  const [myMovies, setMovie] = useState([]);

  useEffect(() => {
    axios.get(MOVIES_URL)
      .then((response) => {
        console.log(response.data.myArray);
        setMovie(response.data.myArray);
      })
      .catch((error) => { console.log(error) });
  }, []);

  return (
    <div className="page-content">
      <h1>Hello from Read component</h1>
      <Movies myMovies={myMovies}></Movies>
    </div>
  );
}
