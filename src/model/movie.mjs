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
        const parsed = JSON.parse(jsonMovie);
        if (Array.isArray(parsedMovie)){
            return parsed.map(movieData => {
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
                parsed.id,
                parsed.genre_id,
                parsed.original_language, 
                parsed.original_title, 
                parsed.overview, 
                parsed.popularity, 
                parsed.poster_path, 
                parsed.release_date, 
                parsed.title, 
                parsed.vote_average, 
                parsed.vote_count)
        }
    } 
}

export default Movie;