import React, { useState, useEffect } from 'react';
import './Api.css';
const Api = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>{product.id}
            <p>H--{product.title}</p>
            <p>$%${product.price}</p>
            <img src={product.image}/>
            <li>{product.id}</li>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Api;
