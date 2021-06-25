import { ImBin } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clear } from "../../redux/basket";
import { setQuantity } from "../../redux/basket";
export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basketState.basket);
  const products = useSelector((store) => store.productsState.products);
  const totalPrice = useSelector((store) => {
    return store.basketState.basket.reduce((acc, item) => {
      const index = products.findIndex((pr) => pr.id === item.id);
      return acc + item.quantity * products[index].price;
    }, 0);
  });
  return (
    <div className="basket">
      <h2>Basket</h2>
      {basket.length > 0 ? (
        <div>
          <table>
            {basket.map(({ id, quantity }) => {
              const index = products.findIndex((s) => s.id === id);
              return (
                <tr key={id}>
                  <th>{products[index].title}</th>
                  <th>
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      max={products[index].quantity}
                      onChange={(e) => {
                        const payload = {
                          id,
                          quantity: parseInt(e),
                        };
                        dispatch(setQuantity(payload));
                      }}
                    ></input>
                  </th>
                  <th>
                    {" "}
                    &euro;&nbsp;{(products[index].price * quantity).toFixed(2)}
                  </th>
                  <button onClick={() => dispatch(removeItem(id))}>
                    <ImBin />
                  </button>
                </tr>
              );
            })}
            <tr>
              <th>Total: &euro;&nbsp;{totalPrice.toFixed(2)}</th>
            </tr>
          </table>
        </div>
      ) : (
        <p>No items in the basket</p>
      )}
    </div>
  );
}
