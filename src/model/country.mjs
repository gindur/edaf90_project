class Country {
    constructor(iso, eng_name, native_name) {
        this.iso = iso;
        this.eng_name = eng_name;
        this.native_name = native_name;
    }
    toString() {
        return `${this.name} - ${this.capital} - ${this.population}`;
    }
}

export default Country;