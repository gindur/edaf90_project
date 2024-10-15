function MovieResult({selectedMovie, setShowResult}) {   
    return (
        <>
        {selectedMovie &&
            <div className="movie-result-container">
                <span>The wheel has spoken! You are going to watch:</span>
                <h2 className="movie-title">{selectedMovie.title}</h2>
                <ul className="movie-data">
                    <li>
                        <span className="secondary-color">Rating:</span>
                        <span>
                            {selectedMovie.vote_average.toFixed(1)} ({selectedMovie.vote_count} ratings)
                        </span>
                    </li>
                    <li>
                        <span className="secondary-color">Release date:</span>
                        <span>{selectedMovie.release_date}</span>
                    </li>
                    <li>
                        <span className="secondary-color">Popularity:</span>
                        <span>{Math.round(selectedMovie.popularity)}th position</span>
                    </li>
                </ul>
                <p className="movie-description">{selectedMovie.overview}</p>
                <img 
                    className="movie-poster"
                    src={`https://www.themoviedb.org/t/p/original/${selectedMovie.poster_path}`} 
                    alt={selectedMovie.title}
                />
                <button onClick={() => setShowResult(false)} className="movie-button">
                    Try again
                </button>
            </div>
        }
        </>
    );

    /*
                <h2>{selectedMovie.title}</h2>
                <img 
                    src={`https://www.themoviedb.org/t/p/original/${selectedMovie.poster_path}`} 
                    alt={selectedMovie.title}
                />
    */
}

export default MovieResult;
