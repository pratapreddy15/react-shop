import React, { useEffect } from 'react';
import NoProductsFound from '../../components/NoProductsFound/NoProductsFound';
import Spinner from '../../components/UI/Spinner';
import useHttp from '../../hooks/use-http';
import { getAllProducts } from '../../lib/api';
import ProductList from '../../components/ProductList/ProductList';

const Products = () => {
  const { sendRequest, status, data: loadedProducts, error } = useHttp(getAllProducts);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === 'pending') {
    return (
      <div className="centered">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="focused centered">{error}</p>;
  }

  if (status === 'completed' && (!loadedProducts || loadedProducts.length === 0)) {
    return <NoProductsFound />;
  }

  return <ProductList products={loadedProducts} />;
};

export default Products;
