import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '../types/pokemon';

interface PokemonCardProps {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <Link href={`/pokemon/${pokemon.id}`} className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="p-4 bg-gray-50 flex justify-center">
                    <div className="relative w-40 h-40">
                        <Image
                            src={pokemon.image}
                            alt={pokemon.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain"
                            priority={pokemon.id <= 20}
                        />
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-gray-500 text-sm">#{pokemon.id.toString().padStart(3, '0')}</div>
                    <h2 className="text-xl font-semibold capitalize text-black mt-1">{pokemon.name}</h2>
                </div>
            </div>
        </Link>
    );
}