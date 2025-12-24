// import  { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import logo from '../assets/images/hously-logo.png';
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isHomePage = location.pathname === '/';

//   const slides = [
//     {
//       title: "Transform Your Business with",
//       subtitle: "AI-Powered IT Solutions",
//       description: "Leverage cutting-edge artificial intelligence to automate processes and drive innovation.",
//       image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
//       bgGradient: "from-[#0076d8]/90 via-[#0076d8]/70 to-[#ffd801]/20"
//     },
//     {
//       title: "Elevate Your Digital Presence with",
//       subtitle: "Cloud Computing Services",
//       description: "Scalable, secure, and reliable cloud infrastructure for modern businesses.",
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
//       bgGradient: "from-[#ffd801]/80 via-[#0076d8]/60 to-[#0076d8]/90"
//     },
//     {
//       title: "Secure Your Future with",
//       subtitle: "Cybersecurity Solutions",
//       description: "Comprehensive protection against evolving digital threats and vulnerabilities.",
//       image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
//       bgGradient: "from-[#0076d8]/85 via-purple-900/60 to-[#ffd801]/30"
//     }
//   ];

//   useEffect(() => {
//     if (!isHomePage) return;
    
//     const timer = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 500);
//       setTimeout(() => {
//         setIsAnimating(false);
//       }, 1500);
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [slides.length, isHomePage]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const nextSlide = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 500);
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 1500);
//   };

//   const prevSlide = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     }, 500);
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 1500);
//   };

//   return (
//     <>
//       {/* Sidebar Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
//         isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         <div className="p-6">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="absolute top-6 right-6 bg-[#0c1e4a] text-white p-3 rounded-full hover:bg-[#0076d8] transition"
//           >
//             <X size={24} />
//           </button>

//           {/* Logo */}
//           <div className="mb-8">
//             <img src={logo} alt="Hously Logo" className="h-12 w-auto" />
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             Hously is a modern and innovative IT solutions company delivering reliable,
//             scalable, and secure digital services tailored to meet the evolving needs of
//             businesses across industries.
//           </p>

//           {/* Contact Details */}
//           <div className="mb-8">
//             <h3 className="text-[#0c1e4a] text-xl font-bold mb-6">Contact Details</h3>
            
//             <div className="space-y-4">
//               {/* Address */}
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <svg className="w-6 h-6 text-[#0076d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-700">Rahatani Rd, Madhuban Colony, Rahatani, Pimpri-Chinchwad, Maharashtra 411017</p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center space-x-4">
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <svg className="w-6 h-6 text-[#0076d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <p className="text-gray-700">+ 123 888 9900</p>
//               </div>

