import React from 'react';
import { Link } from 'react-router-dom';
export default function Cocktail({ id, name, image, info, glass }) {
  return (
    <article className="cocktail">
      <img src={image} alt={name} />

      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/single-cocktail/${id}`} className="btn-primary btn btn-details">
          Details
        </Link>
      </div>
    </article>
  );
}
