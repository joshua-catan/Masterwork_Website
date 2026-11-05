import { Link } from "react-router";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            
            <img src="/src/assets/circle-x.png" alt="Not Found" className="w-32 h-32 mt-40" />
            <h1 className="mt-5 text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600">Product Not Found or Page is Broken</p>

            <Link to="/products" className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
                Explore Our Products
            </Link>
            <Link to="/contact" className="mt-1 hover:underline transition">
                Contact Us
            </Link>
            
        </div>
    )
}

export default NotFound