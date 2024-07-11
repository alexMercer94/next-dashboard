import { Pokemon } from '@/pokemons';

interface Props {
    params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache',
    }).then((res) => res.json());

    return pokemon;
};

const PokemonPage = async ({ params }: Props) => {
    const pokemon = await getPokemon(params.id);

    return (
        <div>
            <span>PokemonPage</span>
        </div>
    );
};

export default PokemonPage;
