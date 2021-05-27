import React, { useRef, useEffect } from 'react';
export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const setSearch = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title"> search form </h2>
      <form class="search-form form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search your key word </label>
          <input type="text" id="search" name="search" ref={searchValue} onChange={setSearch} />
        </div>
      </form>
    </section>
  );
}
