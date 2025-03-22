import { Routes, Route,  Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import SearchCountry from "./pages/SearchCountry";
import Header from './components/Header/Header';


export const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:id" element={<Country />} />
      <Route path="/search" element={<SearchCountry />} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
  );
};
