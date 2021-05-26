import React from 'react';
import { useParams } from 'react-router-dom';
export default function SearchForm({ setSearchForm, searchTerm }) {
  // const id = useParams(id);

  return (
    <form class="form search-form section">
      <h2 className="section-title"> search form </h2>

      <div className="form-control">
        <label htmlFor="search">Search your key word </label>
        <input type="text" id="search" name="search" value={searchTerm} className="form-control" onChange={setSearchForm} />
      </div>
    </form>
  );
}
