import React from "react";
import Image from "next/image";
import { Product } from "lib/graphql/collection/getCollectionWithProducts";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const price = product.priceMin;
  const priceVaries = !(product.priceMax === product.priceMin);

  return (
    <div className="product-card bg-gray-100">
      <div className="product-card__inner flex flex-col justify-between h-full">
        <figure
          className="product-card__image flex items-center justify-center h-full p-1"
          style={{ margin: 0 }}
        >
          <a href={`/products/${product.handle}`}>
            <Image
              alt="Product"
              priority
              src={product.images[0]?.originalSrc}
              height={400}
              width={400}
            />
          </a>
        </figure>
        <div
          className="product-card__info mt-2 p-2"
          style={{ textAlign: "left" }}
        >
          <div className="product-card__title font-semibold text-sm md:text-base">
            {product.title}
          </div>
          <div className="product-card__price  font-semibold text-sm">
            ₹{price} {priceVaries && "from"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
