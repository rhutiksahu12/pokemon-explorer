'use client';

import { useState, useEffect } from 'react';
import { Pokemon } from '../types/pokemon';
import PokemonCard from './PokemonCard';
import { usePokemon } from '@/hooks/usePokemon';
import SearchBar from './SearchBar';

export default function PokemonList() {
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
    const { pokemons: fetchedData, isLoading, error } = usePokemon();

    useEffect(() => {
        setFilteredPokemons(fetchedData);
    }, [fetchedData]);

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm.trim()) {
            setFilteredPokemons(fetchedData);
            return;
        }

        const filtered = fetchedData.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemons(filtered);
    };

    return (
        <div>
            <SearchBar onSearchResults={handleSearch} />

            {filteredPokemons.length === 0 && !isLoading ? (
                <div className="text-center py-8">
                    <p className="text-gray-600 text-lg">No Pokémon found. Try a different search term.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredPokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}

            {isLoading && (
                <div className="flex justify-center items-center h-24 mt-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                </div>
            )}
        </div>
    );
}