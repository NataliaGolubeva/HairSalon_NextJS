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
    <div className="redService">
      <div>{title}</div>
      <div className="price">{price} €</div>
      <button className="btnAdd" onClick={() => dispatch(addItem(id))}>
        ADD
      </button>
    </div>
  );
}
