import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Portfolio } from './components/Portfolio'
import { About } from './components/About'
import { Notfound } from './components/Notfound'
import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
