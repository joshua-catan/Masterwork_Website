import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Categories from '../../data/Categories';

function CategoriesSection() {
  return (
    <section className="px-8 py-20 md:px-16">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">Explore Collections</p>
          <h2 className="text-3xl -mt-2 font-bold text-gray-900">Shop by Category</h2>
          <p className="-mt-1 text-gray-500">Everything you need to make great music.</p>
          
        </div>

        <Link
          to="/products"
          className="mb-8 inline-block rounded border border-gray-400 p-2 text-gray-700 transition hover:translate-x-1 hover:shadow-md"
        >
          View All Categories ⟶
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Categories.map((category) => (
          <Link to={`/category/${category.belong}`}key={category.name} className="group relative h-72 overflow-hidden rounded-lg bg-gray-900 shadow-sm">
            
            <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110"/>

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">
                {category.name}
              </h3>

              <p className="mt-1 text-sm text-gray-300">
                {category.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Explore
                <ArrowRight size={16} className="transition group-hover:translate-x-2" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
