import { useParams, Link } from 'react-router'
import { Guitar, Bass, Keyboard, Drums } from '../../data/categoryItems'
import NotFound from '../../pages/NotFound'
import { ShoppingCart } from 'lucide-react'

function Product() {

  const { category, id } = useParams();

  const products = [...Guitar, ...Bass, ...Keyboard, ...Drums];

  const productId = Number(id);
  const product = products.find(product => product.id === productId);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="px-8 py-16 md:px-16">

      <Link to="/products" className="mb-8 inline-block border rounded border-gray-400 p-2 text-gray-700 hover:shadow-md transition">
        ⟵ Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={product.image} alt={product.name} className="w-full h-125 border-2 border-gray-300 rounded shadow-2xl object-contain"/>
        <div>
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-gray-700">
              Masterwork Music
          </p>

          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <Link to={`/category/${category}/${product.id}/checkout`} className="inline-flex items-center p-4 gap-2 text-2xl bg-gray-700 font-bold text-gray-100 rounded mt-6">
            <ShoppingCart /> {product.price}
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Product
