class Genre {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static parse(json) {
        let parsedJson = JSON.parse(json);
        if (Array.isArray(parsedJson)) {
            return parsedJson.map(genre => new Genre(genre.id, genre.name));
        }else {
            return new Genre(parsedJson.id, parsedJson.name);
        }
    }
}

export default Genre;