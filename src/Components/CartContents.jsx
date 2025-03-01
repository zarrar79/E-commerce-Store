import React from 'react'

const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "jeans",
            size: "M",
            color: "blue",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=2",
        },
        {
            productId: 3,
            name: "T-shirt",
            size: "M",
            color: "red",
            quantity: 1,
            price: 35,
            image: "https://picsum.photos/200?random=3",
        },
    ]

    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className='flex items-start justify-between py-4 border-b'>
                    <div className='flex items-start'>
                        <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded' />
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>size: {product.size} | color: {product.color}</p>
                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-medium">$ {product.price}</p>
                        <button><ion-icon className="text-red-600" name="trash"></ion-icon></button>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default CartContents
