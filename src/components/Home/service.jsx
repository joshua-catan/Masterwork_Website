import { ShieldCheck, Truck, Headphones } from 'lucide-react'

function Service() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-5 justify-center items-center bg-white border-t border-gray-200 shadow-lg z-50">

            <div className="flex items-center justify-center gap-3">
                <Truck className="text-gray-700 shrink-0" size={30} />
                <div>
                    <p className="text-sm font-bold text-gray-800">Delivery</p>
                    <p className="text-xs text-gray-500">Convenient</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <ShieldCheck className="text-gray-700 shrink-0" size={30} />
                <div>
                    <p className="text-sm font-bold text-gray-800">Quality</p>
                    <p className="text-xs text-gray-500">Trusted products</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <Headphones className="text-gray-700 shrink-0" size={30} />
                <div>
                    <p className="text-sm font-bold text-gray-800">Support</p>
                    <p className="text-xs text-gray-500">Customer care</p>
                </div>
            </div>
        </div>
    )
}

export default Service