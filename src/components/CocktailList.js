import React from 'react';
import Cocktail from './Cocktail';
import arrow from '../loading-arrow.gif';

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return (
      <div className="gif">
        <img src={arrow} alt="loading arrow gif " />
      </div>
    );
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No data matched your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
