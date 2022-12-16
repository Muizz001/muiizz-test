import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const searchResults = () => {
    const search = useParams()
    const [movie, setMovie] = useState()
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=${search.search}&apikey=3b72366a`)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err));

    }, [])
    return (
        <div className="w-[90%] flex sm:flex-row flex-col flex-wrap justify-center items-center sm:mt-[48px] mt-[33px]">
            <div className="h-[300px] sm:w-[300px] w-[200px]">
                <img className="h-full w-full object-cover" src={movie?.Poster} />
            </div>
            <div className="h-[300px] sm:ml-6 sm:w-[300px] w-[200px]">
                <p className="p-2">{movie?.Title}</p>
                <p className="p-2">{movie?.Plot}</p>
                <p className="p-2">{movie?.Genre}</p>
            </div>
        </div>
    )
}

export default searchResults
