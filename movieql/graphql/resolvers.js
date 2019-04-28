// import { getMovies, getById, addMovie, deleteMovie } from "./db";
// import { getMovies } from "./movie_db";
import { getMovies, getMovie, getSuggestions } from "./movie_db_axios";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
    // movie: (_, { id }) => getById(id)
  }
  // Mutation: {
  //   addMovie: (_, { name, score }) => addMovie(name, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id),
  // }
};

export default resolvers;
