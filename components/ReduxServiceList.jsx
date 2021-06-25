import { useSelector } from "react-redux";
import Services from "./reduxComponents/Services";
import Basket from "./reduxComponents/Basket";
import { useEffect } from "react";
import Date from "./DatePicker";
export default function ReduxServiceList() {
  const products = useSelector((store) => store.productsState.products);

  return (
    <div className="bookingBasket">
      <div>
        <h2>Services</h2>
        {products.length > 0 &&
          products.map((product) => (
            <Services key={product.id} product={product} />
          ))}
      </div>
      <Basket />
      <Date />
    </div>
  );
}
