import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from  "react-router-dom"

const Cards = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
    {
        isLoading
        ?
        <div className="movie-card" data-testid="movie-card">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movies/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="movie-card" data-testid="movie-card">
                <img src={`https://image.tmdb.org/t/p/original/${movie ? movie.poster_path : ""}`} className="movie-poster" data-testid="movie-poster" />
                <div className="movie-card-release-date" data-testid="movie-release-date">{movie?movie.release_date:""}</div>
                <div className="movie-card-title" data-testid="movie-title">{movie?movie.title:""}</div>
            </div>
        </Link>
    }
    </>
}

export default Cards