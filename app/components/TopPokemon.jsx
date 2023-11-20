import { FaCheck } from 'react-icons/fa';
import React from 'react'

const BASE_URI = 'https://pokeapi.co/api/v2';

// Server component API call loads data on page load
async function fetchPokemonList() {
    const totalPokemonCount = 1292; // total number of Pokemon available via API

    // get random offset so that the results can be randomized on every page load
    const offset = Math.floor(Math.random() * totalPokemonCount) + 1;

    const limit = 10; // maximum records to retrieve

    const response = await fetch(
        `${BASE_URI}/pokemon?offset=${offset}&limit=${limit}`, {
            next: {
                revalidate: 60,
            },
        }
    );

    return await response.json();
    return pokemon;
}

async function fetchPokemonData(pokemonList) {
    const promises = pokemonList?.map(async (pokemon) => {
        const response = await fetch(
            pokemon.url, {
                next: {
                    revalidate: 60,
                },
            }
        );

        return await response.json();
    });
    
    return await Promise.all(promises);
}


const TopPokemon = async () => {
    const { results } = await fetchPokemonList();
    const pokemon = await fetchPokemonData(results);

    return (
        <>
            <h1 className='font-bangers text-center'>Top Pokémon</h1>

            {pokemon ? (
                <table>
                    <thead>
                        <tr className='font-bangers'>
                            <th></th>
                            <th>Name</th>
                            <th>Abilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon?.map(item => (
                            <tr key={item.id}>
                                <td>IMAGE</td>
                                <td>{item.name}</td>
                                <td>
                                    <ul>
                                        {item.abilities?.map((abl, index) => (
                                            <li key={index}><FaCheck />{abl.ability?.name}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>    
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No records found</p>
            )}
        </>
    )
}

export default TopPokemon