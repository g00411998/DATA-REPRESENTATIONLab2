import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';

const MOVIES_URL = 'https://data-rep-mern-application.github.io/dataserver/movies.json';

export default function Read() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(MOVIES_URL)
      .then((response) => {
        setMovies(response.data.myArray ?? response.data.movies ?? response.data);
      })
      .catch(() => {
        setError('Unable to load the movies. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="page-content">
      <h1>Movies</h1>
      {loading && <p role="status">Loading movies...</p>}
      {error && <p className="error-message" role="alert">{error}</p>}
      {!loading && !error && <Movies mymovies={movies} />}
    </main>
  );
}
