import Hero from '../components/Home/Hero';
import CategoriesSection from '../components/Home/CategoriesSection';
import PopularInstruments from '../components/Home/PopularInstruments';
import Footer from '../components/Layout/footer';

function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />   
      <CategoriesSection />
      <PopularInstruments />
      <Footer />
    </div>
  );
}

export default Home;
