import Movie from '../model/movie.mjs';
import safeFetchJson from "./utils";

async function movieLoader(params) {
    const base = import.meta.env.VITE_API_BASE_URL;

    const movies = await safeFetchJson(base + "discover/movie?" + params);

    await new Promise(resolve => setTimeout(resolve, 0));
    return Movie.parse(movies.results);
}
export default movieLoader;
