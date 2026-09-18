import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import UseCases from './pages/UseCases';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Support from './pages/Support';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hoe-werkt-tappy" element={<HowItWorks />} />
          <Route path="prijzen" element={<Pricing />} />
          <Route path="toepassingen" element={<UseCases />} />
          <Route path="over-tappy" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Legal type="privacy" />} />
          <Route path="cookies" element={<Legal type="cookies" />} />
          <Route path="voorwaarden" element={<Legal type="terms" />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}
