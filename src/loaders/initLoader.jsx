import safeFetchJson from "./utils";
import Country from "../model/country.mjs";


async function initLoader() {
    const base = import.meta.env.VITE_API_BASE_URL;
    const bearer = import.meta.env.VITE_API_BEARER;

    const baseUrl = new URL(base);

    const providersUrl = new URL('watch/providers/tv', baseUrl);
    providersUrl.searchParams.append('language', 'en-US');
    providersUrl.searchParams.append('watch_region', 'SE');

    // https://api.themoviedb.org/3/genre/movie/list (genres)
    //https://api.themoviedb.org/3/configuration/languages (languages)
    // https://api.themoviedb.org/3/configuration/countries (countries)
    const [providers, genres, languages, countries] = await Promise.all([
        safeFetchJson(providersUrl),
        safeFetchJson(new URL('genre/movie/list', baseUrl)),
        safeFetchJson(new URL('configuration/languages', baseUrl)),
        safeFetchJson(new URL('configuration/countries', baseUrl))
    ]);

    const res = {providers, genres, languages, countries};  

    return res;  
}

export default initLoader;