import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
function Home() {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('ma');

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const { idDrink, strAlcoholic, strCategory, strDrinkThumb, strDrink, strGlass } = item;
            return { id: idDrink, name: strDrink, info: `${strAlcoholic} ${strCategory}`, image: strDrinkThumb, glass: strGlass };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <section>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktail} />
    </section>
  );
}

export default Home;
