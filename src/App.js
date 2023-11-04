import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateForm from "./page/CreateForm";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <CreateForm
                text="Create Job"
                gradientColors={["#1a5276", "#733d90"]}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
