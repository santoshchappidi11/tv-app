import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SinglePage from "./components/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
