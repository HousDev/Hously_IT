import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + Math.random() * 12;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setLoadingText('Ready!');
                    return 100;
                }

                if (newProgress < 30) setLoadingText('Initializing');
                else if (newProgress < 60) setLoadingText('Loading Assets');
                else if (newProgress < 90) setLoadingText('Almost There');
                else setLoadingText('Finalizing');

                return newProgress;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden bg-white px-3 sm:px-4">
            {/* Subtle animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-50 rounded-full filter blur-2xl sm:blur-3xl opacity-40 animate-float-slow"></div>
                <div className="absolute bottom-20 right-5 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-yellow-50 rounded-full filter blur-2xl sm:blur-3xl opacity-40 animate-float-slow animation-delay-2000"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 w-full max-w-3xl mx-auto">
                {/* Logo container */}
                <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-3 sm:border-4 border-blue-100 rounded-full animate-spin-slow"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 border-3 sm:border-4 border-yellow-100 rounded-full animate-spin-slow-reverse"></div>
                    </div>
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center mx-auto">
                        <div className="bg-white rounded-full p-3 sm:p-4 md:p-6 shadow-lg border-3 sm:border-4 border-gray-100 transform hover:scale-105 transition-transform duration-300 animate-float w-full h-full">
                            <div className="flex items-center justify-center space-x-1 w-full h-full">
                                <div className="relative">
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                        hous
                                    </span>
                                    <div className="absolute top-0.5 left-7 sm:top-1 sm:left-8 md:top-1.5 md:left-10 text-white text-xs">
                                        🏠
                                    </div>
                                </div>
                                <div className="bg-yellow-400 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-2.5 md:py-2 rounded-lg">
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                        ly
                                    </span>
                                </div>
                            </div>
                            <div className="text-center mt-1 sm:mt-2 absolute bottom-1 sm:bottom-2 left-0 right-0">
                                <p className="text-gray-400 text-xs tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.25em] font-medium uppercase px-2">
                                    HOUSLY FINNTECH REALTY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[0, 90, 180, 270].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-yellow-400'} rounded-full shadow`}
                                style={{
                                    animation: `orbit 4s linear infinite`,
                                    animationDelay: `${i * 1}s`,
                                    transformOrigin: 'center center'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Services Cards with Hover Effects */}
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 w-full max-w-2xl mx-auto px-2">
                    {/* Real Estate Card with Hover Effects */}
                    <a
                        href="https://resaleexpert.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="bg-white rounded-xl shadow-sm transition-all duration-500 transform hover:-translate-y-2 p-4 border border-gray-200 hover:border-blue-500 cursor-pointer w-32 sm:w-36 md:w-40 relative overflow-hidden">
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Animated border on hover */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500"></div>

                            {/* Floating animation on hover */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>

                            <div className="relative z-10 flex flex-col items-center space-y-3">
                                {/* Icon with glow effect */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>

                                {/* Text with color change */}
                                <div className="text-center">
                                    <h3 className="text-gray-800 font-bold text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-105">
                                        Real Estate
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 group-hover:text-blue-400 transition-colors duration-300">
                                        Property Solutions
                                    </p>
                                </div>

                                {/* Loading indicator on hover */}
                                <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 whitespace-nowrap">
                                Loading: {Math.round(progress)}%
                            </div>
                        </div>
                    </a>

                    {/* Finance Card with Hover Effects */}
                    <a
                        href="https://hously.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="bg-white rounded-xl shadow-sm transition-all duration-500 transform hover:-translate-y-2 p-4 border border-gray-200 hover:border-yellow-400 cursor-pointer w-32 sm:w-36 md:w-40 relative overflow-hidden">
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Animated border on hover */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-300 transition-all duration-500"></div>

                            {/* Floating animation on hover */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>

                            <div className="relative z-10 flex flex-col items-center space-y-3">
                                {/* Icon with glow effect */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-200 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                {/* Text with color change */}
                                <div className="text-center">
                                    <h3 className="text-gray-800 font-bold text-sm sm:text-base group-hover:text-yellow-600 transition-colors duration-300 transform group-hover:scale-105">
                                        Finance
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 group-hover:text-yellow-500 transition-colors duration-300">
                                        Financial Services
                                    </p>
                                </div>

                                {/* Loading indicator on hover */}
                                <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div
                                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 whitespace-nowrap">
                                {loadingText}
                            </div>
                        </div>
                    </a>

                    {/* IT Services Card with Hover Effects */}
                    <a
                        href="https://hously.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="bg-white rounded-xl shadow-sm transition-all duration-500 transform hover:-translate-y-2 p-4 border border-gray-200 hover:border-blue-600 cursor-pointer w-32 sm:w-36 md:w-40 relative overflow-hidden">
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Animated border on hover */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>

                            {/* Floating animation on hover */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>

                            <div className="relative z-10 flex flex-col items-center space-y-3">
                                {/* Icon with glow effect */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>

                                {/* Text with color change */}
                                <div className="text-center">
                                    <h3 className="text-gray-800 font-bold text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-105">
                                        IT Services
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1 group-hover:text-blue-400 transition-colors duration-300">
                                        Tech Solutions
                                    </p>
                                </div>

                                {/* Loading indicator on hover */}
                                <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 whitespace-nowrap">
                                Status: {Math.round(progress)}%
                            </div>
                        </div>
                    </a>
                </div>

                {/* Loading status text */}
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-bounce ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-600' : 'bg-yellow-400'
                                        }`}
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                ></div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base font-medium">
                            {loadingText}... {Math.round(progress)}%
                        </p>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                        Click on any service to explore
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-10px, -15px); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                @keyframes orbit {
                    from {
                        transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg);
                    }
                    to {
                        transform: translate(-50%, -50%) rotate(360deg) translateX(60px) rotate(-360deg);
                    }
                }
                
                @media (min-width: 640px) {
                    @keyframes orbit {
                        from {
                            transform: translate(-50%, -50%) rotate(0deg) translateX(75px) rotate(0deg);
                        }
                        to {
                            transform: translate(-50%, -50%) rotate(360deg) translateX(75px) rotate(-360deg);
                        }
                    }
                }
                
                @media (min-width: 768px) {
                    @keyframes orbit {
                        from {
                            transform: translate(-50%, -50%) rotate(0deg) translateX(90px) rotate(0deg);
                        }
                        to {
                            transform: translate(-50%, -50%) rotate(360deg) translateX(90px) rotate(-360deg);
                        }
                    }
                }
                
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 6s linear infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                .animate-bounce {
                    animation: bounce 0.6s infinite;
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;