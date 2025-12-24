// import { useState, useEffect } from 'react';

// const LoadingScreen = () => {
//     const [progress, setProgress] = useState(0);
//     const [loadingText, setLoadingText] = useState('Initializing');

//     useEffect(() => {
//         // Progress simulation
//         const interval = setInterval(() => {
//             setProgress(prev => {
//                 const newProgress = prev + Math.random() * 12;
//                 if (newProgress >= 100) {
//                     clearInterval(interval);
//                     setLoadingText('Ready!');
//                     return 100;
//                 }

//                 // Update loading text based on progress
//                 if (newProgress < 30) setLoadingText('Initializing');
//                 else if (newProgress < 60) setLoadingText('Loading Assets');
//                 else if (newProgress < 90) setLoadingText('Almost There');
//                 else setLoadingText('Finalizing');

//                 return newProgress;
//             });
//         }, 200);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-white">
//             {/* Subtle animated background circles */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-10 left-10 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-40 animate-float-slow"></div>
//                 <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-50 rounded-full filter blur-3xl opacity-40 animate-float-slow animation-delay-2000"></div>
//                 <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-float-slow animation-delay-4000"></div>
//             </div>

//             {/* Floating geometric shapes */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {/* Blue squares */}
//                 <div className="absolute top-20 left-1/4 w-8 h-8 border-4 border-blue-200 rounded-lg animate-float-geometric" style={{ animationDelay: '0s' }}></div>
//                 <div className="absolute bottom-32 right-1/3 w-6 h-6 border-4 border-blue-300 rounded-lg animate-float-geometric" style={{ animationDelay: '1s' }}></div>

//                 {/* Yellow rounded squares */}
//                 <div className="absolute top-1/3 right-20 w-10 h-10 bg-yellow-400 rounded-xl opacity-20 animate-float-geometric" style={{ animationDelay: '0.5s' }}></div>
//                 <div className="absolute bottom-1/4 left-20 w-8 h-8 bg-yellow-300 rounded-xl opacity-20 animate-float-geometric" style={{ animationDelay: '1.5s' }}></div>

//                 {/* House icons scattered */}
//                 <div className="absolute top-40 right-1/4 text-blue-200 text-2xl opacity-30 animate-float-geometric" style={{ animationDelay: '0.3s' }}>🏠</div>
//                 <div className="absolute bottom-40 left-1/4 text-blue-200 text-xl opacity-30 animate-float-geometric" style={{ animationDelay: '1.2s' }}>🏠</div>
//             </div>

//             {/* Main content */}
//             <div className="relative z-10 flex flex-col items-center space-y-10">
//                 {/* Logo container with animated rings */}
//                 <div className="relative">
//                     {/* Outer rotating ring - Blue */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-80 h-80 border-4 border-blue-100 rounded-full animate-spin-slow"></div>
//                     </div>

//                     {/* Middle ring - Yellow */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-72 h-72 border-4 border-yellow-100 rounded-full animate-spin-slow-reverse"></div>
//                     </div>

//                     {/* Logo display */}
//                     <div className="relative w-80 h-80 flex items-center justify-center">
//                         <div className="bg-white rounded-full p-12 shadow-2xl border-4 border-gray-100 transform hover:scale-105 transition-transform duration-300 animate-float">
//                             {/* Hously text logo recreation */}
//                             <div className="flex items-center space-x-1">
//                                 {/* "hous" in blue */}
//                                 <div className="relative">
//                                     <span className="text-6xl font-bold text-blue-600" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
//                                         hous
//                                     </span>
//                                     {/* House icon in the 'o' */}
//                                     <div className="absolute top-3 left-16 text-white text-xs">
//                                         🏠
//                                     </div>
//                                 </div>

//                                 {/* "ly" in yellow box */}
//                                 <div className="bg-yellow-400 px-3 py-2 rounded-xl">
//                                     <span className="text-6xl font-bold text-blue-600" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
//                                         ly
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Subtitle */}
//                             <div className="text-center mt-4">
//                                 <p className="text-gray-400 text-xs tracking-[0.3em] font-medium uppercase">
//                                     HOUSLY FINNTECH REALTY
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Orbiting dots - Blue and Yellow */}
//                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                         {[0, 90, 180, 270].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className={`absolute w-4 h-4 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-yellow-400'} rounded-full shadow-lg`}
//                                 style={{
//                                     animation: `orbit 4s linear infinite`,
//                                     animationDelay: `${i * 1}s`
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Services section - Clickable Cards */}
//                 <div className="flex items-center space-x-4 flex-wrap justify-center max-w-4xl">
//                     {/* Real Estate Card */}
//                     <a
//                         href="https://resaleexpert.in/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group"
//                     >
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-2 border-transparent hover:border-blue-500 cursor-pointer min-w-[200px]">
//                             <div className="flex flex-col items-center space-y-3">
//                                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                                     </svg>
//                                 </div>
//                                 <div className="text-center">
//                                     <h3 className="text-gray-800 font-bold text-lg group-hover:text-blue-600 transition-colors">Real Estate</h3>
//                                     <p className="text-gray-500 text-xs mt-1">Property Solutions</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Finance Card */}
//                     <a
//                         href="https://hously.in/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group"
//                     >
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-2 border-transparent hover:border-yellow-400 cursor-pointer min-w-[200px]">
//                             <div className="flex flex-col items-center space-y-3">
//                                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                 </div>
//                                 <div className="text-center">
//                                     <h3 className="text-gray-800 font-bold text-lg group-hover:text-yellow-600 transition-colors">Finance</h3>
//                                     <p className="text-gray-500 text-xs mt-1">Financial Services</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>

