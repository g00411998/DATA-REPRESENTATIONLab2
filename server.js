const express = require('express');
const app = express();
// server port number
const port = 3000;
const path = require('path');



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

// Route to handle query parameters for name
app.get('/name', (req, res) => {
    // Extract query parameters from the request
    const firstname = req.query.firstname;
    // Extract query parameters from the request
    const lastname = req.query.lastname;
    // Send a response with the extracted parameters
    res.send(`Hello ${firstname} ${lastname}`);
});


// Route to handle query parameters for name
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Route to handle query parameters for name
app.get('/api/movies', (req, res) => {
    // Sample movie data
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];

    res.status(200).json({ myMovies });
});
// route to handle query prameneters from the request
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// route to handle query prameneters from the request
app.get('/hello/:name/:sname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.sname;
    res.send(`Hello ${name} ${surname}`);
});

// route to handle post request
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// Start the server and listen the request
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});