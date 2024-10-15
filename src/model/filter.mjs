// sort
// language
// genre
// release year
// watch region
// watch provider
// director


class Filter {
    constructor() {
        this.params = {
            "watch_region": {"value": "SE", "label": "Sweden"}, 
            "with_genres": [{"value": 53, "label": "Thriller"}, {"value": 18, "label": "Drama"}],
            "language": {"value": "en" , "label": "English" },
            "release_date.gte": {"value": "1919-01-01", "label": 1910},
            "release_date.lte": {"value": "2024-01-01", "label": 2024},
            "with_watch_providers": [{"value": 8, "label": "Netflix"}, {"value": 1899, "label": "Max"}]
        }
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
        this.params["release_date.gte"] = {"value": minYear + "-01-01", "label": minYear};
        this.params["release_date.lte"] = {"value": maxYear + "-01-01", "label": maxYear};
        return this;
    }

    setProvider(providers) {
        this.params["with_watch_providers"] = providers;
        return this;
    }

    setDirector(directors) {
        this.params["with_crew"] = directors;
        return this;
    }

    toString() {
        const paramsStr = Object.keys(this.params).map(name => {
            const param = this.params[name];
            if (param && Array.isArray(param) && param.length != 0) {
                return name + "=" + param.map(p => p.value).join("%7C%7C");
            } else if (param) {
                return name + "=" + param.value;
            }
        });

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