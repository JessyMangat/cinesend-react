export interface Person {
    birth_year: string,
    created: string,
    edited: string,
    eye_color: string,
    films: [string],
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

export interface Planet {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: [string],
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

export interface Starship {
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    films: [string],
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

export interface PaginatedFetch {
    count: number,
    next: string | null
    previous: string | null
    results: Array<Person> | Array<Starship> | Array<Planet>
}