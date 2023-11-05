import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";
import "./App.css";
// import CreateForm from "./page/CreateForm";
import store from "./redux/store";
import PageNotFound from "./page/PageNotFound";
import Home from "./page/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
