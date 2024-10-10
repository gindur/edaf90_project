// sort
// language
// genre
// release year
// watch region
// watch provider
// director


class Filter {
    constructor() {
        this.params = {"with_watch_providers": [], "with_crew": [], "with_genres": [], "watch_region": "SE"}
    }

    setSort(strategy) {
        this.params["sort_by"] = strategy;
        return this;
    }

    setLanguage(language) {
        this.params["language"] = language;
        return this;
    }

    addGenre(genre) {
        this.params["with_genres"].push(genre);
        return this;
    }

    setYear(minYear, maxYear) {
        this.params["release_date.gte"] = minYear;
        this.params["release_date.lte"] = maxYear;
        return this;
    }

    addProvider(provider) {
        this.params["with_watch_providers"].push(provider);
        return this;
    }

    addDirector(director) {
        this.params["with_crew"].push(director);
        return this;
    }

    toString() {
        const paramsStr = Object.keys(this.params).map(name => {
            const param = this.params[name];
            if (Array.isArray(param)) {
                param.reduce((tot, value) => tot + "||" + value);
            } else {
                name + "=" + param;
            }
        });

        return paramsStr.reduce((tot, value) => tot + "&" + value)
    }

    toUrl() {
        return URL(
            host
        )
    }
}

const filterTypes = {
    "sort": ["original_title.asc"],
    "language": ["swedish", "english"],
    "genre": ["horror"],
    "provider": ["Netflix", "Disney+plus"],
    "director": ["Steven+Spielberg"]
}

const Sort =  {
    "Original title asc": "original_title.asc",
    "Original title desc": "original_title.desc",
    "Release data asc" : "release_date.asc",
    "Release data desc" : "release_date.desc",
    "Vote average asc" : "vote_average.asc",
    "Vote average desc" :"vote_average.desc"   
}

const Language = {
    "Swedish": "SE",
    "English": "EN",
    "Hebrew": "hebrew",
}

const Director = {
    "Steven Spielberg": "Steven+Spielberg",
    "Quentin Tarantino": "Quentin+Tarantino",
    "Christopher Nolan": "Christopher+Nolan",
}

//providers api: https://api.themoviedb.org/3/watch/providers/movie

// disney+: 337
// netflix: 8
// prime: 119
// appleTV: 2
// appleTv+: 350
