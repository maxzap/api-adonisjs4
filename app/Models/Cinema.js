'use strict'

const Model = use('Model')

class Cinema extends Model {
  static get createdAtColumn () {
    return null;
  }

  static get updatedAtColumn () {
    return null;
  }

  movie_showings () {
      return this.hasMany('App/Models/MovieShowing');
  }

  rooms () {
    return this.belongsTo('App/Models/Room');
  }

  rooms () {
    return this.belongsTo('App/Models/Room');
  }
}

module.exports = Cinema
