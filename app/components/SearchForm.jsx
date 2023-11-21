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
    
        const response = await fetch(`${BASE_URI}/pokemon/${keyword}`);
        setSearchResult(await response.json());
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className='w-2/5 bg-gray-50 p-8 shadow-sm border'>
                <h1 className='font-bangers'>Search Pokémon skills and abilities.</h1>

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
                
                <div className='w-3/5 flex'>
                {searchResult && (
                    <>
                    <Image
                    src={searchResult.sprites?.front_default}
                    height={300}
                    width={300}
                    alt='pokemon image'
                    />
                    <div className="ml-4 leading-8">
                    <h2 className='font-bangers'>{searchResult.name}</h2>
                    

                    <p>Type: {beautify(searchResult.types[0]?.type?.name)}</p>
                    <p>Height: {searchResult.height} cm</p>
                    <p>Weight: {searchResult.weight} kg (weight * 10)</p>
                    <p>Abilities:</p>
                    <ul>
                        {searchResult.abilities?.map((item, index) => (
                        <li key={index}>{beautify(item.ability?.name)}</li>
                        ))}
                    </ul>
                    </div>
                    </>
                )}
                </div>
        </>
    )
}

export default SearchForm