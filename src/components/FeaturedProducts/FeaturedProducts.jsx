import React from 'react';
import Card from '../Card/Card';
import './featuredProducts.scss';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);



  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis laudantium rem reprehenderit ipsum ullam in nostrum,
          ratione, similique sequi quas dolorum?
        </p>
      </div>
      <div className="bottom">
        {error
         ? "something went wrong!" 
         : loading 
         ? "Loading" 
         : data && data.length > 0 
         ? data.map((item) => (
            <Card item={item} key={item.id} />
          ))
        : "No product found"}
      </div>
    </div>
  );
};

export default FeaturedProducts;
