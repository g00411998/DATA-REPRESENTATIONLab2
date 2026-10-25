import { useState } from 'react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, year, poster });
  };

  return (
    <main className="page-content">
      <h1>Add a Movie</h1>
      <form className="movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Movie Title</label>
          <input id="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="year">Movie Year</label>
          <input id="year" type="number" min="1888" max="2100" value={year} onChange={(event) => setYear(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="poster">Movie Poster URL</label>
          <input id="poster" type="url" value={poster} onChange={(event) => setPoster(event.target.value)} required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </main>
  );
}
