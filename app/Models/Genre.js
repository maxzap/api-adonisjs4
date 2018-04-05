'use strict'

const Model = use('Model')

class Genre extends Model {
  static get createdAtColumn () {
    return null;
  }

  static get updatedAtColumn () {
    return null;
  }

  movies_showing () {
      return this.belongsTo('App/Models/MovieShowing()');
  }

}

module.exports = Genre
