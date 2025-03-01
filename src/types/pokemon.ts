export interface Pokemon {
    id: number;
    name: string;
    url: string;
    image: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: {
        ability: {
            name: string;
        };
        is_hidden: boolean;
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    moves: {
        move: {
            name: string;
        };
    }[];
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
        front_default: string;
    };
}

export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}