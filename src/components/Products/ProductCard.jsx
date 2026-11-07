import { useParams, Link } from 'react-router'
import { Guitar, Bass, Keyboard, Drums } from '../../data/categoryItems'
import NotFound from '../../pages/NotFound'
import { ShoppingCart, ShieldCheck, Truck, Headphones } from 'lucide-react'

function Product() {

  const { category, id } = useParams();

  const products = [...Guitar, ...Bass, ...Keyboard, ...Drums];

  const productId = Number(id);
  const product = products.find(product => product.id === productId);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-16 lg:px-24">

      <Link to="/products" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md hover:-translate-x-2 transition">
        ⟵ Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-12 shadow-sm relative overflow-hidden">

          <h1 className="absolute top-5 left-5 text-xs font-bold tracking-widest uppercase bg-gray-700 text-white px-4 py-2 rounded-sm">
            Product Details
          </h1>

          <img src={product.image} alt={product.name} className="w-full h-100 md:h-125 object-contain hover:scale-105 transition duration-500"/>

        </div>

        <div className="flex flex-col">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Masterwork Music</p>

          <div className="w-16 h-1 bg-gray-800 mb-6"></div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{product.name}</h1>

          <p className="text-gray-500 leading-8 mt-6 text-base md:text-lg">{product.description}</p>

          <div className="mt-8 border-y border-gray-200 py-6">

            <p className="text-sm text-gray-500 mb-2">Price</p>
            <p className="text-3xl font-bold text-gray-900">{product.price}</p>
            
          </div>

          <Link to={`/category/${category}/${product.id}/checkout`} className="flex items-center justify-center gap-3 mt-8 bg-gray-900 text-white py-4 px-6 rounded font-bold text-lg hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <ShoppingCart size={22} />
            Buy Now
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

            <div className="flex items-center gap-3">
              <Truck className="text-gray-700 shrink-0" size={23} />
              <div>
                <p className="text-sm font-bold text-gray-800">Delivery</p>
                <p className="text-xs text-gray-500">Convenient</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-gray-700 shrink-0" size={23} />
              <div>
                <p className="text-sm font-bold text-gray-800">Quality</p>
                <p className="text-xs text-gray-500">Trusted products</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Headphones className="text-gray-700 shrink-0" size={23} />
              <div>
                <p className="text-sm font-bold text-gray-800">Support</p>
                <p className="text-xs text-gray-500">Customer care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-gray-200 pt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          We Serve You
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          At Masterwork Music, we provide quality musical instruments for
          every musician, from beginners to professionals, inspiring 
          creativity through music.
        </p>
      </div>

    </div>
  )
}

export default Product