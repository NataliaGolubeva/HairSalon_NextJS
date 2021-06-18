import { useSelector } from "react-redux";
import Service from "./reduxComponents/Services";
import Basket from "./reduxComponents/Basket";

export default function ReduxServiceList() {
  const products = useSelector((store) => store.productsState.products);
  return (
    <>
      <Basket />
      <div>
        {products.map((product) => (
          <Service key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
