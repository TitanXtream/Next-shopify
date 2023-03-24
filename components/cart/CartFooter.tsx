import React, { useContext } from "react";
import { CartContext } from "pages/cart";

const CartFooter: React.FC = () => {
  const { cartState } = useContext(CartContext);
  return (
    <div className="mt-12 text-center md:text-right">
      <div>
        <span>Subtotal</span>
        <span className="ml-2">
          ₹{Number(cartState.value.subtotalPrice).toLocaleString("en-IN")}{" "}
          Rupees
        </span>
      </div>
      <div className="mt-3">
        Taxes and shipping charges are calculated during checkout
      </div>
      <div className="max-w-xs mx-auto md:mr-0">
        <a
          href={cartState.value.webUrl}
          className="bg-gray-700 flex-grow inline-block mt-12 px-4 py-3 text-sm text-white w-full md:w-auto"
        >
          To purchase procedure
        </a>
      </div>
    </div>
  );
};

export default CartFooter;
