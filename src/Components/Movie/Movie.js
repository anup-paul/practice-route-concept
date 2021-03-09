import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Movie = (props) => {
    // console.log(props.movieInfo)
    const { title, release_date, poster_path,id } = props.movieInfo;
    let history = useHistory();
    const handleClick = (id) =>
    {
        history.push(`/movie/${id}`)
    }
    return (
        <div className=" col-md-4">
            <div className="card" >
                <img  src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}  className="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6>RelaseDate:{release_date}</h6>
                        {/* <Link to =  {`/movie/${id}`}>Details</Link> */}
                        <button onClick={()=>handleClick(id)} className=" btn btn-primary" >Details</button>
                    </div>
            </div>
        </div>
        
    );
};

export default Movie;