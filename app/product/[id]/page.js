'use client';

import { useEffect, useState } from 'react';
import ImageSwapper from '../ImageSwapper';
import ErrorPage from 'next/error';
import ProductInformation from '../ProductInformation';
import { fetchProductById } from '@/utils/FetchProductById';

// Example product with image array for image swapper component
const exampleProduct = {
  productId: 2,
  productName: 'Example Product',
  price: 24.99,
  productImages: [
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
  ],
};

export default function Page({ params }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  // Fetches product based on the url params
  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(params.id);
        // Appends product images to the fetched product data from DummyData.js
        setProduct({
          ...fetchedProduct,
          productImages: exampleProduct.productImages,
        });
      } catch (error) {
        // stores error in useState
        setError({
          statusCode: 404,
          message: error.message || 'Product not found.',
        });
      }
    };
    FetchProduct();
  }, []);

  // If error, send user to error page
  if (error) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className='flex mx-16 px-2 justify-center align-center mt-4'>
      <div className='basis-1/3'>
        {product && !error && (
          <ImageSwapper images={product.productImages} />
        )}
      </div>
      <div className='basis-1/3'>
        {product && !error && (
          <ProductInformation productInformation={product} />
        )}
      </div>
    </div>
  );
}
