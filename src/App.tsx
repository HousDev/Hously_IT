import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/About/page';
import ServicesPage from './pages/services/page';
import ContactSection from './pages/Contact/page';
import TestimonialPage from './pages/Testinomial/page';
import CaseStudyApp from './pages/CaseStudy/page';
import HouslyCareerPage from './pages/Career/page';
import CareersPage from './pages/Career/job/page';
import JobDetailsPage from './pages/Career/job/[id]/page';
import JobApplicationPage from './pages/Career/job/[id]/apply/page';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <LoadingScreen />
        </div>
      ) : (
        <div className="relative min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/testimonial" element={<TestimonialPage />} />
              <Route path="/casestudy" element={<CaseStudyApp />} />
              <Route path="/career" element={<HouslyCareerPage />} />
              <Route path="/career/job" element={<CareersPage />} />
              <Route path="/career/job/:id" element={<JobDetailsPage />} />
              <Route path="/career/job/:id/apply" element={<JobApplicationPage />} />
            </Routes>
          </main>

          <Footer />
          <BackToTop />
        </div>
      )}
    </Router>
  );
}

export default App;
