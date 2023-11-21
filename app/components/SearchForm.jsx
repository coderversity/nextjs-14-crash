'use client';

import { BASE_URI } from '@/utils/helpers';
import Image from 'next/image';
import Loading from '../loading';
import { beautify } from '@/utils/helpers';
import { useState } from 'react';

const SearchForm = () => {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSearchResult(null);
        setLoading(true);

        try {
            const response = await fetch(`${BASE_URI}/pokemon/${keyword}`);
            setSearchResult(await response.json());
        } catch (err) {
            setSearchResult(`We couldn't find any results matching \"${keyword}\". Try a different query.`);
            console.error(err);
        }

        setLoading(false);
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className='search-form'>
                <h1 className='font-bangers'>Search Pokémon by name</h1>

                <form onSubmit={handleSubmit}>
                    <input
                    type='text'
                    name='keyword'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder='Search Pokémon by name...'
                    required
                    />
                    <button type='submit' className='btn font-bangers'>Go!</button>
                </form>
            </div>
                
                <div className='search-result'>
                    {searchResult && (
                        typeof searchResult === 'object' ? (
                            // JSON response is an object
                            <>
                                <Image
                                    src={searchResult?.sprites?.front_default}
                                    height={300}
                                    width={300}
                                    alt='pokemon image'
                                />
                                <div className="ml-4 leading-8">
                                <h2 className='font-bangers'>{searchResult.name}</h2>
                                
    
                                <p>Type: {beautify(searchResult.types[0]?.type?.name)}</p>
                                <p>Height: {searchResult.height * 10} cm</p>
                                <p>Weight: {searchResult.weight} kg</p>
                                <p>Abilities:</p>
                                <ul>
                                    {searchResult.abilities?.map((item, index) => (
                                    <li key={index}>{beautify(item.ability?.name)}</li>
                                    ))}
                                </ul>
                                </div>
                            </>
                        ) : typeof searchResult === 'string' && (
                            // JSON response is a string (usually an error)
                            <p className='text-center my-4'>{searchResult}</p>
                        )
                    )}
                </div>
        </>
    )
}

export default SearchForm