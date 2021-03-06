import React from 'react'

class MovieDetail extends React.Component {
  render () {
    const video = this.props.video
    const baseImgURL = 'http://image.tmdb.org/t/p/w1280'
    // debugger;

    const likeMovie = () => {
      fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({ movie_id: video.id })
      }).then(resp => resp.json())
    }

    return (
    //   <div
    //     style={{ backgroundImage: `url(${baseImgURL + video.backdrop_path})`, backgroundSize: 'cover' }}
    //     class='ui huge primary button'
    //     onClick={this.props.handleMovieDetailClick}
    //   >
    //     Movie Trailer <i class='right arrow icon' />
    //   </div>

      <div
        class='ui inverted vertical masthead center aligned segment'
        style={{
          backgroundImage: `url(${baseImgURL + video.backdrop_path})`,
          backgroundSize: 'cover',
          height: '500px'
        }}
        onClick={this.props.handleMovieDetailClick}
      >
        {/* <div class='ui container'>
          <div class='ui large secondary inverted pointing menu'>
            <a class='toc item'>
              <i class='sidebar icon' />
            </a>
            <a class='active item'>Home</a>
            <a class='item'>Friends</a>
            <a class='item'>Just Movies</a>
            <a class='item'>Just Shows</a>

        <div className='ui container'>
          <div className='ui large secondary inverted pointing menu'>
            <a className='toc item'>
              <i className='sidebar icon' />
            </a>
            <a className='active item'>Home</a>
            <a className='item'>Friends</a>
            <a className='item'>Just Movies</a>
            <a className='item'>Just Shows</a>
            <div class='right item'>
              <a class='ui inverted button'>Log in</a>
              <a class='ui inverted button'>Sign Up</a>
              <div
            class='ui primary button'
            onClick={this.props.handleMovieDetailClick}
          >
            Movie Trailer <i class='right arrow icon' />
          </div>
            </div>
          </div>
        </div> */}

        <div
          class='ui primary button'
          onClick={this.props.handleMovieDetailClick}
        >
          Movie Trailer <i class='right arrow icon' />
        </div>

        <div class='ui text container'>
          <div ui embed>
            <h2>{video.title}</h2>
            <p>{video.overview}</p>
            <p>
              {' '}
              {video.release_date ? `Release Date:${video.release_date}` : null}
            </p>
            <button className='ui button inverted' onClick={likeMovie}>
              Like Movie
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetail
