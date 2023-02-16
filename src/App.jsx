import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import Purchases from "./pages/Purchases";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
