import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Home = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const url = ("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=870967436c1517d581daf3b245495790")
        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    movies.map(movie => <Movie movieInfo={movie} key={movie.id} ></Movie>)
                }
            </div>
        </div>

    );
};

export default Home;