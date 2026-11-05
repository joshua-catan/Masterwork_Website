import { Link } from 'react-router';
import { CircleChevronRight } from 'lucide-react';
import { Guitar } from '../../data/categoryItems';

function PopularInstruments() {
  return (
    <section className="px-8 py-16 md:px-16">
      <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
            
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">Discover Collections</p>
          <h2 className="text-3xl font-bold text-gray-900">Popular Instrument</h2>
          <p className="mt-2 text-gray-500">We have something for everyone.</p>

        </div>
        <Link
          to="/products"
          className="mb-8 inline-block rounded border border-gray-400 p-2 text-gray-700 transition hover:translate-x-1 hover:shadow-md"
        >
          View All Instruments ⟶
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Guitar.slice(0, 3).map((item) => (
          <Link
            to="/products"
            key={item.id}
            className="group relative overflow-hidden border border-gray-300 bg-white shadow-md transition duration-300 hover:shadow-lg"
          >
            <div className="h-130 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-start p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black transition duration-300 group-hover:translate-x-2">
                <CircleChevronRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularInstruments;
