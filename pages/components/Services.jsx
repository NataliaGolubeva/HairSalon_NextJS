import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/basket";
import { productAction } from "../redux/service";

export default function Services({ product: { id, name, price, quantity } }) {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basketState.basket);
  const [loading, setLoading] = useState(true);
  const [serviceList, setServiceList] = useState([]);
  const [haircut, setHaircut] = useState([]);
  const [style, setStyle] = useState([]);
  const [color, setColor] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [keratin, setKeratin] = useState([]);

  useEffect(() => {
    axios(`https://wdev2.be/natalia21/eindwerk/api/service_lists.json?page=1`)
      .then((response) => {
        setServiceList(response.data);
        console.log(response.data);
        setHaircut(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/1"
          )
        );
        setStyle(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/2"
          )
        );
        setColor(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/3"
          )
        );
        setTreatments(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/4"
          )
        );
        setKeratin(
          response.data.filter(
            (item) => item.category === "/natalia21/eindwerk/api/categories/5"
          )
        );
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
    dispatch(productAction(response.data));
  }, []);
  return (
    <>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
      <button
        disabled={
          basket[basket.findIndex((item) => item.id === id)]?.quantity ===
          quantity
        }
        onClick={() => dispatch(addItem(id))}
      >
        add to basket
      </button>
    </>
  );
}
