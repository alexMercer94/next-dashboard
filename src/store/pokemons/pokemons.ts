import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

const getInitialState = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');

    return favorites;
};

const initialState: PokemonsState = { favorites: {} };

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (!!state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = pokemon;
            }

            localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
        },
        setFavortitePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        },
    },
});

export const { toggleFavorite, setFavortitePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
