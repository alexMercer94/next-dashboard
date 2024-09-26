import { FavoritePokemons } from '@/pokemons';

export const metadata = {
    title: 'Favoritos',
    description: 'Loremhfurofh cioej jfieo',
};

const FavoritesPage = () => {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Pokémons Favoritos <small className="text-blue-500">Global State</small>{' '}
            </span>

            {/* <PokemonGrid pokemons={Object.values(pokemons)} /> */}
            <FavoritePokemons />
        </div>
    );
};

export default FavoritesPage;
