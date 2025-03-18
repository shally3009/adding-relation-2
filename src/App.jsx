import React, { useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import './App.css';

// Static products array (provided)
const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    image: "https://via.placeholder.com/150",
    avgRating: 3,
    totalRatings: 5,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    image: "https://via.placeholder.com/150",
    avgRating: 4,
    totalRatings: 10,
  },
  // Add more products as needed
];

function App() {
  const [products, setProducts] = useState(initialProducts); // Set the initial state for products

  const handleRatingSubmit = (productId, newRating) => {
    // Find the product by its id
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newAvgRating = ((product.avgRating * product.totalRatings) + newRating) / (product.totalRatings + 1);
          return {
            ...product,
            avgRating: newAvgRating.toFixed(1), // Format to 1 decimal place
            totalRatings: product.totalRatings + 1,
          };
        }
        return product;
      })
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;