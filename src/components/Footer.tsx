import React from 'react';
import logo from '../assets/images/hously-logo.png';

const Footer: React.FC = () => {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* MAIN FOOTER */}
      <div className="w-full bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-900">
        <div className="relative z-10 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* MAIN ROW */}
            <div className="flex flex-col lg:flex-row gap-10">

              {/* LEFT COLUMN */}
              <div className="lg:w-1/2 animate-slideInUp">
                <img
                  src={logo}
                  alt="Hously Logo"
                  className="h-16 sm:h-20 lg:h-24 mb-6"
                />

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Leading provider of comprehensive IT solutions including web
                  development, AI integration, cloud services, and digital
                  transformation for businesses worldwide.
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-3 mb-8">
                  {['facebook-f', 'twitter', 'linkedin-in', 'instagram', 'youtube'].map(
                    (icon) => (
                      <a
                        key={icon}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition"
                      >
                        <i className={`fab fa-${icon}`} />
                      </a>
                    )
                  )}
                </div>

                {/* CONTACT */}
                <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                  <div className="flex gap-3">
                    <i className="fas fa-map-marker-alt text-blue-400 mt-1" />
                    <p>
                      Rahatani Rd, Madhuban Colony,<br />
                      Pimpri-Chinchwad
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <i className="fas fa-phone text-blue-400" />
                    <a href="tel:+11234567890">+1 (123) 456-7890</a>
                  </div>

                  <div className="flex gap-3">
                    <i className="fas fa-envelope text-blue-400" />
                    <a href="mailto:info@hously.com">info@hously.com</a>
                  </div>
                </div>

                {/* NEWSLETTER */}
                <div className="mt-8">
                  <p className="text-gray-300 mb-3">Subscribe to our newsletter</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                      <i className="fas fa-arrow-right text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (🔥 MOBILE = 2 COLUMNS) */}
              <div
                className="lg:w-1/2 animate-slideInUp"
                style={{ animationDelay: '300ms' }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">

                  {/* USEFUL LINKS */}
                  <div>
                    <h3 className="footer-title">Useful Links</h3>
                    <ul className="footer-links">
                      {['Home', 'Services', 'About Us', 'Contact', 'Career'].map(
                        (item) => (
                          <li key={item}><a href="#">{item}</a></li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* COMPANY */}
                  <div>
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-links">
                      {['Our Team', 'Careers', 'Partners', 'Press'].map((item) => (
                        <li key={item}><a href="#">{item}</a></li>
                      ))}
                    </ul>
                  </div>

                  {/* SERVICES */}
                  <div>
                    <h3 className="footer-title">Services</h3>
                    <ul className="footer-links">
                      {[
                        'Web Development',
                        'AI & Chatbot',
                        'Cloud & DevOps',
                        'IT Consulting',
                      ].map((item) => (
                        <li key={item}><a href="#">{item}</a></li>
                      ))}
                    </ul>
                  </div>

                  {/* RESOURCES (HIDE ON SMALL MOBILE) */}
                  <div className="hidden md:block">
                    <h3 className="footer-title">Resources</h3>
                    <ul className="footer-links">
                      {['Blog', 'Case Studies', 'FAQ', 'Docs'].map((item) => (
                        <li key={item}><a href="#">{item}</a></li>
                      ))}
                    </ul>
                  </div>

                  {/* LEGAL */}
                  <div className="hidden md:block">
                    <h3 className="footer-title">Legal</h3>
                    <ul className="footer-links">
                      {['Privacy Policy', 'Terms', 'Cookie Policy'].map(
                        (item) => (
                          <li key={item}><a href="#">{item}</a></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <footer className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Hously Finntech Realty. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs sm:text-sm">
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ANIMATION + UTIL CLASSES */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease forwards;
        }
        .footer-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
        }
        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 40px;
          height: 2px;
          background: #facc15;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #d1d5db;
          font-size: 0.95rem;
          transition: all 0.3s;
        }
        .footer-links a:hover {
          color: white;
          transform: translateX(6px);
        }
      `}</style>
    </>
  );
};

export default Footer;
