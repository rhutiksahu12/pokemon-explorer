import { Pokemon, PokemonDetail, PokemonResponse } from '../types/pokemon';

const API_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemons(limit = 20, offset = 0): Promise<Pokemon[]> {
    try {
        const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}&`);
        const data: PokemonResponse = await response.json();

        return data.results.map((pokemon, index) => {
            const id = offset + index + 1;
            return {
                ...pokemon,
                id,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            };
        });
    } catch (error) {
        console.error('Error fetching Pokemons:', error);
        return [];
    }
}

export async function fetchPokemonDetail(id: string): Promise<PokemonDetail | null> {
    try {
        const response = await fetch(`${API_URL}/pokemon/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch Pokemon with ID ${id}`);
        }

        const data: PokemonDetail = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon detail:', error);
        return null;
    }
}
