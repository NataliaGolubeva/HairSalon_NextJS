import { useSelector } from "react-redux";
import Service from "./components/Services";
import Basket from "./components/Basket";

export default function List() {
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
