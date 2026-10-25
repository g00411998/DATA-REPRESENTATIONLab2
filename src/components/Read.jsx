import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';

// URL used to retrieve the movie data from the lab data server.
const MOVIES_URL = 'https://data-rep-mern-application.github.io/dataserver/movies.json';

export default function Read() {
  // Store the movie data returned by the API.
  const [myMovies, setMovie] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request when the component loads.
    axios.get(MOVIES_URL)
      .then((response) => {
        // Pass the returned movie array to the component state.
        console.log(response.data.myArray);
        setMovie(response.data.myArray);
      })
      // Log an error if the request is unsuccessful.
      .catch((error) => { console.log(error) });
  }, []);

  return (
    <div className="page-content">
      <h1>Hello from Read component</h1>
      {/* Pass the movie data to Movies as the myMovies prop. */}
      <Movies myMovies={myMovies}></Movies>
    </div>
  );
}
