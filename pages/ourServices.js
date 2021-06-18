import ServiceList from "../components/ServiceList";
import { Provider } from "react-redux";
import store from "../redux/store";
import List from "../components/ReduxServiceList";
export default function services() {
  return (
    <Provider store={store}>
      <div className="servicePage">
        <h1 className="mainTitle">Our services</h1>

        <List />
      </div>
    </Provider>
  );
}
