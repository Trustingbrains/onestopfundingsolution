/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import LoansPage from './pages/LoansPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-gold selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
