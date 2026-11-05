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

  const buttonStyle = "mt-auto inline-block w-fit bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 hover:shadow-lg transition";
  const imageStyle = "w-full h-100 object-cover hover:scale-110 transition duration-600";
  const cardStyle = "flex h-full max-w-sm flex-col overflow-hidden rounded-lg bg-white shadow-md border border-gray-300 transition duration-300 hover:shadow-lg hover:scale-101 transition duration-300";
  
  return (
    <section className="px-5 mt-7 py-5 md:px-5">

        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">
                Explore Our {category}s
            </h1>
            <Link to="/products" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md transition">
                ⟵ Back
            </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
            <div key={product.id} className={cardStyle}>
                <img src={product.image} alt={product.name} className={imageStyle} />

                <div className="flex flex-1 flex-col p-6">
                <h3 className="min-h-14 text-xl font-bold text-gray-800">{product.name}</h3>

                <Link to={`/category/${category}/${product.id}`} className={buttonStyle}>
                    {product.price}
                </Link>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
}

export default Category;