'use client';

import React, { useState } from 'react'

import TopPokemon from './components/TopPokemon';

const HomePage = () => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = e.target;
    alert(searchTerm);
    
  }
  
  return (
    <>
      <section className='search-section'>
        <h1 className='font-bangers'>Search Pokémon skills and abilities.</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' name='seatrchTerm' value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search Pokémon by name...' />
          <button type='submit' className='btn font-bangers'>Go!</button>
        </form>
      </section>

      <section className='random-section'>
        <TopPokemon />
      </section>
    </>  
  )
}

export default HomePage