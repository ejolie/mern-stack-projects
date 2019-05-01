import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetail($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
    }

    suggestions(id: $movieID) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
