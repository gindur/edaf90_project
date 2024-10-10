class Provider {
    constructor(id, name, logo_path) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    static parse(json) {
        let parsed = JSON.parse(json);
        if (Array.isArray(parsed)) {
            return parsed.map(provider => new Provider(parsed.provider_id, parsed.provider_name, parsed.logo_path));
        } else {
            return new Provider(parsed.id, parsed.name, parsed.logo_path);
        }
    }
}
export default Provider;

