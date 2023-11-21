import SearchForm from './components/SearchForm';
import TopPokemon from './components/TopPokemon';

const HomePage = () => {
  return (
    <>
      <section className='search-section'>
        <SearchForm />
      </section>

      <section className='random-section'>
        <TopPokemon />
      </section>
    </>  
  )
}

export default HomePage