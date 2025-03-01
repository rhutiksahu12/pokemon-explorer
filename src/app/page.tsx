import PokemonList from "@/components/PokemonList";

export default function Home() {
 

  return (
    <div>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Explore Pokémon</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover information about your favorite Pokémon! Search by name or browse through the complete list.
          </p>
        </div>
      </div>

      <PokemonList />
    </div>
  );
}



// export const dynamic = 'force-dynamic';