//               {/* Email */}
//               <div className="flex items-center space-x-4">
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <svg className="w-6 h-6 text-[#0076d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <p className="text-gray-700">info@hously.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Follow Us */}
//           <div>
//             <h3 className="text-[#0c1e4a] text-xl font-bold mb-6">Follow Us</h3>
//             <div className="flex space-x-3">
//               <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </a>
//               <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               </a>
//               <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </a>
//               <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navbar with Glass Morphism on Hero and Solid on Scroll */}
// {/* Navbar with Glass Morphism on Hero and Solid on Scroll */}
// <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
//   isScrolled ? 'bg-white shadow-lg' : isHomePage ? 'bg-transparent' : 'bg-white shadow-lg'
// }`}>
//   <div className={`max-w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
//     isScrolled || !isHomePage ? 'py-2' : 'pt-4 pb-2'
//   }`}>
//     <div className={`transition-all duration-300 ${
//       isScrolled || !isHomePage
//         ? 'px-4 py-3'  // Only padding when scrolled/solid
//         : 'bg-white/20 backdrop-blur-md border border-white/30 rounded-[1.5rem] shadow-2xl shadow-black/10 px-4 py-3 sm:py-2'
//     }`}>
//       <div className="flex justify-between items-center">
//         {/* Logo with improved visibility */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="Hously Logo"
//             className={`transition-all duration-300 ${
//               isScrolled || !isHomePage
//                 ? 'h-10 sm:h-12 w-auto pl-2 sm:pl-4'
//                 : 'h-11 sm:h-14 w-auto pl-3 sm:pl-6 filter drop-shadow-lg'
//             }`}
//             style={{
//               filter: isScrolled || !isHomePage
//                 ? 'none'
//                 : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.1) contrast(1.2)'
//             }}
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-12">
//           <Link to="/" className={`transition font-medium relative group ${
//             isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
//           }`}>
//             Home
//             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
//               isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
//             }`}></span>
//           </Link>
//           <Link to="/services" className={`transition font-medium relative group ${
//             isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
//           }`}>
//             Services
//             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
//               isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
//             }`}></span>
//           </Link>
//           <Link to="/about" className={`transition font-medium relative group ${
//             isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
//           }`}>
//             About
//             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
//               isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
//             }`}></span>
//           </Link>
//           <Link to="/contact" className={`transition font-medium relative group ${
//             isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
//           }`}>
//             Contact
//             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
//               isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
//             }`}></span>
//           </Link>
//           <Link to="/career" className={`transition font-medium relative group ${
//             isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
//           }`}>
//             Career
//             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
//               isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
//             }`}></span>
//           </Link>
//         </div>

//         {/* ... rest of the code remains the same ... */}

//               {/* Right Side */}
//               <div className="hidden lg:flex items-center space-x-4">
//                 <button className={`p-2.5 rounded-full transition hover:rotate-90 duration-300 ${
//                   isScrolled || !isHomePage
//                     ? 'hover:bg-gray-100 text-gray-700'
//                     : 'text-white hover:bg-white/30 backdrop-blur-sm'
//                 }`}>
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </button>
                
//                 <button className="bg-[#0076d8] hover:bg-[#0066c0] text-white px-7 py-2.5 rounded-full transition font-semibold shadow-lg shadow-[#0076d8]/30 flex items-center space-x-2 hover:shadow-xl hover:shadow-[#0076d8]/50 transform hover:scale-105">
//                   <span>Get A Quote</span>
//                 </button>
                
