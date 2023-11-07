import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";
import "./App.css";
import store from "./redux/store";
import PageNotFound from "./page/PageNotFound";
import Home from "./page/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
