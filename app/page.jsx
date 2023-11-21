'use client';

import React, { useState } from 'react'

import Image from 'next/image';
import TopPokemon from './components/TopPokemon';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`);
    setSearchResult(await response.json()); 
  }
  
  return (
    <>
      <section className='search-section'>
        <div className='w-2/5 bg-gray-50 p-8 shadow-sm border'>
          <h1 className='font-bangers'>Search Pokémon skills and abilities.</h1>

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='keyword'
              value=''
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
              src={searchResult.front_default}
              height={300}
              width={300}
              alt='pokemon image'
            />
            <div className="ml-4 leading-8">
              <h2 className='font-bangers'>Pikachu</h2>
              <div className='table-cell'>
                <p>Type: Electric</p>
                <p>Height: 40 cm (height * 10)</p>
                <p>Weight: 60 kg (weight * 10)</p>
                <p>Abilities: Shock, Electrify, Ground Pound Attack</p>
              </div>
            </div>
            </>
          )}
        </div>
      </section>

      <section className='random-section'>
        <TopPokemon />
      </section>
    </>  
  )
}

export default HomePage