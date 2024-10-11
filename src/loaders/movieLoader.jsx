import Movie from '../model/movie.mjs';

async function movieLoader(params) {
    const base = import.meta.env.VITE_API_BASE_URL;
    const bearer = import.meta.env.VITE_API_BEARER;

    const response = await fetch(base + "discover/movie?" + params, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        }
    });

    //console.log("response", response);
    const movies = await response.json();
    //console.log("movies", movies);
    await new Promise(resolve => setTimeout(resolve, 0));
    return Movie.parse(movies.results);
}
export default movieLoader;
