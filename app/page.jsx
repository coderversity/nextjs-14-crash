'use client';

import React, { useState } from 'react'

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
        <h2>Search Pokémon skills and abilities.</h2>

        <form onSubmit={handleSubmit}>
          <input type='text' name='seatrchTerm' value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search Pokémon by name...' />
          <button type='submit' className='btn font-bangers'>Go!</button>
        </form>
      </section>
    </>  
  )
}

export default HomePage