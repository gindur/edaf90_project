import MovieForm from "./MovieForm";
import MovieWheel from "./MovieWheel";
import MovieResult from "./MovieResult";
import { useLoaderData } from 'react-router-dom';
import { useState } from "react";
import Filter from "../model/filter.mjs";
import movieLoader from "../loaders/movieLoader";
const colors = ['#F5C519', '#DC2026'];

function MoviePage() {
    const {formOptions, movies} = useLoaderData();

    const createMovieSegments = (movies) => {
        return movies.map((movie, index) => {
            return {segmentText: movie.title, segColor: colors[index%colors.length] }
          }).slice(0, 10);
    }

    const [filter, setFilter] = useState(new Filter());
    const [movieInfo, setMovieInfo] = useState(movies);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieList, setMovieList] = useState(createMovieSegments(movies));
    const [showResult, setShowResult] = useState(false);

    const updateSelectedMovies = async () => {
        const params = filter.toString();
        const movies = await movieLoader(params);
        setMovieInfo(movies);
        const segments = createMovieSegments(movies);
        setMovieList(segments);
    }


    const handleSpinFinish = (result) => {
        let res = movieInfo.filter(movie => movie.title === result);
        setSelectedMovie(res[0] ? res[0] : null);
        setShowResult(true);
    }

    return (
        <main>
            <div className="title-container">
                <h3>Can't decide what movie to watch?</h3>
                <p>Let the wheel decide what you watch tonight</p>
            </div>
            <MovieWheel
                movieList = {movieList}
                handleSpinFinish={handleSpinFinish}
            />
            <MovieForm
                filter={filter}
                setFilter={setFilter}
                formOptions={formOptions}
                updateSelectedMovies={updateSelectedMovies}
                showResult={showResult}
                setShowResult={setShowResult}
            />
            <MovieResult
                selectedMovie={selectedMovie}
                showResult={showResult}
                setShowResult={setShowResult}
            />
        </main>
    );
}

export default MoviePage;