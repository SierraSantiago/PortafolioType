//RouterR.tsx
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";



export const RouterR = () => {
    return (
        <Router>
            <Menu/>
            <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta para Home */}
            <Route path="/about" element={<About />} /> {/* Ruta para About */}
            <Route path="/projects" element={<Projects />} /> {/* Ruta para Projects */}
            <Route path="/hobbies" element={<Hobbies />} /> {/* Ruta para Hobbies */}
            </Routes>
        </Router>
    )
}