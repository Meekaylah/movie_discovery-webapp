import React from 'react'
import { Link } from  "react-router-dom"

function Result(props) {
    const boxes = props.movies.slice(0,3).map(
        (item) => {
            return <Box id ={item.id} image={item.poster_path} title={item.original_title} release={item.release_date}/>
        }
    )
    return (
        <div className="w-[32.8rem] grid md:grid-cols-3 gap-5">
            {boxes}
        </div>
    )
}

const Box = (props) => {
    const imagePath = "https://image.tmdb.org/t/p/w1280"
    return (
        <Link to={`/movies/${props.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="flex shadow min-h-[200px] mt-3 pb-1">
                <img src={imagePath + props.image} className='w-[100px]' />
                <div className='flex-col justify-between px-2 items-center'>
                    <p className='text-xl text-white'>{props.title}</p>
                    <p className='text-xl text-white'>{props.release}</p>
                </div>
            </div>
        </Link>
    )
}

export default Result