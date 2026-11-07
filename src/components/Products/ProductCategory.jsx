import { useParams, Link } from "react-router";
import { Guitar, Bass, Keyboard, Drums } from "../../data/categoryItems";
import NotFound from '../../pages/NotFound'

function Category() {
  const { category } = useParams();

  const categories = {
    guitar: Guitar,
    bass: Bass,
    keyboard: Keyboard,
    drums: Drums
  };

  const products = categories[category];

  if (!products) {
    return <NotFound />
  }

  const imageStyle = "w-full h-100 object-cover hover:scale-110 transition duration-600 group-hover:shadow-[inset_0_-20px_30px_rgba(0,0,0,0.4)]";
  const cardStyle = "group flex h-full max-w-sm flex-col overflow-hidden rounded-lg bg-white shadow-md border border-gray-300 transition duration-300 hover:shadow-lg hover:scale-101 transition duration-300";
  
  return (
    <section className="px-5 mt-7 py-5 md:px-5">

        <div className="mb-12 border-t border-gray-300 pt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
             <p className="mb-3 mx-0.5 font-semibold uppercase tracking-[0.3em] text-gray-500">
                Masterwork Music
              </p>
              <h1 className="text-3xl -mt-3 font-bold text-gray-800 mb-8 capitalize">
                {category} 
            </h1>
            <p className="mb-3 mx-0.5  -mt-8 text-gray-600">
                Discover our {category} Collection.
              </p>
          </div>

            <Link to="/products" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md hover:-translate-x-2 transition">
              ⟵ Back
            </Link>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (

              <Link key={product.id} to={`/category/${category}/${product.id}`} className={cardStyle}>

                <div className="relative overflow-hidden">
                  <h1 className="absolute top-5 left-5 text-xs z-50 font-bold tracking-widest uppercase bg-gray-700 text-white px-4 py-2 rounded">
                    Get Now
                  </h1>
                  <img src={product.image}alt={product.name}className={imageStyle}/>
                </div>
               
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>

                  <div className="mt-auto flex justify-between items-center">
                    <h3 className="text-gray-900 py-2 font-semibold">{product.price}</h3>

                    <span className="inline-block border border-gray-900 text-gray-900 p-2 rounded hover:bg-gray-50 group-hover:translate-x-2 transition">
                      View ⟶
                    </span>

                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 border-t border-gray-200 pt-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Make Music Your Way.
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Discover quality musical instruments and find everything you need
              to bring your musical ideas to life.
            </p>
          </div>
    </section>
  );
}

export default Category;