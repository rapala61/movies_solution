const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, getAllMoviesWithRatings } = require('../../models/movie');

// handle all the routes

// get all movies
router.get('/', getAllMovies, (req, res) => {
  res.json(res.movies || []);
});

router.get('/withratings', getAllMoviesWithRatings, (req, res) => {
  res.json(res.movies || []);
});

router.get('/:id', getMovie, (req, res) => {
  res.json(res.movie || {});
});

module.exports = router;