//                     {/* IT Services Card */}
//                     <a
//                         href="https://hously.in/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group"
//                     >
//                         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-2 border-transparent hover:border-blue-600 cursor-pointer min-w-[200px]">
//                             <div className="flex flex-col items-center space-y-3">
//                                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                 </div>
//                                 <div className="text-center">
//                                     <h3 className="text-gray-800 font-bold text-lg group-hover:text-blue-600 transition-colors">IT Services</h3>
//                                     <p className="text-gray-500 text-xs mt-1">Tech Solutions</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>
//                 </div>

//                 {/* Progress bar - Blue and Yellow themed */}
//                 <div className="w-96 space-y-3">
//                     <div className="flex justify-between items-center">
//                         <span className="text-blue-600 text-sm font-semibold tracking-wide">{loadingText}</span>
//                         <span className="text-yellow-600 text-sm font-bold">{Math.min(100, Math.floor(progress))}%</span>
//                     </div>

//                     {/* Progress bar container */}
//                     <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner border border-gray-200">
//                         {/* Progress fill with gradient */}
//                         <div
//                             className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-blue-600 to-yellow-400 rounded-full transition-all duration-300 ease-out"
//                             style={{ width: `${Math.min(100, progress)}%` }}
//                         >
//                             {/* Animated shine effect */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
//                         </div>

//                         {/* Glowing dot at progress end */}
//                         <div
//                             className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-yellow-400 rounded-full shadow-lg transition-all duration-300"
//                             style={{ left: `calc(${Math.min(100, progress)}% - 8px)` }}
//                         ></div>
//                     </div>

//                     {/* Progress milestones */}
//                     <div className="flex justify-between px-1">
//                         {[25, 50, 75, 100].map(segment => (
//                             <div
//                                 key={segment}
//                                 className={`flex flex-col items-center space-y-1 transition-all duration-300`}
//                             >
//                                 <div className={`h-1.5 w-1.5 rounded-full ${progress >= segment
//                                     ? segment === 100 ? 'bg-yellow-400 shadow-md' : 'bg-blue-500 shadow-md'
//                                     : 'bg-gray-300'
//                                     }`}></div>
//                                 <span className={`text-xs font-medium ${progress >= segment ? 'text-blue-600' : 'text-gray-400'
//                                     }`}>
//                                     {segment}%
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Loading dots */}
//                 <div className="flex items-center space-x-2">
//                     <div className="flex space-x-1.5">
//                         {[...Array(3)].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className={`w-2.5 h-2.5 rounded-full animate-bounce ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-600' : 'bg-yellow-400'
//                                     }`}
//                                 style={{ animationDelay: `${i * 0.15}s` }}
//                             ></div>
//                         ))}
//                     </div>
//                     <p className="text-gray-500 text-sm font-medium">
//                         Loading your experience...
//                     </p>
//                 </div>
//             </div>

//             <style>{`
//                 @keyframes float-slow {
//                     0%, 100% { transform: translate(0, 0); }
//                     50% { transform: translate(-20px, -30px); }
//                 }
                
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-12px); }
//                 }
                
//                 @keyframes float-geometric {
//                     0%, 100% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-25px) rotate(5deg); }
//                 }
                
//                 @keyframes spin-slow {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                 }
                
//                 @keyframes spin-slow-reverse {
//                     from { transform: rotate(360deg); }
//                     to { transform: rotate(0deg); }
//                 }
                
//                 @keyframes shine {
//                     0% { transform: translateX(-100%); }
//                     100% { transform: translateX(200%); }
//                 }
                
//                 @keyframes orbit {
//                     from {
//                         transform: translate(-50%, -50%) rotate(0deg) translateX(160px) rotate(0deg);
//                     }
//                     to {
//                         transform: translate(-50%, -50%) rotate(360deg) translateX(160px) rotate(-360deg);
//                     }
//                 }
                
//                 .animate-float-slow {
//                     animation: float-slow 8s ease-in-out infinite;
//                 }
                
//                 .animate-float {
//                     animation: float 3s ease-in-out infinite;
//                 }
                
//                 .animate-float-geometric {
//                     animation: float-geometric 4s ease-in-out infinite;
//                 }
                
//                 .animate-spin-slow {
//                     animation: spin-slow 8s linear infinite;
//                 }
                
//                 .animate-spin-slow-reverse {
//                     animation: spin-slow-reverse 6s linear infinite;
//                 }
                
//                 .animate-shine {
//                     animation: shine 2s ease-in-out infinite;
//                 }
                
//                 .animation-delay-2000 {
//                     animation-delay: 2s;
//                 }
                
//                 .animation-delay-4000 {
//                     animation-delay: 4s;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default LoadingScreen;