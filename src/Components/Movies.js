import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
function Movies() {
    const [movies, setMovies] = useState([])
    const [favourites, setFavourites] = useState([])
    const [hover, setHover] = useState(0)
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=9865a05f3f5a1b0982317caf07503ac0&page=1").
            then((res) => {
                console.table(res.data.results)
                setMovies(res.data.results)
            }
            )
    }, [])

    const add = (movie) =>{
        setFavourites([...favourites, movie])
        console.log(favourites)
    }

    return (
        <div className='justify-center'>
            <div className='mt-8 font-bold text-2xl text-center'>Trending Movies</div>
            {
                movies.length == 0 ?
                    <div className='flex justify-center mt-5'>
                        <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
                    </div> :

                    <div className='flex flex-wrap mt-8 justify-center'>
                        {
                            movies.map((movie) =>
                            (
                                <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[30vh] w-[200px] md:h-[50vh] md:w-[300px] bg-center bg-cover rounded-xl flex items-end mt-5 ml-5 hover:scale-110 ease-out duration-300 relative`}
                                onMouseEnter={()=>setHover(movie.id)}
                                onMouseLeave={()=>setHover('')}>
                                {
                                    hover==movie.id &&
                                    <button className="absolute top-2 left-2" onClick={()=>add(movie)}>
                                        favorite_border
                                    </button>
                                }

                                    <div className='text-white p-1 bg-orange-200 bg-opacity-50 w-full flex justify-center rounded-b-xl'>{movie.title}</div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Movies