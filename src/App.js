import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import About from "./components/About";
import HeroDetails from "./components/HeroDetails.jsx";
import Home from "./components/Home";

import Footer from "./components/Footer";

import Loogo from'./components/Images/marvel.jpg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <img src={Loogo} style={{ width: '100%',  height: '170px'}}/>

      <Navbar logo={<Logo text={""} />}>
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"About"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
      < Footer />
    </Router>
  );
}

export default App;