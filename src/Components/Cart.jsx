import CartContents from "./CartContents"

function Cart({ prop }) {
    return (
        <div className={`bg-white border border-red-500 h-[100vh] xm:w-[50px] sm:w-[10rem] md:w-[22rem] lg:w-[25rem] transform transition-transform duration-300 flex flex-col fixed z-50 top-0 right-0 ${prop.isCart ? "translate-x-0" : "translate-x-full"}`}>
            <div className="border border-red-400 flex justify-end">
                <button onClick={prop.toggleCart} className="p-2 border border-red-400 bg-gray-200">
                    <ion-icon name="close"></ion-icon >
                </button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {/* component for cart contents */}
                <CartContents />
            </div>

            {/* checkout button fixed at the bottom */}
            <div className="p-4 bg-white sticky bottom-0">
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Checkout</button>
                <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center"> 
                    Shipping taxes and discount codes calculated at checkout
                </p>
            </div>
        </div>
    )
}

export default Cart
