import safeFetchJson from "./utils";
import Country from "../model/country.mjs";
import Filter from "../model/filter.mjs";
import movieLoader from "./movieLoader";


async function initLoader() {
    const base = import.meta.env.VITE_API_BASE_URL;

    const baseUrl = new URL(base);

    const providersUrl = new URL('watch/providers/tv', baseUrl);
    providersUrl.searchParams.append('language', 'en-US');
    providersUrl.searchParams.append('watch_region', 'SE');

    // https://api.themoviedb.org/3/genre/movie/list (genres)
    //https://api.themoviedb.org/3/configuration/languages (languages)
    // https://api.themoviedb.org/3/configuration/countries (countries)
    const [providers, genres, languages, countries, movies] = await Promise.all([
        safeFetchJson(providersUrl).then((provider) => provider["results"]),
        safeFetchJson(new URL('genre/movie/list', baseUrl)).then((genre) => genre["genres"]),
        safeFetchJson(new URL('configuration/languages', baseUrl)),
        safeFetchJson(new URL('configuration/countries', baseUrl)),
        movieLoader(new Filter().toString),
    ]);

    const formOptions = {providers, genres, languages, countries};  

    return {formOptions, movies};  
}

export default initLoader;