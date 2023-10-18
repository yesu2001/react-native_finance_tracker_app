import { Provider } from "react-redux";
import { store } from "./reducers/store";
import Main from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
