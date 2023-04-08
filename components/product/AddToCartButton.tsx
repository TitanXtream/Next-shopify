import React, { useState, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import { CartState, CheckoutType } from "lib/useCart";
import { ProductContext } from "pages/products/[handle]";
import CartDrawer from "components/product/CartDrawer";
import { Variant } from "lib/graphql/product/getProductByHandle";

type Props = {
  cartState: CartState;
  checkout: CheckoutType;
};

const AddToCartButton: React.FC<Props> = ({ cartState, checkout }) => {
  const { product, variant } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = async () => {
    setLoading(true);
    const quantity = 1;
    await checkout.addItem(
      ((variant as Variant) ?? product.variants[0]).id,
      quantity
    );
    setLoading(false);
    setIsOpen(true);
  };

  return (
    <>
      {loading ? (
        <button className="border border-gray-400 font-semibold inline-block text-gray-700 rounded-sm px-4 py-3 text-sm w-full pointer-events-none">
          <CircularProgress
            classes={{ svg: "font-bold text-gray-400" }}
            size="1.25rem"
            thickness={6}
          />
        </button>
      ) : (
        <button
          className="border border-gray-900 font-semibold inline-block text-gray-700 rounded-sm px-4 py-3 text-sm w-full"
          onClick={onClickHandler}
        >
          add to cart
        </button>
      )}
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} cartState={cartState} />
    </>
  );
};

export default AddToCartButton;
