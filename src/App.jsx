import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import SearchCountry from "./pages/SearchCountry";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
      <Route path="/searchcountry" element={<SearchCountry />} />
    </Routes>
  );
};
