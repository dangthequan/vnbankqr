export default class Provider {
    id: string
    name: string
    guid: string
    category: string
    service: string
    city: string
    country: string

    constructor(id: string, name: string, guid: string, category: string, service: string, city: string, country: string) {
        this.id = id;
        this.name = name;
        this.guid = guid;
        this.category = category;
        this.service = service;
        this.city = city;
        this.country = country
    }
}