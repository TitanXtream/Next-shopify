import React, { useContext } from "react";
import { CartContext } from "pages/cart";
import CartItemRow from "components/cart/CartItemRow";

const CartItemTable = () => {
  const { cartState } = useContext(CartContext);

  return (
    <table>
      <thead>
        <tr className="border-gray-200 border-b">
          <th className="font-normal px-6 py-8 pl-0 text-gray-600 text-left text-sm w-3/6">
            Product name
          </th>
          <th className="font-normal px-6 py-8 text-gray-600 text-right text-sm w-1/6">
            price
          </th>
          <th className="font-normal md:table-cell hidden px-6 py-8 text-gray-600 text-right text-sm w-1/6">
            quantity
          </th>
          <th className="font-normal md:table-cell hidden px-6 py-8 pr-0 text-gray-600 text-right text-sm w-1/6">
            total amount
          </th>
        </tr>
      </thead>
      <tbody>
        {cartState.value.lineItems.map((item) => (
          <CartItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default CartItemTable;
