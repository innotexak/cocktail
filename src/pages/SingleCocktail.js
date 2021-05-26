import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        const { drinks } = data;
        if (drinks) {
          const newCocktail = drinks.map((item) => {
            const { idDrink, strAlcoholic, strCategory, strDrinkThumb, strDrink, strGlass, strInstructions } = item;
            console.log(item);
            return {
              id: idDrink,
              name: strDrink,
              info: strAlcoholic,
              category: strCategory,
              instruction: strInstructions,
              image: strDrinkThumb,
              glass: strGlass,
            };
          });
          setCocktail(newCocktail);
          console.log(newCocktail);
        }
      } catch (error) {
        console.log(error);
        setCocktail(null);
      }
    }
    getCocktail();
  }, [id]);
  return <div>single cocktail</div>;
}
