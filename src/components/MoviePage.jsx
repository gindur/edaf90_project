import MovieForm from "./MovieForm";
import MovieWheel from "./MovieWheel";
import MovieResult from "./MovieResult";
import { useLoaderData } from 'react-router-dom';
import { useState, useRef } from "react";
import Filter from "../model/filter.mjs";
import movieLoader from "../loaders/movieLoader";
const colors = ['#F5C519', '#DC2026'];

function MoviePage() {
    const {formOptions, movies} = useLoaderData();

    const createMovieSegments = (movies) => {
        try{
            return movies.map((movie) => {
                return {
                    option: movie.title,
                    image: {
                        uri: `https://www.themoviedb.org/t/p/original/${movie.poster_path}`,
                        offsetY: 200,
                    }}
            }).slice(0, 9);
        } catch {
            return null;
        }
    }

    const [filter, setFilter] = useState(new Filter());
    const [movieInfo, setMovieInfo] = useState(movies);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieList, setMovieList] = useState(createMovieSegments(movies));
    const [showResult, setShowResult] = useState(false);
    const resultsContainerRef = useRef(null);

    const updateSelectedMovies = async () => {
        const params = filter.toString();
        const movies = await movieLoader(params);
        setMovieInfo(movies);
        const segments = createMovieSegments(movies);
        setMovieList(segments);
    }

    function handleSpinFinish(result) {
        let res = movieInfo.filter(movie => movie.title === result);
        setSelectedMovie(res[0] ? res[0] : null);
        setShowResult(true);
        if (resultsContainerRef.current) {
            const yOffset = -20;
            const y = resultsContainerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <main ref={resultsContainerRef}>
            {!showResult &&
                <>
                <div className="title-container">
                    <h3>Can't decide what movie to watch?</h3>
                    <p>Let the wheel decide what you watch tonight</p>
                </div>
                <div className="form-wheel-container">
                    <MovieForm
                        filter={filter}
                        setFilter={setFilter}
                        formOptions={formOptions}
                        updateSelectedMovies={updateSelectedMovies}
                        setShowResult={setShowResult}
                    />
                    <MovieWheel
                        movieList = {movieList}
                        handleSpinFinish={handleSpinFinish}
                    />
                </div>
                </>
            }
            {showResult &&
                <MovieResult
                    selectedMovie={selectedMovie}
                    setShowResult={setShowResult}
                />
            }
        </main>
    );
}

export default MoviePage;