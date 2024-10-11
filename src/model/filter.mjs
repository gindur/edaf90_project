// sort
// language
// genre
// release year
// watch region
// watch provider
// director


class Filter {
    constructor() {
        this.params = {"watch_region": "SE"}
    }

    setSort(strategy) {
        this.params["sort_by"] = strategy;
        return this;
    }

    setLanguage(language) {
        this.params["language"] = language;
        return this;
    }

    setGenre(genres) {
        this.params["with_genres"] = genres;
        return this;
    }

    setYear(minYear, maxYear) {
        this.params["release_date.gte"] = minYear + "-01-01";
        this.params["release_date.lte"] = maxYear + "-01-01";
        return this;
    }

    setProvider(providers) {
        this.params["with_watch_providers"] = providers;
        return this;
    }

    setDirector(providers) {
        this.params["with_crew"] = providers;
        return this;
    }

    toString() {
        const paramsStr = Object.keys(this.params).map(name => {
            const param = this.params[name];
            if (param && Array.isArray(param) && param.length != 0) {
                return name + "=" + param.join("%7C%7C");
            } else if (param) {
                return name + "=" + param;
            }
        });

        console.log("paramstr", paramsStr)

        return paramsStr.join("&");
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
export default Filter;