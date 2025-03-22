import { Routes, Route,  Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import SearchCountry from "./pages/SearchCountry";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:id" element={<Country />} />
      <Route path="/search" element={<SearchCountry />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
