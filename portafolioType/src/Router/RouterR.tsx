import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";


export const RouterR = () => {
    return (
        <Router>
            <Menu/>
            <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta para Home */}
            <Route path="/about" element={<About />} /> {/* Ruta para About */}
            </Routes>
        </Router>
    )
}