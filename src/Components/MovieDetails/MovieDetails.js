import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const apiKey = '870967436c1517d581daf3b245495790'
    useEffect(() => {
        const url = (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        fetch(url)
            .then(res => res.json())
            .then(data => setMovieDetails(data))
    }, [])
    const [movieLover, setMovieLover] = useState()
    let greetings;
    // if(movieLover)
    // {
    //     greetings = <p className="card-text">{movieDetails.overview}</p>
    // }
    // else
    // {
    //     greetings = <h6> you should love movies</h6>
    // }
    return (
        <div style={{marginLeft :'35%',marginTop:'20px'}}>
            {/* <h1>{movieDetails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w1280/${movieDetails.poster_path}`} alt=""/> */}
            <div className="card d-flex align-items-center" style={{width:' 18rem'}}>
                <img src={`https://image.tmdb.org/t/p/w1280/${movieDetails.poster_path}`}class="card-img-top"  alt="..."/>
                    <div className="card-body">
                        <h3 className="card-text">{movieDetails.title}</h3>
                        <h6>RelaseDate:{movieDetails.release_date}</h6>
                        <h6>AverageVote:{movieDetails.vote_average}</h6>
                        <h6>Popularity:{movieDetails.popularity}</h6>
                        <h3>Do you want to see movie details:</h3>
                        <button onClick={() => setMovieLover(!movieLover)} className="btn btn-warning" > Yes </button>
                        {
                            movieLover && <p className="card-text">{movieDetails.overview}</p>
                        }
                        
                        {/* {greetings} */}
                        
                    </div>
            </div>
        </div>
    );
};

export default MovieDetails;