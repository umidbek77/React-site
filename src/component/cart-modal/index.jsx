import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { UseMainContext } from "../../context/useMainContext";
import { Icons } from "../../assets/icons";
import CartItems from "./cartitems";

export function CartModal({ open, handleModal }) {
  const { cartItems } = useContext(UseMainContext)
  let totalPrice = 0
  for(const key of cartItems) {
    totalPrice = totalPrice + (key.price * key.quantity)
  }
  return (
    <>
      <Dialog open={open} handler={handleModal}>
        <DialogHeader>Корзина</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4 h-[400px] overflow-y-auto">
            {
              cartItems.map(el => (
               <CartItems key={el.id} {...el}/>
              ))
            }
          </div>
        </DialogBody>
        <DialogFooter className="flex items-end justify-between">
            <h2 className="text-base font-normal text-dark-300">Итого: <span className="font-bold text-dark-300">{(totalPrice.toLocaleString())} $</span></h2>
        </DialogFooter>
      </Dialog>
    </>
  );
}