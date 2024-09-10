import { PokemonGrid } from '@/pokemons';

const FavoritesPage = async () => {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokémons Favoritos <small className="text-blue-500">Global State</small>{' '}
            </span>

            <PokemonGrid pokemons={[]} />
        </div>
    );
};

export default FavoritesPage;
