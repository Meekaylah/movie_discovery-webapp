import Result from "../../components/result/result";
import axios from "axios"
import { useState, useEffect } from "react";
import "./search.css"
import { UilSearch } from "@iconscout/react-unicons"
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c1d8549e37f77bc389b1d7c502ec038e&query=";

function Search() {
    const [show, setShow] = useState(false);
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    const changeTheSearch = (event) => {
        setSearch(event.target.value)
    }

      const getSearchedMovies = () => {
        axios.get(
            searchAPI + search
        )
        .then(
            (response) => {
                console.log(response.data.results)
                setMovies(response.data.results)
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
      }

      useEffect(() => {
        const handleOutsideClick = (e) => {
          if (show && !e.target.closest('.results')) {
            setShow(!show);
          }
        };
      
        document.body.addEventListener('click', handleOutsideClick);
      
      }, [show]);

      useEffect(
        () => {
            setMovies([])
            if (search === "") {
                setShow(!show);
            } else {
                getSearchedMovies()
            }
        }, [search]
      )

    return (
        <>
        <div className="all-search">
            <div className="search-bar">
                <input type="search" value={search} onChange={changeTheSearch} placeholder="What do you want to watch?" />
                <UilSearch size="16" color="#fff"  />
            </div>
            <div className={`${show ? "hide" : "show"}`}>
            <Result movies={movies} />
            </div>
        </div>
        </>
        
    )
}

export default Search