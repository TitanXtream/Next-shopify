import React, { useContext } from "react";
import Image from "next/image";
import { CheckoutLineItem, LineItem } from "shopify-buy";
import { CartContext } from "pages/cart";
import { QuantityInput } from "components/cart/QuantityInput";

type Props = {
  item: CheckoutLineItem;
};

const CartItemRow: React.FC<Props> = ({ item }) => {
  const { cartState, checkout } = useContext(CartContext);
  console.log(item);

  const { quantity, title, variant } = item;
  const price = Number(item.variant.price.amount);

  const subtotal = price * quantity;
  const imgSrc = variant.image.src;

  const onClickHandler = async (variantId: string) => {
    await checkout.removeItem(variantId).catch((err) => {
      console.error(err);
      alert("Delete failed");
    });
  };

  return (
    <tr className="border-gray-200 border-b">
      <td className="py-5 text-left w-4/6">
        <div className="flex">
          <figure className="flex-grow-0 flex-shrink-0 pr-6 md:pr-12 w-20 md:w-36">
            <a
              href={`/products/${variant.product.handle}?variant=${variant.id}`}
            >
              <Image
                alt={variant.product.title}
                priority
                src={imgSrc}
                height={150}
                width={150}
              />
            </a>
          </figure>
          <div>
            <div className="font-semibold text-gray-700 text-sm hover:underline">
              <a
                href={`/products/${variant.product.handle}?variant=${variant.id}`}
              >
                {title}
              </a>
            </div>
            <div className="mt-3">
              {item.variant.selectedOptions.map((opt, idx) => (
                <div className="text-gray-700 text-sm" key={idx}>
                  <span>{opt.name}:</span>
                  <span>{opt.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <button
                onClick={() => onClickHandler(item.id as string)}
                className="border-b border-gray-600 text-gray-700 text-sm"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="align-top md:align-middle p-5 text-right text-gray-700 md:w-1/6 w-2/6">
        <div className="text-sm">₹{price.toLocaleString("en-IN")}</div>
        <div className="md:hidden mt-3">
          <label className="inline-block mt-auto mb-auto mr-2 my-auto text-xs">
            quantity
          </label>
          <QuantityInput id={item.id as string} quantity={quantity} />
        </div>
      </td>
      <td className="md:table-cell hidden p-5 text-gray-700 text-right w-1/6">
        <QuantityInput id={item.id as string} quantity={quantity} />
      </td>
      <td className="md:table-cell hidden p-5 pr-0 text-gray-700 text-right w-1/6">
        ₹{subtotal.toLocaleString("en-IN")}
      </td>
    </tr>
  );
};

export default CartItemRow;
