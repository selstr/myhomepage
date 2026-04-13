import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Architects from './pages/Architects'
import ArchitectureNews from './pages/ArchitectureNews'
import GoodArchitecture from './pages/GoodArchitecture'
import Amorepacific from './pages/Amorepacific'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/architects" element={<Architects />} />
          <Route path="/architecture-news" element={<ArchitectureNews />} />
          <Route path="/good-architecture" element={<GoodArchitecture />} />
          <Route path="/amorepacific" element={<Amorepacific />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

