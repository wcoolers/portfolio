
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
  );
}

export default App;
