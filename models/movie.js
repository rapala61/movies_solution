const db = require('../lib/dbConnect');

// default limit
const limit = 10;
const offset = 0;

function getAllMovies(req, res, next) {
  const query = 'SELECT * from movies';

  db.any(`${query} LIMIT ${req.query.limit || limit} OFFSET ${req.query.offset || offset};`)
    .then((movies) => {
      res.movies = movies;
      next();
    })
    .catch(error => next(error));
}

function getMovie(req, res, next) {
  const query = `SELECT * from movies WHERE id = ${req.params.id}`;
  db.any(`${query};`)
    .then((movie) => {
      res.movie = movie;
      next();
    })
    .catch(error => next(error));
}

function updateMovie(req, res, next) {
// implement update
}

function deletemovie(req, res, next) {
// implement delete
}

// Implement as a cool LAB
function getAllMoviesWithRatings(req, res, next) {
  const query = `SELECT movies.id, movies.title, movies.release_date, ratings.rating FROM movies
                  JOIN ratings ON ratings.movie_id = movies.id ORDER BY ratings`;

  db.any(`${query} LIMIT ${req.query.limit || limit} OFFSET ${req.query.offset || offset};`)
    .then((movies) => {
      res.movies = movies;
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deletemovie,
  getAllMoviesWithRatings
};
