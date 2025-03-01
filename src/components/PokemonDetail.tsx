import type { PokemonDetail } from '@/types/pokemon';
import Image from 'next/image';

interface PokemonDetailProps {
    pokemon: PokemonDetail;
}

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 bg-gray-50 flex justify-center">
                <div className="relative w-64 h-64">
                    <Image
                        src={imageUrl}
                        alt={pokemon.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <span className="text-gray-500 text-sm">#{pokemon.id.toString().padStart(3, '0')}</span>
                    <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>

                    <div className="flex mt-2 space-x-2">
                        {pokemon.types.map((type, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                                style={{ backgroundColor: getTypeColor(type.type.name) }}
                            >
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Info</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-gray-600">Height:</div>
                            <div>{pokemon.height / 10} m</div>
                            <div className="text-gray-600">Weight:</div>
                            <div>{pokemon.weight / 10} kg</div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Abilities</h2>
                        <ul className="list-disc list-inside">
                            {pokemon.abilities.map((ability, index) => (
                                <li key={index} className="capitalize">
                                    {ability.ability.name} {ability.is_hidden && <span className="text-gray-500">(Hidden)</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-3">Stats</h2>
                    <div className="space-y-3">
                        {pokemon.stats.map((stat, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="capitalize text-gray-600">{formatStatName(stat.stat.name)}:</span>
                                    <span className="font-medium">{stat.base_stat}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-red-600 h-2.5 rounded-full"
                                        style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-3">Moves</h2>
                    <div className="flex flex-wrap gap-2">
                        {pokemon.moves.slice(0, 10).map((move, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize">
                                {move.move.name.replace('-', ' ')}
                            </span>
                        ))}
                        {pokemon.moves.length > 10 && (
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                +{pokemon.moves.length - 10} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper functions
function formatStatName(statName: string): string {
    const statNameMap: Record<string, string> = {
        'hp': 'HP',
        'attack': 'Attack',
        'defense': 'Defense',
        'special-attack': 'Sp. Atk',
        'special-defense': 'Sp. Def',
        'speed': 'Speed'
    };

    return statNameMap[statName] || statName;
}

function getTypeColor(type: string): string {
    const typeColors: Record<string, string> = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    };

    return typeColors[type] || '#777777';
}