//                 <button
//                   onClick={() => setIsSidebarOpen(true)}
//                   className={`p-2.5 rounded-lg transition hover:rotate-180 duration-300 ${
//                     isScrolled || !isHomePage
//                       ? 'hover:bg-gray-100 text-gray-700'
//                       : 'text-white hover:bg-white/30 backdrop-blur-sm'
//                   }`}
//                 >
//                   <div className="grid grid-cols-3 gap-1">
//                     {[...Array(9)].map((_, i) => (
//                       <div key={i} className={`w-1.5 h-1.5 rounded-full ${
//                         isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-white'
//                       }`}></div>
//                     ))}
//                   </div>
//                 </button>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="lg:hidden">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className={`p-2 rounded transition ${
//                     isScrolled || !isHomePage
//                       ? 'text-gray-700 hover:bg-gray-100'
//                       : 'text-white hover:bg-white/30 backdrop-blur-sm'
//                   }`}
//                 >
//                   {isOpen ? <X size={20} /> : <Menu size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//               <div className={`lg:hidden mt-3 pt-3 animate-fadeIn ${
//                 isScrolled || !isHomePage
//                   ? 'border-t border-gray-200'
//                   : 'border-t border-white/20'
//               }`}>
//                 <div className="space-y-1">
//                   <Link
//                     to="/"
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-2 rounded-lg font-medium transition ${
//                       isScrolled || !isHomePage
//                         ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
//                         : 'text-white hover:text-[#ffd801] hover:bg-white/20'
//                     }`}
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/services"
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-2 rounded-lg font-medium transition ${
//                       isScrolled || !isHomePage
//                         ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
//                         : 'text-white hover:text-[#ffd801] hover:bg-white/20'
//                     }`}
//                   >
//                     Services
//                   </Link>
//                   <Link
//                     to="/about"
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-2 rounded-lg font-medium transition ${
//                       isScrolled || !isHomePage
//                         ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
//                         : 'text-white hover:text-[#ffd801] hover:bg-white/20'
//                     }`}
//                   >
//                     About
//                   </Link>
//                   <Link
//                     to="/contact"
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-2 rounded-lg font-medium transition ${
//                       isScrolled || !isHomePage
//                         ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
//                         : 'text-white hover:text-[#ffd801] hover:bg-white/20'
//                     }`}
//                   >
//                     Contact
//                   </Link>
//                   <Link
//                     to="/career"
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-4 py-2 rounded-lg font-medium transition ${
//                       isScrolled || !isHomePage
//                         ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
//                         : 'text-white hover:text-[#ffd801] hover:bg-white/20'
//                     }`}
//                   >
//                     Career
//                   </Link>
//                   <button className="w-full mt-2 bg-[#0076d8] hover:bg-[#0066c0] text-white px-6 py-2.5 rounded-full transition font-semibold transform hover:scale-105">
//                     Get A Quote
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Only on Home Page */}
//       {isHomePage && (
//         <div className="relative min-h-screen overflow-hidden">
//           {/* Background Images with Transition */}
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-all duration-1000 ${
//                 index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//               }`}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
//                 style={{ backgroundImage: `url('${slide.image}')` }}
//               />
//               <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
//             </div>
//           ))}

//           {/* Hero Content */}
//           <div className="relative z-10 flex items-center justify-center min-h-screen pt-16">
//             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//               <div key={currentSlide}>
//                 <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ${
//                   isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
//                 }`}>
//                   {slides[currentSlide].title}
//                   <span className="block mt-2 bg-gradient-to-r from-[#ffd801] via-[#ffd801] to-[#0076d8] bg-clip-text text-transparent animate-gradient">
//                     {slides[currentSlide].subtitle}
//                   </span>
//                 </h1>
                
//                 <p className={`text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${
//                   isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
//                 }`}>
//                   {slides[currentSlide].description}
//                 </p>
                
//                 <div
//                   className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transform transition-all duration-1000 delay-300 ${
//                     isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
//                   }`}
//                 >
//                   <button
//                     onClick={() => navigate("/about")}
//                     className="bg-[#0076d8] hover:bg-[#0066c0] text-white
//                       px-5 py-3 sm:px-8 sm:py-4
//                       text-base sm:text-lg
//                       rounded-full font-semibold transition transform hover:scale-110
//                       shadow-xl shadow-[#0076d8]/30 flex items-center space-x-2
//                       hover:shadow-2xl hover:shadow-[#0076d8]/50 group backdrop-blur-sm"
//                   >
//                     <span>Discover More</span>
//                     <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
//                   </button>

//                   <button
//                     onClick={() => navigate("/contact")}
//                     className="border-2 border-[#ffd801] hover:border-white text-white
//                       px-5 py-3 sm:px-8 sm:py-4
//                       text-base sm:text-lg
//                       rounded-full font-semibold hover:bg-[#ffd801]/20 backdrop-blur-sm
//                       transition transform hover:scale-110 flex items-center space-x-2 group"
//                   >
//                     <span>Contact Us</span>
//                     <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Slider Controls */}
//           <div className="absolute bottom-8 sm:bottom-2 left-0 right-0 z-20 flex justify-center items-center space-x-4">
//             <button
//               onClick={prevSlide}
//               className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition transform hover:scale-110 hover:-translate-x-1"
//             >
//               <ChevronLeft size={24} />
//             </button>
            
//             <div className="flex space-x-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setIsAnimating(true);
//                     setTimeout(() => setCurrentSlide(index), 500);
//                     setTimeout(() => setIsAnimating(false), 1500);
//                   }}
//                   className={`transition-all duration-500 rounded-full ${
//                     index === currentSlide
//                       ? 'w-10 h-2.5 bg-[#ffd801] shadow-lg shadow-[#ffd801]/50 backdrop-blur-sm'
//                       : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80 hover:scale-125 backdrop-blur-sm'
//                   }`}
//                 />
//               ))}
//             </div>
            
//             <button
//               onClick={nextSlide}
//               className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition transform hover:scale-110 hover:translate-x-1"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* For non-home pages, ensure content starts below navbar */}
//       {!isHomePage && (
//         <div className="pt-16">
//           {/* Page content will go here */}
//         </div>
//       )}

//       <style>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }

//         /* Glass morphism effect for non-scrolled state */
//         .glass-morphism {
//           background: rgba(255, 255, 255, 0.2);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/images/hously-logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const slides = [
    {
      title: "Transform Your Business with",
      subtitle: "AI-Powered IT Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate processes and drive innovation.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
      bgGradient: "from-[#0076d8]/90 via-[#0076d8]/70 to-[#ffd801]/20",
      mobileImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      title: "Elevate Your Digital Presence with",
      subtitle: "Cloud Computing Services",
      description: "Scalable, secure, and reliable cloud infrastructure for modern businesses.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      bgGradient: "from-[#ffd801]/80 via-[#0076d8]/60 to-[#0076d8]/90",
      mobileImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "Secure Your Future with",
      subtitle: "Cybersecurity Solutions",
      description: "Comprehensive protection against evolving digital threats and vulnerabilities.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
      bgGradient: "from-[#0076d8]/85 via-purple-900/60 to-[#ffd801]/30",
      mobileImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    }
  ];

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 500);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 500);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 500);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Responsive */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-4 sm:p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#0c1e4a] text-white p-2 sm:p-3 rounded-full hover:bg-[#0076d8] transition"
          >
            <X size={isMobile ? 20 : 24} />
          </button>

          {/* Logo */}
          <div className="mb-6 sm:mb-8 mt-2">
            <img src={logo} alt="Hously Logo" className="h-10 sm:h-12 w-auto" />
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            Hously is a modern and innovative IT solutions company delivering reliable,
            scalable, and secure digital services tailored to meet the evolving needs of
            businesses across industries.
          </p>

          {/* Contact Details */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-[#0c1e4a] text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Details</h3>

            <div className="space-y-3 sm:space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0076d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 text-sm sm:text-base">Rahatani Rd, Madhuban Colony, Rahatani, Pimpri-Chinchwad, Maharashtra 411017</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0076d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">+ 123 888 9900</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0076d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">info@hously.com</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[#0c1e4a] text-lg sm:text-xl font-bold mb-4 sm:mb-6">Follow Us</h3>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="bg-blue-50 p-2 sm:p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-50 p-2 sm:p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-50 p-2 sm:p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-50 p-2 sm:p-3 rounded-full hover:bg-[#0076d8] hover:text-white transition">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : isHomePage ? 'bg-transparent' : 'bg-white shadow-lg'
        }`}>
        <div className={`max-w-full mx-auto px-3 sm:px-4 md:px-6 transition-all duration-300 ${isScrolled || !isHomePage ? 'py-2' : 'pt-3 sm:pt-4 pb-2'
          }`}>
          <div className={`transition-all duration-300 ${isScrolled || !isHomePage
              ? 'px-3 sm:px-4 py-2'
              : 'bg-white/20 backdrop-blur-md border border-white/30 rounded-[1rem] sm:rounded-[1.5rem] shadow-xl sm:shadow-2xl shadow-black/10 px-3 sm:px-4 py-2'
            }`}>
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Hously Logo"
                  className={`transition-all duration-300 ${isScrolled || !isHomePage
                      ? 'h-8 sm:h-10 md:h-12 w-auto pl-1 sm:pl-2'
                      : 'h-9 sm:h-11 md:h-14 w-auto pl-2 sm:pl-4 filter drop-shadow-lg'
                    }`}
                  style={{
                    filter: isScrolled || !isHomePage
                      ? 'none'
                      : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.1) contrast(1.2)'
                  }}
                />
              </Link>

              {/* Desktop Menu - Responsive breakpoints */}
              <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                <Link to="/" className={`transition font-medium relative group text-sm xl:text-base ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
                  }`}>
                  Home
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
                    }`}></span>
                </Link>
                <Link to="/services" className={`transition font-medium relative group text-sm xl:text-base ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
                  }`}>
                  Services
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
                    }`}></span>
                </Link>
                <Link to="/about" className={`transition font-medium relative group text-sm xl:text-base ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
                  }`}>
                  About
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
                    }`}></span>
                </Link>
                <Link to="/contact" className={`transition font-medium relative group text-sm xl:text-base ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
                  }`}>
                  Contact
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
                    }`}></span>
                </Link>
                <Link to="/career" className={`transition font-medium relative group text-sm xl:text-base ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-[#0076d8]' : 'text-white hover:text-[#ffd801]'
                  }`}>
                  Career
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-[#ffd801]'
                    }`}></span>
                </Link>
              </div>

              {/* Right Side - Desktop */}
              <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className={`p-2 rounded-lg transition hover:rotate-180 duration-300 ${isScrolled || !isHomePage
                      ? 'hover:bg-gray-100 text-gray-700'
                      : 'text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                >
                  <div className="grid grid-cols-3 gap-0.5 xl:gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full ${isScrolled || !isHomePage ? 'bg-[#0076d8]' : 'bg-white'
                        }`}></div>
                    ))}
                  </div>
                </button>
              </div>

              {/* Tablet/Mobile Menu & Get Quote Button */}
              <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-1.5 sm:p-2 rounded transition ${isScrolled || !isHomePage
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                >
                  {isOpen ? <X size={isMobile ? 18 : 20} /> : <Menu size={isMobile ? 18 : 20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className={`lg:hidden mt-3 pt-3 animate-fadeIn ${isScrolled || !isHomePage
                  ? 'border-t border-gray-200'
                  : 'border-t border-white/20'
                }`}>
                <div className="space-y-1">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg font-medium transition text-sm sm:text-base ${isScrolled || !isHomePage
                        ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
                        : 'text-white hover:text-[#ffd801] hover:bg-white/20'
                      }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg font-medium transition text-sm sm:text-base ${isScrolled || !isHomePage
                        ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
                        : 'text-white hover:text-[#ffd801] hover:bg-white/20'
                      }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg font-medium transition text-sm sm:text-base ${isScrolled || !isHomePage
                        ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
                        : 'text-white hover:text-[#ffd801] hover:bg-white/20'
                      }`}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg font-medium transition text-sm sm:text-base ${isScrolled || !isHomePage
                        ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
                        : 'text-white hover:text-[#ffd801] hover:bg-white/20'
                      }`}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/career"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg font-medium transition text-sm sm:text-base ${isScrolled || !isHomePage
                        ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50'
                        : 'text-white hover:text-[#ffd801] hover:bg-white/20'
                      }`}
                  >
                    Career
                  </Link>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSidebarOpen(true)}
                      className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg font-medium transition text-sm sm:text-base ${isScrolled || !isHomePage
                          ? 'text-gray-700 hover:text-[#0076d8] hover:bg-gray-50 border border-gray-200'
                          : 'text-white hover:text-[#ffd801] hover:bg-white/20 border border-white/30'
                        }`}
                    >
                      <span>More Info</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section - Only on Home Page */}
      {isHomePage && (
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Images with Transition */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
            >
              {/* Use different images for mobile/desktop */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                style={{
                  backgroundImage: `url('${isMobile ? slide.mobileImage : slide.image}')`,
                  backgroundSize: isMobile ? 'cover' : 'cover',
                  backgroundPosition: isMobile ? 'center center' : 'center center'
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 sm:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <div key={currentSlide} className="px-2 sm:px-4">
                {/* Responsive Title */}
                <h1 className={`font-bold text-white mb-4 sm:mb-6 leading-tight transform transition-all duration-1000 ${isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                  }`}>
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    {slides[currentSlide].title}
                  </span>
                  <span className="block mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#ffd801] via-[#ffd801] to-[#0076d8] bg-clip-text text-transparent animate-gradient">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>

                {/* Responsive Description */}
                <p className={`text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl md:max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                  } ${isMobile ? 'text-base' : 'text-lg sm:text-xl md:text-2xl'}`}>
                  {slides[currentSlide].description}
                </p>

                {/* Responsive Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transform transition-all duration-1000 delay-300 ${isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
                    }`}
                >
                  <button
                    onClick={() => navigate("/about")}
                    className="bg-[#0076d8] hover:bg-[#0066c0] text-white
                      px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4
                      text-sm sm:text-base md:text-lg
                      rounded-full font-semibold transition transform hover:scale-105
                      shadow-xl shadow-[#0076d8]/30 flex items-center justify-center space-x-2
                      hover:shadow-2xl hover:shadow-[#0076d8]/50 group backdrop-blur-sm
                      w-full sm:w-auto"
                  >
                    <span>Discover More</span>
                    <ArrowRight size={isMobile ? 16 : 20} className="group-hover:translate-x-1 transition" />
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="border-2 border-[#ffd801] hover:border-white text-white
                      px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4
                      text-sm sm:text-base md:text-lg
                      rounded-full font-semibold hover:bg-[#ffd801]/20 backdrop-blur-sm
                      transition transform hover:scale-105 flex items-center justify-center space-x-2 group
                      w-full sm:w-auto"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={isMobile ? 16 : 20} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>

                {/* Scroll Indicator for Mobile */}
                {isMobile && (
                  <div className="mt-8 sm:mt-12 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                      <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                    </div>
                    <p className="text-white/70 text-xs mt-2">Scroll down</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Slider Controls - Responsive */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-20 flex justify-center items-center space-x-3 sm:space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition transform hover:scale-110 hover:-translate-x-1"
              aria-label="Previous slide"
            >
              <ChevronLeft size={isMobile ? 20 : 24} />
            </button>

            <div className="flex space-x-1.5 sm:space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => setCurrentSlide(index), 500);
                    setTimeout(() => setIsAnimating(false), 1500);
                  }}
                  className={`transition-all duration-500 rounded-full ${index === currentSlide
                      ? `${isMobile ? 'w-8 h-1.5' : 'w-10 h-2.5'} bg-[#ffd801] shadow-lg shadow-[#ffd801]/50 backdrop-blur-sm`
                      : `${isMobile ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'} bg-white/50 hover:bg-white/80 hover:scale-125 backdrop-blur-sm`
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition transform hover:scale-110 hover:translate-x-1"
              aria-label="Next slide"
            >
              <ChevronRight size={isMobile ? 20 : 24} />
            </button>
          </div>
        </div>
      )}

      {/* For non-home pages, ensure content starts below navbar */}
      {!isHomePage && (
        <div className="pt-16 sm:pt-20">
          {/* Page content will go here */}
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Responsive typography adjustments */
        @media (max-width: 640px) {
          .text-gradient-mobile {
            font-size: 2rem;
            line-height: 2.5rem;
          }
        }

        /* Touch-friendly button sizes for mobile */
        @media (max-width: 768px) {
          button, 
          a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .mobile-tap-target {
            padding: 12px 16px;
          }
        }

        /* Prevent zoom on input focus for iOS */
        @media (max-width: 768px) {
          input, 
          textarea {
            font-size: 16px !important;
          }
        }

        /* Optimize transitions for mobile */
        @media (max-width: 768px) {
          .transition-all {
            transition-duration: 200ms;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;