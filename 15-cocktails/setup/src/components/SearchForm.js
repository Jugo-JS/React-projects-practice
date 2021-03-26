import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const serachValue = React.useRef('');

  React.useEffect(() => {
    serachValue.current.focus();
  }, [])

  const searchCocktail = () => {
    setSearchTerm(serachValue.current.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input type='text' id='name' ref={serachValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
