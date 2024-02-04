import product_data from './search_bar_data/MOCK_DATA.json';
import product_image from '@/app/results/search_bar_data/product_image_example.jpg';
import { formatCurrency } from '@/lib/utils';

export default function Products({ query, currentPage }) {
  // Function to filter out given products from dummy_data
  const fetchFilteredProducts = (query, currentPage) => {
    // Placeholder for actual logic to fetch and filter products based on the query
    const filteredProducts = []; // Placeholder for filtered products

    // Logic to filter products based on the query
    for (const product of product_data) {
      // Example filtering logic (replace with actual logic based on your requirements)
      if (product.product_name.toLowerCase().includes(query.toLowerCase())) {
        filteredProducts.push(product);
      }
    }

    // Calculate offset based on current page and number of items per page
    const ITEMS_PER_PAGE = 12; // Example value (replace with actual value)
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    // Apply pagination (slice the filtered products based on offset and items per page)
    const paginatedProducts = filteredProducts.slice(
      offset,
      offset + ITEMS_PER_PAGE
    );

    // Return the filtered and paginated products
    return paginatedProducts;
  };

  return (
    <div className='bg-white grid grid-cols-3 gap-5 pt-4 h-1/2'>
      {fetchFilteredProducts(query, currentPage)?.map((product, i) => (
        <div key={i} className=''>
          <div className='py-3 pr-3'>
            <div className='flex'>
              <img
                src={product_image.src}
                className='rounded'
                width={128}
                alt={`${product.product_name}'s profile picture`}
              />
              <div className='ps-2'>
                <p className='capitalize text-lg text-nowrap'>
                  {product.product_name}
                </p>
                <div className='pt-2 text-lg'>
                  {formatCurrency(product.amount)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
