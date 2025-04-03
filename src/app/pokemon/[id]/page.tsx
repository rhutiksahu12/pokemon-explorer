import Link from 'next/link';
import { notFound } from 'next/navigation';
import PokemonDetail from '../../../components/PokemonDetail';
import { fetchPokemonDetail } from '@/lib/pokemonApi';

// Updated type for Next.js 15 where params is a Promise
type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const resolvedParams = await params;
    const pokemon = await fetchPokemonDetail(resolvedParams.id);

    if (!pokemon) {
        return {
            title: 'Pokemon Not Found',
        };
    }

    return {
        title: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} | Pokémon Explorer`,
        description: `View details about ${pokemon.name}, including stats, abilities, and moves.`,
    };
}

export default async function PokemonPage({ params }: { params: Params }) {
    const resolvedParams = await params;
    const pokemon = await fetchPokemonDetail(resolvedParams.id);

    if (!pokemon) {
        notFound();
    }

    return (
        <div>
            <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-800">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Pokémon List
                </Link>
            </div>

            <PokemonDetail pokemon={pokemon} />

            <div className="mt-8 flex justify-between">
                {pokemon.id > 1 && (
                    <Link href={`/pokemon/${pokemon.id - 1}`} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                        Previous Pokémon
                    </Link>
                )}
                <Link href={`/pokemon/${pokemon.id + 1}`} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 ml-auto">
                    Next Pokémon
                </Link>
            </div>
        </div>
    );
}