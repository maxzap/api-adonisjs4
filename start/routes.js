'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group({
  Route.post('login', 'AuthControler.login');
  Route.post('register', 'AuthControler.register');
  Route.put('profile', 'AuthControler.profile').middleware(['auth:jwt']);
  Route.put('profile', 'AuthControler.profile').middleware(['auth:jwt']);

  Route.get('cinema/:id', 'CinemaController.findCinema');
  Route.get('cinemas', 'CinemaController.allCinemas');
  Route.get('genres', 'CinemaController.allGenres');

  Route.get('movies/:cinemaId/byCinema', 'MovieController.byCinema');
  Route.get('movies/:movieId/byMovie', 'MovieController.byMovie');

  Route.post('booking', 'BookingController.save').middleware(['auth:jwt']);
  Route.get('booking/last', 'BookingController.last').middleware(['auth:jwt']);
  Route.get('booking/all', 'BookingController.all').middleware(['auth:jwt']);




}).prefix('api/v1');
