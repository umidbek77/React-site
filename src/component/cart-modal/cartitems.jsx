import React, { useContext } from 'react'
import { Icons } from '../../assets/icons';
import { UseMainContext } from '../../context/useMainContext';

const CartItems = ({ title, price, image, quantity, id }) => {
    const { cartItems, removeFromCart, addOne, removeOne } = useContext(UseMainContext)
    let totalPrice = 0
    for (const key of cartItems) {
        totalPrice = totalPrice + (key.price * key.quantity)
    }
    return (
        <div className="flex items-start gap-3  w-full border border-dark-200 relative">
            <div className="w-[136px] h-[120px]">
                <img src={image} className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col gap-y-8 justify-between">
                <div className="flex flex-col ">
                    <h2 className="text-base font-normal text-dark-300">{title}</h2>
                    <p className="text-base font-normal text-dark-300">+ Подарок: <span className="text-primary underline cursor-pointer">“Приложение к замкам Golden Service”</span></p>
                </div>

                <div className="flex gap-x-2">
                    <button disabled={quantity == 1} onClick={() => removeOne(id)} className="p-1 text-dark-300 disabled:text-dark-100">-</button>
                    <span className="block py-1 px-6 border border-gray text-base font-normal text-dark-300">{quantity}</span>
                    <button onClick={() => addOne(id)} className="p-1  text-dark-300 disabled:text-dark-100">+</button>
                </div>
            </div>

            { <button className="absolute top-2 right-2" onClick={() => removeFromCart(id)}><Icons.deleteIcon /> </button> }
            <p className="absolute bottom-2 right-2 font-normal text-base ">{(price * quantity).toLocaleString()} $</p>
        </div>
    );
};

export default CartItems