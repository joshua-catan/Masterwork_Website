import { useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import { Guitar, Bass, Keyboard, Drums } from "../data/categoryItems";
import { ShoppingCart } from "lucide-react";

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

    const fillStyle = "w-full border border-gray-300 bg-gray-100 p-2 rounded"

    return (
        <> 
            <div className="flex flex-col bg-gray-100 p-5 min-h-screen w-full">
                <div className="flex flex-col md:flex-row w-full mx-auto max-w-5xl items-stretch justify-center rounded bg-white mt-8 gap-4 p-5">

                    {product && (
                        <div className="w-full md:flex-1 md:basis-0 min-w-0 flex flex-col items-center bg-gray-100 overflow-hidden justify-center border border-gray-300 rounded shadow-md">
                            <img src={product.image} alt={product.name} className="w-full bg-white h-120 object-cover"/>

                            <div className="p-5">
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

                            <h1 className="text-lg font-bold text-white md:text-4xl">
                                | Check out
                            </h1>
                        </div>
                        
                        <div className="flex items-center w-full flex-col gap-5 mt-5">
                            
                            <input className={fillStyle}
                            type="text"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            
                            <input className={fillStyle}
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <input className={fillStyle}
                            type="text"
                            placeholder="Enter your Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            />

                            <button onClick={() => name && email && address ? setSubmitted(true) : setIsAlert(true)} className="flex items-center mt-5 max-w-45 justify-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded hover:bg-gray-500 hover:text-white hover:scale-101 transition duration-300">
                                < ShoppingCart /> Place Order
                            </button>

                            <Link to="/products" className="mb-8 inline-block bg-gray-700 max-w-20 border border-gray-400 p-2 rounded text-white hover:shadow-md hover:bg-gray-900 transition">
                                ⟵ Back
                            </Link>

                        </div>
                    </div>

                    {submitted && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10">
                            <div className="bg-white p-10 rounded shadow-xl text-center">

                                <h1 className="text-3xl font-bold text-gray-800">Thank You, {name}</h1>
                                <p className="mt-4 text-gray-600">Your order is on the way!</p>

                                <Link to="/products" className="mt-5 inline-block border border-gray-400 p-2 rounded text-gray-700 hover:shadow-md transition">
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

                                <button onClick={() => setIsAlert(false)} className="mt-5 bg-gray-800 text-white px-6 py-2 rounded">
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