import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../loading-arrow.gif';
export default function SingleCocktail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            idDrink: id,
            strAlcoholic: info,
            strDrinkThumb: image,
            strCategory: category,
            strDrink: name,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
          const newCocktail = { id, info, image, category, name, glass, instructions, ingredients };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return (
      <div className="gif">
        <img src={arrow} alt="loading arrow gif " />
      </div>
    );
    // <h2 className="section-title">Loading...</h2>;
  }

  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display!! </h2>;
  } else {
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
        <h2 className="section-title">{cocktail.name}</h2>
        <div className="drink">
          <img src={cocktail.image} alt={cocktail.name} />
          <div className="drink-info">
            <p> Name: {cocktail.name}</p>
            <p> category: {cocktail.category}</p>
            <p> info: {cocktail.info}</p>
            <p>glass: {cocktail.glass}</p>
            <p> instructions: {cocktail.instructions}</p>
            <p>
              ingredients:{' '}
              {cocktail.ingredients.map((item, index) => {
                return item ? <span key={index}>{item},</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
