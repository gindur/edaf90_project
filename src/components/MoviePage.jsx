import MovieForm from "./MovieForm";
import MovieWheel from "./MovieWheel";
import MovieResult from "./MovieResult";
import { useLoaderData } from 'react-router-dom';
import { useState } from "react";
import Filter from "../model/filter.mjs";
import movieLoader from "../loaders/movieLoader";
const colors = ['#F5C519', '#DC2026'];

function MoviePage() {

    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [filter, setFilter] = useState(new Filter());

    const updateSelectedMovies = async () => {
        const params = filter.toString();
        const movies = await movieLoader(params);
        // do api fetch...
        const segments = movies.map((movie, index) => {
            return {segmentText: movie.title, segColor: colors[index%colors.length] }
          }).slice(0, 10);

        console.log("segments", segments);
        
        
        setMovieList(segments);
    }
    const formOptions = useLoaderData();

    return (
        <main>
            <div className="title-container">
                <h3>Can't decide what movie to watch?</h3>
                <p>Let the wheel decide what you watch tonight</p>
            </div>
            <MovieForm
                filter={filter}
                setFilter={setFilter}
                formOptions={formOptions}
                updateSelectedMovies={updateSelectedMovies}
            />
            <MovieWheel
                movieList = {movieList}
                setSelectedMovie={setSelectedMovie}
            />
            <MovieResult
                selectedMovie={selectedMovie}
            />
        </main>
    );
}

export default MoviePage;