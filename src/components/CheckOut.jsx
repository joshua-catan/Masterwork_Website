import { useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import { Guitar, Bass, Keyboard, Drums } from "../data/categoryItems";
import { ShoppingCart } from "lucide-react";
import { ShieldCheck, Truck, Headphones } from 'lucide-react'

function CheckOut() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isAlert, setIsAlert] = useState(false);

    const { id, category } = useParams();

    const categories = {
        guitar: Guitar,
        bass: Bass,
        keyboard: Keyboard,
        drums: Drums
    };

    const products = categories[category];

    const product = products.find(
        product => product.id === Number(id)
    );

    const fillStyle = "w-full border text-sm border-gray-300 bg-gray-100 p-2 rounded"

    return (
        <> 
            <div className="flex flex-col bg-gray-100 p-5 min-h-screen w-full">

                <div className="flex flex-col md:flex-row w-full mx-auto max-w-5xl items-stretch justify-center rounded bg-white gap-4 p-5">

                    {product && (
                        <div className="w-full md:flex-1 md:basis-0 min-w-0 flex flex-col items-center bg-gray-100 overflow-hidden justify-center border border-gray-300 rounded shadow-md">
                            <div className="bg-gray-800 rounded">
                                <h1 className="top-5 left-5 text-xl font-bold tracking-widest p-4 uppercase text-white">Complete Your Order</h1>
                                <p className="top-5 left-5 text-xs font-semibold tracking-widest p-4 -mt-8 mb-3 text-gray-400">Quality musical instrument from Masterwork Music. </p>
                                <img src={product.image} alt={product.name} className="w-full bg-white h-120 object-cover"/>
                            </div>

                            <div className="p-5">
                                <p className="text-gray-700 font-semibold -mt-1 text-sm">Selected Product</p>
                                <h2 className="text-xl font-bold">{product.name}</h2>
                                <p className="text-lg font-semibold">{product.price}</p>
                            </div>
                        </div>
                    )}

                    <div className="w-full md:flex-1 md:basis-0 min-w-0 flex flex-col min-h-600px items-center justify-center bg-gray-800 overflow-hidden border border-gray-300 rounded shadow-md gap-4 p-5">

                        <div className="w-full flex-col justify-baseline">
                            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-gray-300">
                                Masterwork Music
                            </p>
                            <h1 className="text-lg font-bold border-t border-gray-100 text-white md:text-4xl">
                                Customer Information
                            </h1>
                            <p className="text-gray-400 -mt-1 text-sm">
                                Please provide your information below.
                            </p>
                        </div>
                        
                        <div className="flex items-center w-full border-t border-gray-100 flex-col gap-5 mt-5">
                            
                            <div className='w-full'>
                                <label className="text-sm font-bold text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input className={fillStyle}
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='w-full'>
                                <label className="text-sm font-bold text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input className={fillStyle}
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='w-full'>
                                <label className="text-sm font-bold text-gray-300 mb-2">
                                    Delivery Address
                                </label>
                                <input className={fillStyle}
                                type="text"
                                placeholder="Enter your complete address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-1 w-full border-t border-b border-gray-100 justify-center items-center z-50">

                                <div className="flex items-center justify-center gap-3">
                                    <Truck className="text-gray-300 shrink-0" size={30} />
                                    <div>
                                        <p className="text-sm font-bold text-gray-200">Delivery</p>
                                        <p className="text-xs text-gray-500">Convenient</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-3">
                                    <ShieldCheck className="text-gray-300 shrink-0" size={30} />
                                    <div>
                                        <p className="text-sm font-bold text-gray-200">Quality</p>
                                        <p className="text-xs text-gray-500">Trusted products</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-3">
                                    <Headphones className="text-gray-300 shrink-0" size={30} />
                                    <div>
                                        <p className="text-sm font-bold text-gray-200">Support</p>
                                        <p className="text-xs text-gray-500">Customer care</p>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => name && email && address ? setSubmitted(true) : setIsAlert(true)} className="flex items-center mt-5 max-w-45 justify-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-500 hover:text-white hover:scale-101 transition duration-300">
                                < ShoppingCart /> Place Order
                            </button>

                            <Link to="/products" className="mb-8 inline-block border border-gray-400 p-2 rounded-md -mt-1 text-gray-100 hover:shadow-md hover:-translate-y-1 hover:scale-103 transition duration-300">
                                Continue Shopping
                            </Link>

                        </div>
                    </div>

                    {submitted && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10">
                            <div className="bg-white p-10 rounded shadow-xl text-center">

                                <h1 className="text-3xl font-bold text-gray-800">Thank You, {name}</h1>
                                <p className="mt-4 text-gray-600">Your order is on the way!</p>

                                <Link to="/products" className="mt-5 inline-block border border-gray-400 p-2 rounded text-gray-700 hover:shadow-md hover:-translate-x-1 hover:scale-103 transition duration-300">
                                    ⟵ Back
                                </Link>
                                
                            </div>
                        </div>
                    )} 

                    {isAlert && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-10">
                            <div className="bg-white p-8 rounded shadow-xl text-center">

                                <h2 className="text-2xl font-bold text-gray-800">Sorry, Missing Information</h2>
                                <p className="mt-3 text-gray-600">Please fill up all fields before buying.</p>

                                <button onClick={() => setIsAlert(false)} className="mt-5 bg-gray-800 text-white px-6 py-2 rounded hover:shadow-md hover:-translate-y-1 hover:scale-103 transition duration-300">
                                    Okay
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default CheckOut;