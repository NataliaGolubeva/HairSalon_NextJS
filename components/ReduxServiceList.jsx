import { useSelector } from "react-redux";
import Services from "./reduxComponents/Services";
import Basket from "./reduxComponents/Basket";
import { useEffect } from "react";
export default function ReduxServiceList() {
  const products = useSelector((store) => store.productsState.products);

  return (
    <>
      <Basket />
      <div>
        {products.length > 0 &&
          products.map((product) => (
            <Services key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
