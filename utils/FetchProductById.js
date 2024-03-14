// Import necessary modules and dependencies
import { unstable_noStore as noStore } from 'next/cache';
import getDummyData from './DummyData';

// Define a function to fetch product by ID asynchronously
export async function fetchProductById(id) {
  // Validate the input ID
  if (!Number.isInteger(Number(id))) {
    throw new Error('Invalid product ID.');
  }

  // Disable caching
  noStore();

  try {
    // Retrieve dummy data (replace with actual database query)
    const data = getDummyData();

    // Find the product with the given ID
    const product = data.find((item) => item.productId === Number(id));

    // If product not found, throw an error with status code 404
    if (!product) {
      const error = new Error('Product not found.');
      error.statusCode = 404;
      throw error;
    }

    // Return the product
    return product;
  } catch (error) {
    // Log database error and throw a generic error
    throw new Error('Failed to fetch product.');
  }
}
