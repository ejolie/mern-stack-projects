import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {

  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Attila Marcel",
            poster: "https://post-phinf.pstatic.net/MjAxNzA1MjlfNDAg/MDAxNDk2MDM4Njk5MjYx.TdLqOx2YtYlxrSKogU1BwEtadFgv_5PQHOm27XcK5asg.SdHC6mjaTVx3ld7CLgkgqd0v-nXShZfRLx4xU508UlEg.JPEG/image_7551693331496038605914.jpg?type=w1200"
          },
          {
            title: "Begin Again",
            poster: "https://www.dvdizzy.com/images/b/beginagain-03.jpg"
          },
          {
            title: "La vie d'Adèle",
            poster: "http://fr.web.img6.acsta.net/videothumbnails/195/387/19538725_20131010125313438.jpg"
          },
          {
            title: "Her",
            poster: "https://pmcvariety.files.wordpress.com/2013/12/her1.jpg?w=1000"
          },
          {
            title: "500 Days of Summer",
            poster: "https://usercontent2.hubstatic.com/14125343_f520.jpg"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    console.log('App - rendered');
    return (
      <div className="App">
        {tihs.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
