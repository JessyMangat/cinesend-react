interface IObjectKeys {
    [key: string]: any;
  }

export interface Person extends IObjectKeys{
    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    films: Array<string>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    species: [string],
    startships: [string],
    url: string,
    vehicles: [string]
}

export interface Planet extends IObjectKeys{
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: Array<string>,
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: [string],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string
}

export interface Starship extends IObjectKeys{
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    films: Array<string>,
    hyperdrive_rating: string,
    length: string,
    manufacturer: string,
    max_atmosphere_speed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: [string],
    starship_class: string,
    url: string
}

export interface Film extends IObjectKeys{
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: Array<string>,
    planets: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    species: Array<string>,
    created: string,
    edited: string,
    url: string
}

export interface PaginatedFetch {
    count: number,
    next: string | null
    previous: string | null
    results: Array<Person> | Array<Starship> | Array<Planet> | Array<Film>
}
