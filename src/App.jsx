import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
