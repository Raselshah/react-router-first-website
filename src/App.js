import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import ShowMeal from "./Components/ShowMeal/ShowMeal";
import ShowCardDetails from "./ShowCardDetails/ShowCardDetails";

function App() {
  return ( 
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/showMeal" element={<ShowMeal />} />
        <Route path="/coin-details/:id" element={<ShowCardDetails />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
