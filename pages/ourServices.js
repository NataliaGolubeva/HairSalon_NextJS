import ServiceList from "../components/ServiceList";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import ReduxServiceList from "../components/ReduxServiceList";
import { PersistGate } from "redux-persist/lib/integration/react";
export default function services() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="servicePage">
          <h1 className="mainTitle">Book an appointment</h1>

          <ReduxServiceList />
        </div>
      </PersistGate>
    </Provider>
  );
}
