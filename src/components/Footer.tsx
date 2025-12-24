import React from 'react';
import logo from '../assets/images/hously-logo.png';

const Footer: React.FC = () => {
  return (
    <>
      {/* Add Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Desktop Footer (hidden on mobile) */}
      <div className="hidden lg:block">
        {/* Footer Widget Area */}
        <div className="relative overflow-hidden max-w-[1820px] mx-auto ">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90" />

          {/* Content */}
          <div className="relative z-10 pt-[20px] pb-[20px] px-6">
            <div className="container mx-auto max-w-[1488px]">
              <div className="flex flex-wrap justify-between -mx-3">
                
                {/* Column 1: Company Info */}
                <div className="w-full md:w-auto px-3 pl-[20px] mb-10 md:mb-0 animate-slideInUp">
                  <div className="max-w-[283px]">
                    
                    {/* Logo */}
                    <div className="flex items-center mb-8">
                      <div className="flex items-center">
                        <img 
                          src={logo} 
                          alt="Hously Logo final" 
                          className="h-24 w-auto transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-gray-300 leading-relaxed mb-8"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      Leading provider of comprehensive IT solutions including web development, 
                      AI integration, cloud services, and digital transformation for businesses worldwide.
                    </p>

                    {/* Social Links - White only */}
                    <div className="flex gap-3">
                      {['facebook-f', 'twitter', 'linkedin-in', 'instagram','youtube'].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                          title={`Follow us on ${platform}`}
                        >
                          <i className={`fab fa-${platform} text-base`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: Useful Links */}
                <div className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp" style={{ animationDelay: '270ms' }}>
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-600"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Useful Links
                  </h3>
                  <ul className="space-y-3">
                    {['Home', 'Services', 'About Us', 'Contact', 'Career'].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                          style={{ fontFamily: '"DM Sans", sans-serif' }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Company */}
                <div className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp" style={{ animationDelay: '540ms' }}>
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-600"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'About Company',
                      'Our Team',
                      'Careers',
                      'Partners',
                      'Press & Media',
                      'Investor Relations'
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                          style={{ fontFamily: '"DM Sans", sans-serif' }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Services */}
                <div className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp" style={{ animationDelay: '810ms' }}>
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-600"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Our Services
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Web Development',
                      'AI & Chatbot Development',
                      'Cloud & DevOps',
                      'Software Development',
                      'IT Consulting',
                      'Digital Transformation',
                      'Cybersecurity',
                      'Cloud Solutions'
                    ].map((service) => (
                      <li key={service}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                          style={{ fontFamily: '"DM Sans", sans-serif' }}
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 5: Contact/Download */}
                <div className="w-full md:w-auto px-3 animate-slideInUp" style={{ animationDelay: '1080ms' }}>
                  <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-yellow-600"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Contact Us
                  </h3>
                  
                  {/* Contact Info */}
                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <i className="fas fa-map-marker-alt text-blue-400 mt-1" />
                      <p className="text-gray-300" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                       Rahatani Rd, Madhuban Colony,<br />
                       Rahatani, Pimpri-Chinchwad
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <i className="fas fa-phone text-blue-400" />
                      <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-envelope text-blue-400" />
                      <a href="mailto:info@techsolutions.com" className="text-gray-300 hover:text-white transition-colors">
                        info@hously.com
                      </a>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="max-w-[250px]">
                    <p className="text-gray-300 mb-4 text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      Subscribe to our newsletter
                    </p>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <i className="fas fa-arrow-right text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer (visible only on mobile) - 2 Column Grid */}
      <div className="block lg:hidden">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-900">
          <div className="px-4 py-8">
            
            {/* Mobile Logo and Company Info */}
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src={logo} 
                  alt="Hously Logo final" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Leading provider of comprehensive IT solutions including web development, 
                AI integration, cloud services, and digital transformation.
              </p>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center gap-3 mb-8">
                {['facebook-f', 'twitter', 'linkedin-in', 'github'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <i className={`fab fa-${platform} text-sm`} />
                  </a>
                ))}
              </div>
            </div>

            {/* 2 Column Grid for Mobile */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              
              {/* Column 1: Useful Links */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  {['Home', 'Services', 'About Us', 'Contact', 'Career'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Company */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Company
                </h3>
                <ul className="space-y-2">
                  {[
                    'About Company',
                    'Our Team',
                    'Careers',
                    'Partners'
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Services */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {[
                    'Web Development',
                    'AI & Chatbot',
                    'Cloud & DevOps',
                    'Software Dev',
                    'IT Consulting',
                    'Cybersecurity'
                  ].map((service) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact Us */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-blue-500/50">
                  Contact Us
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <i className="fas fa-map-marker-alt text-blue-400 mt-1 text-xs" />
                    <p className="text-gray-300 text-xs">
                      Rahatani Rd, Madhuban Colony, Rahatani, Pimpri-Chinchwad
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-phone text-blue-400 text-xs" />
                    <a href="tel:+11234567890" className="text-gray-300 hover:text-white text-xs">
                      +1 (123) 456-7890
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-envelope text-blue-400 text-xs" />
                    <a href="mailto:info@hously.com" className="text-gray-300 hover:text-white text-xs">
                      info@hously.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Newsletter */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-bold mb-4">
                Newsletter
              </h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-4 text-white placeholder-gray-400 text-sm focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-arrow-right text-xs" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer - Both Desktop & Mobile */}
      <footer className="bg-gray-900 py-5">
        <div className="container mx-auto px-6 max-w-[1488px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
           <div
  className="text-gray-400 text-sm text-center md:text-left"
  style={{ fontFamily: '"DM Sans", sans-serif' }}
>
  © {new Date().getFullYear()} Hously Finntech Reality. All rights reserved.
</div>


            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            {/* <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Back to top
              </span>
              <i className="fas fa-arrow-up text-xs group-hover:translate-y-[-2px] transition-transform" />
            </button> */}
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Footer;





// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <>
//       {/* Background Image Section - Placed ABOVE the footer */}
//       <div className="relative w-full h-[400px] overflow-hidden">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80")',
//             // Or use your local image: 'url("/assets/images/footer_bg.webp")'
//           }}
//         />
        
//         {/* Optional overlay for better text contrast if you add content here */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
        
//         {/* You can add content on top of the background image if needed */}
//         {/* <div className="relative z-10 flex items-center justify-center h-full">
//           <h2 className="text-white text-4xl font-bold">Your Content Here</h2>
//         </div> */}
//       </div>

//       {/* Footer Widget Area - This is your actual footer component */}
//       <div className="bg-gray-900">
//         <div className="relative rounded-[50px] overflow-hidden max-w-[1820px] mx-auto -mt-[100px] mb-[120px] z-20">
//           {/* No background image here anymore - just solid/gradient background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/90 to-gray-900" />
          
//           {/* Content */}
//           <div className="relative z-10 pt-[120px] pb-[70px] px-6">
//             <div className="container mx-auto max-w-[1488px]">
//               <div className="flex flex-wrap justify-between -mx-3">
                
//                 {/* Column 1: Company Info */}
//                 <div className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp">
//                   <div className="max-w-[283px]">
//                     {/* Logo */}
//                     <div className="mb-8">
//                       <a href="/" className="inline-block">
//                         <div className="text-white text-3xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
//                           Tech<span className="text-purple-400">Solutions</span>
//                         </div>
//                       </a>
//                     </div>

//                     {/* Description */}
//                     <p className="text-gray-300 leading-relaxed mb-8" style={{ fontFamily: '"DM Sans", sans-serif' }}>
//                       Leading provider of comprehensive IT solutions including web development, 
//                       AI integration, cloud services, and digital transformation for businesses worldwide.
//                     </p>

//                     {/* Social Links */}
//                     <div className="flex gap-2">
//                       {['facebook-f', 'twitter', 'linkedin-in', 'github', 'dribbble'].map((platform) => (
//                         <a
//                           key={platform}
//                           href="#"
//                           className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-600 hover:text-white transition-all duration-300 border border-white/20"
//                         >
//                           <i className={`fab fa-${platform} text-sm`} />
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Column 2: Useful Links */}
//                 <div className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp" style={{ animationDelay: '270ms' }}>
//                   <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-purple-600"
//                     style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                   >
//                     Useful Links
//                   </h3>
//                   <ul className="space-y-4">
//                     {['Home', 'About Us', 'Services', 'Projects', 'Case Studies', 'Contact'].map((item) => (
//                       <li key={item}>
//                         <a
//                           href="#"
//                           className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
//                           style={{ fontFamily: '"DM Sans", sans-serif' }}
//                         >
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Column 3: Company */}
//                 <div className="w-full sm:w-auto px-3 mb-10 sm:mb-0 animate-slideInUp" style={{ animationDelay: '540ms' }}>
//                   <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-purple-600"
//                     style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                   >
//                     Company
//                   </h3>
//                   <ul className="space-y-4">
//                     {[
//                       'About Company',
//                       'Our Team',
//                       'Careers',
//                       'Partners',
//                       'Press & Media',
//                       'Investor Relations'
//                     ].map((item) => (
//                       <li key={item}>
//                         <a
//                           href="#"
//                           className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
//                           style={{ fontFamily: '"DM Sans", sans-serif' }}
//                         >
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Column 4: Services */}
//                 <div className="w-full md:w-auto px-3 mb-10 md:mb-0 animate-slideInUp" style={{ animationDelay: '810ms' }}>
//                   <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-purple-600"
//                     style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                   >
//                     Our Services
//                   </h3>
//                   <ul className="space-y-4">
//                     {[
//                       'Web Development',
//                       'AI & Chatbot Development',
//                       'Cloud & DevOps',
//                       'Software Development',
//                       'IT Consulting',
//                       'Digital Transformation',
//                       'Cybersecurity',
//                       'Cloud Solutions'
//                     ].map((service) => (
//                       <li key={service}>
//                         <a
//                           href="#"
//                           className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
//                           style={{ fontFamily: '"DM Sans", sans-serif' }}
//                         >
//                           {service}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Column 5: Contact/Download */}
//                 <div className="w-full md:w-auto px-3 animate-slideInUp" style={{ animationDelay: '1080ms' }}>
//                   <h3 className="text-white text-2xl font-bold mb-10 pb-4 relative after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-purple-600"
//                     style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                   >
//                     Contact Us
//                   </h3>
                  
//                   {/* Contact Info */}
//                   <div className="mb-8">
//                     <div className="flex items-start gap-3 mb-4">
//                       <i className="fas fa-map-marker-alt text-purple-400 mt-1" />
//                       <p className="text-gray-300" style={{ fontFamily: '"DM Sans", sans-serif' }}>
//                         123 Tech Street, Suite 500<br />
//                         San Francisco, CA 94107
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-3 mb-4">
//                       <i className="fas fa-phone text-purple-400" />
//                       <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">
//                         +1 (123) 456-7890
//                       </a>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <i className="fas fa-envelope text-purple-400" />
//                       <a href="mailto:info@techsolutions.com" className="text-gray-300 hover:text-white transition-colors">
//                         info@techsolutions.com
//                       </a>
//                     </div>
//                   </div>

//                   {/* Newsletter */}
//                   <div className="max-w-[250px]">
//                     <p className="text-gray-300 mb-4 text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
//                       Subscribe to our newsletter
//                     </p>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
//                       />
//                       <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
//                         <i className="fas fa-arrow-right text-sm" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <footer className="bg-gray-900 border-t border-gray-800 py-8">
//           <div className="container mx-auto px-6 max-w-[1488px]">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               {/* Copyright */}
//               <div className="text-gray-400 text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
//                 © 2025 TechSolutions. All rights reserved.
//               </div>

//               {/* Links */}
//               <div className="flex flex-wrap gap-6">
//                 {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link) => (
//                   <a
//                     key={link}
//                     href="#"
//                     className="text-gray-400 hover:text-white text-sm transition-colors"
//                     style={{ fontFamily: '"DM Sans", sans-serif' }}
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>

//               {/* Back to Top */}
//               <button
//                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
//               >
//                 <span className="text-sm" style={{ fontFamily: '"DM Sans", sans-serif' }}>
//                   Back to top
//                 </span>
//                 <i className="fas fa-arrow-up text-xs group-hover:translate-y-[-2px] transition-transform" />
//               </button>
//             </div>
//           </div>
//         </footer>
//       </div>

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-slideInUp {
//           animation: slideInUp 0.9s ease forwards;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Footer;