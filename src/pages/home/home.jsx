import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import "./home.css"
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom"
import MovieList from "../../components/movieList/movieList";
import Header from "../../components/header/Header";


const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c1d8549e37f77bc389b1d7c502ec038e&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    const nav = document.getElementById('nav')

    window.onscroll = function() {
        const scrollHeight = window.scrollY
        const height = document.querySelector(".mySwiper").offsetHeight
        console.log('Scroll Height:',window.scrollY, 'Height:',document.querySelector(".mySwiper").offsetHeight)
    if(scrollHeight > height - (height * 0.1)){
        nav.style.backgroundColor = "#100f0f"
    }else{
        nav.style.backgroundColor = "transparent"
    }
    }

    return (
        <>
            <Header />
            <Swiper
            direction={'vertical'}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            effect={'fade'}
            modules={[EffectFade, Autoplay, Pagination]}
            className="mySwiper"
            >
                {
                    popularMovies.slice(0,5).map(movie => (
                        <SwiperSlide>
                            <Link style={{textDecoration:"none", color:"white"}} to={`/movies/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage_overlay">
                                    <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage_imdb">
                                        <img src="/imdb.svg" className="imdb_img"/>
                                        <span>{movie ? Math.ceil((movie.vote_average / 10)*100) : ""}.0/100</span>
                                        <span className="posterImage_rating">
                                            <img src="/tomato.svg" className="tomato_img"/>
                                            {movie ? Math.floor(movie.vote_average*10) : ""}%
                                        </span>
                                    </div>
                                    <div className="posterImage_description">{movie ? movie.overview : ""}</div>
                                    <button className="watch_btn">
                                        <img src="/play.svg" className="play_img"/>
                                        <span>WATCH TRAILER</span>
                                    </button>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <MovieList/>
        </>
    )
}

export default Home