import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react'

function Hero() {
  return (
    <section className="relative flex min-h-130 flex-col justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center px-8 py-16 md:px-16">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl">
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-gray-300">Masterwork Music</p>

        <h1 className="mb-5 text-4xl font-extrabold text-white md:text-6xl">
          Find Your Sound.
          <br />
          Create Your Music.
        </h1>

        <p className="mb-8 max-w-xl text-base text-gray-200 md:text-lg">
          Discover a wide range of musical instruments.
          Whether you're a beginner or a professional musician,
          we have something for everyone.
        </p>

        <Link to="/products" className="inline-flex gap-2 rounded bg-gray-200 px-7 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:translate-x-2">
          <ShoppingCart />
          Shop Now ⟶
        </Link>
      </div>
    </section>
  );
}

export default Hero;
