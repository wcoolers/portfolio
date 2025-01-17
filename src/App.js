import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Portfolio } from './components/Portfolio'
import { LegacyPortfolio } from './components/LegacyPortfolio'
import { About } from './components/About'
import { Notfound } from './components/Notfound'
import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Certificate } from "./components/Certificate"


function App() {
    return (
        <div style={{fontFamily: "Roboto, sans-serif"}}>
            <Header />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/legacyPortfolio" element={<LegacyPortfolio />} />
                <Route path="/showcasecert.png" element={ <Certificate />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
