import Search from '@/components/search';
import CategorySection from '@/components/CategorySection.jsx';

export default function Home() {
  return (
    <main className='flex-col flex w-screen overflow-x-hidden scroll-smooth mt-12'>
      <Search placeholder='Search products...' />
      <CategorySection sectionHeader='Recommended Items' />
      <CategorySection sectionHeader='Popular Items' />
    </main>
  );
}
