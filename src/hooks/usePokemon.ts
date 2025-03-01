import { useState, useEffect } from 'react';
import { Pokemon } from '@/types/pokemon';
import { fetchPokemons } from '@/lib/pokemonApi';

interface UsePokemonReturn {
    pokemons: Pokemon[];
    isLoading: boolean;
    error: Error | null;
}

export function usePokemon(initialLimit: number = 50, searchTerm:string = ""): UsePokemonReturn {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        loadInitialPokemons();
    }, []);

    const loadInitialPokemons = async () => {
        try {
            setIsLoading(true);
            if(searchTerm!==""){

            }
            const data = await fetchPokemons(initialLimit, 0);
            setPokemons(data);
            console.log('setPokemon', data)
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch Pokémon'));
        } finally {
            setIsLoading(false);
        }
    };
    return {
        pokemons,
        isLoading,
        error
    };
}