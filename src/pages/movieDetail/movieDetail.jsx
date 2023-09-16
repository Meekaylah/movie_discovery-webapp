import React, {useEffect, useState} from "react";
import "./movieDetail.css"
import { useParams } from "react-router";
import { Link } from "react-router-dom"

const MovieDetail = () => {
    const [currentMovieDetail, setMovieDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c1d8549e37f77bc389b1d7c502ec038e&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    }

    return (
        <div className="movie-detail">
            <img className="trailer" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            <div className="descriptions">
                <div className="leftDescription">
                    <div className="title">
                        <div className="movie-title" data-testid="movie-title">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <span>●</span>
                        <div className="movie-release-date" data-testid="movie-release-date">{currentMovieDetail ? new Date(`${currentMovieDetail.release_date}`).toISOString() : ""}</div>
                        <span>●</span>
                        <div className="movie-runtime" data-testid="movie-runtime">{currentMovieDetail ? currentMovieDetail.runtime : ""} mins</div>
                        <div className="genre">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="genres" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie-overview" data-testid="movie-overview">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    <Link to="/"><button className="home" type="button">Back to Home</button></Link>
                    {/* <div className="credits">
                        <span className="directors"></span>
                        <span className="writers"></span>
                        <span className="stars"></span>
                    </div>
                    <div className="dropdown">
                        <button></button>
                        <span></span>
                    </div> */}
                </div>
                {/* <div className="rightDescription">
                    <button className="showtimes"></button>
                    <button className="watch-options"></button>
                    <img src="" alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default MovieDetail