class Movie {

    constructor(id, genre_id, original_language, original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count ) {
        this.id = id;
        this.genre_id = genre_id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }

    static parse(jsonMovie){
        console.log(jsonMovie);
        if (Array.isArray(jsonMovie)){
            return jsonMovie.map(movieData => {
                return new Movie(
                    movieData.id,
                    movieData.genre_id,
                    movieData.original_language, 
                    movieData.original_title, 
                    movieData.overview, 
                    movieData.popularity, 
                    movieData.poster_path, 
                    movieData.release_date, 
                    movieData.title, 
                    movieData.vote_average, 
                    movieData.vote_count)

            });
        } else {
            return new Movie(
                jsonMovie.id,
                jsonMovie.genre_id,
                jsonMovie.original_language, 
                jsonMovie.original_title, 
                jsonMovie.overview, 
                jsonMovie.popularity, 
                jsonMovie.poster_path, 
                jsonMovie.release_date, 
                jsonMovie.title, 
                jsonMovie.vote_average, 
                jsonMovie.vote_count)
        }
    } 
}

export default Movie;