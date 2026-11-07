import Hero from '../components/Home/Hero';
import CategoriesSection from '../components/Home/CategoriesSection';
import PopularInstruments from '../components/Home/PopularInstruments';
import Service from '../components/Home/service'

function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />   
      <CategoriesSection />
      <PopularInstruments />
      <Service />
    </div>
  );
}

export default Home;
