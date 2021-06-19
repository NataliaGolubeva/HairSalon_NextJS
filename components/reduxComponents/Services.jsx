import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/basket";
import { getProducts } from "../../redux/service";
import { useEffect } from "react";

export default function Services({ product: { id, title, price } }) {
  const basket = useSelector((store) => store.basketState.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div>{title}</div>
      <div>{price}</div>

      <button onClick={() => dispatch(addItem(id))}>add to basket</button>
    </>
  );
}
