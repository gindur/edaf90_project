import MovieForm from "./MovieForm";
import MovieWheel from "./MovieWheel";
import MovieResult from "./MovieResult";
import { useLoaderData } from 'react-router-dom';
import { useState } from "react";

function MoviePage() {
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [selectedGenre, setSelectedGenre] = useState([null]);
    const [selectedReleaseYearInterval, setSelectedReleaseYearInterval] = useState({start: null, end: null});
    const [selectedStreamingService, setSelectedStreamingService] = useState([null]);

    const formOptions = useLoaderData();

    return (
        <main>
            <div className="title-container">
                <h3>Can't decide what movie to watch?</h3>
                <p>Let the wheel decide what you watch tonight</p>
            </div>
            <MovieForm
                setMovieList={setMovieList}
                setSelectedGenre={setSelectedGenre}
                setSelectedReleaseYearInterval={setSelectedReleaseYearInterval}
                setSelectedStreamingService={setSelectedStreamingService}
                formOptions={formOptions}
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