import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Link } from "react-router-dom";

// Replace the individual imports with:
import 'swiper/swiper-bundle.css';

const CaseStudiesSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(6);

  const renderAnimatedText = (text: string) => {
    const words = text.split(' ');
    
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block">
        {word.split('').map((letter, letterIndex) => (
          <span
            key={`${wordIndex}-${letterIndex}`}
            className="inline-block animate-fadeInUp"
            style={{
              animationDelay: `${(wordIndex * 100 + letterIndex * 50)}ms`
            }}
          >
            {letter}
          </span>
        ))}
        {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  };

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce AI Chatbot System",
      category: "AI & Chatbot Development",
      description: "Intelligent customer support chatbot with 95% query resolution rate",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      metrics: "Increased sales by 30%, reduced support tickets by 70%"
    },
    {
      id: 2,
      title: "Healthcare SaaS Platform",
      category: "Software Development",
      description: "Cloud-based healthcare management system for clinics and hospitals",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&auto=format&fit=crop",
      metrics: "Served 50+ healthcare facilities, improved efficiency by 40%"
    },
    {
      id: 3,
      title: "Enterprise Cloud Migration",
      category: "Cloud Solutions",
      description: "Complete AWS migration for financial services company",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      metrics: "Reduced costs by 45%, improved performance by 60%"
    },
    {
      id: 4,
      title: "Digital Transformation Portal",
      category: "Digital Transformation",
      description: "Comprehensive digital platform for government services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      metrics: "Served 1M+ users, reduced processing time by 80%"
    },
    {
      id: 5,
      title: "ML-Powered Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time business intelligence dashboard with predictive analytics",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
      metrics: "Improved decision-making speed by 50%, identified new revenue streams"
    },
    {
      id: 6,
      title: "DevOps Automation Pipeline",
      category: "Cloud & DevOps",
      description: "CI/CD pipeline with automated testing and deployment",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      metrics: "Reduced deployment time by 75%, increased release frequency 3x"
    }
  ];

  const subTitle = "Case Study";
  const mainTitle = "IT Projects Case Study";
  const description = "Explore our portfolio of successful technology implementations across various industries, showcasing our expertise in delivering innovative solutions.";

  return (
    <>
<section
  id="case-studies"
  className="relative overflow-hidden pt-[110px] pb-[40px] bg-white"
>
         <div className="container mx-auto px-6 max-w-[1488px]">
          {/* Title Section */}
          <div className="flex flex-wrap justify-center -mx-3">
            <div className="w-full xl:w-1/2 lg:w-2/3 px-3">
              <div className="text-center mb-[42px] relative z-10 -mt-4">
                {/* Shadow Title */}
                <div
                  className="text-[400px] font-bold leading-none text-gray-100 opacity-70
                             relative left-1/2 -translate-x-1/2 translate-y-10
                             w-max -my-[0.6em] z-[-2]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Case
                </div>

                {/* Sub Title */}
                <div className="flex items-center justify-center space-x-3 mb-7">
  {/* Left line */}
  <div className="w-15 h-[1px] bg-[#0076d8]"></div>

  {/* Center text */}
  <span
    className="inline-block text-[16px] font-medium uppercase tracking-wider text-[#0076d8] relative pb-1 animate-slideInUp"
    style={{
      fontFamily: '"Space Grotesk", sans-serif',
      animationDelay: '0ms',
    }}
  >
    {renderAnimatedText(subTitle)}
  </span>

  {/* Right line */}
  <div className="w-15 h-[1px] bg-[#0076d8]"></div>
</div>


                {/* Main Title */}
               <h2
  className="text-[40px] md:text-[64px] font-bold leading-tight text-gray-900 mb-5 -mt-7 animate-slideInUp"
  style={{
    fontFamily: '"Space Grotesk", sans-serif',
    animationDelay: '0ms',
  }}
>
  {renderAnimatedText(mainTitle)}
</h2>


                {/* Description */}
                <p
                  className="text-gray-600 leading-[1.75] text-[18px] mb-6 animate-slideInUp max-w-2xl mx-auto"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    animationDelay: '200ms',
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="container mx-auto px-4 md:px-6 max-w-[1500px]">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{
                el: '.custom-pagination',
                type: 'progressbar',
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setTotalSlides(caseStudies.length);
              }}
              className="project-slider pb-10"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  centeredSlides: true,
                }
              }}
            >
              {caseStudies.map((study) => (
                <SwiperSlide key={study.id} className="max-w-full md:max-w-[870px]">
                  <div className="group relative overflow-hidden rounded-2xl md:rounded-[30px] cursor-pointer mx-2 md:mx-0">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl md:rounded-[30px]">
                      <img
                        alt={study.title}
                        src={study.image}
                        className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 md:p-12 flex flex-col justify-end">
                      {/* Category Tag */}
                      <div className="inline-block mb-4 md:mb-6">
                        <span className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-full md:rounded-[20px] px-3 py-1 text-white text-sm font-medium">
                          {study.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-xl md:text-[36px] leading-tight mb-3 md:mb-4 max-w-full md:max-w-[441px]">
                        {study.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-base md:text-lg mb-3 md:mb-4 max-w-full md:max-w-[441px]">
                        {study.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex items-center gap-4 mt-3 md:mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white text-sm font-medium">{study.metrics}</span>
                        </div>
                      </div>

                      {/* View Details Button */}
                    <Link
  to="/CaseStudy"
  className="mt-6 md:mt-8 inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
>
  View Case Study
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Controls */}
            <div className="mt-8 md:mt-[60px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 max-w-[1404px] mx-auto px-4">
              {/* Slide Counter */}
              <div className="flex items-center gap-2 order-2 md:order-1">
                <span className="text-2xl md:text-[32px] font-bold text-gray-900 leading-none">
                  {currentSlide.toString().padStart(2, '0')}
                </span>
                <span className="text-gray-400 text-xl md:text-[24px] leading-none">/</span>
                <span className="text-gray-400 text-xl md:text-[24px] leading-none">
                  {totalSlides.toString().padStart(2, '0')}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="flex-1 relative h-[2px] bg-gray-200 overflow-hidden max-w-full md:max-w-[1000px] order-1 md:order-2 w-full md:w-auto">
                <div
                  className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${(currentSlide / totalSlides) * 100}%`,
                  }}
                />
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 order-3">
                <button 
                  className="custom-prev w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  className="custom-next w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        /* Custom Swiper Styles */
        .project-slider .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .project-slider .swiper-slide-active {
          opacity: 1;
        }

        .swiper-pagination-progressbar {
          position: relative !important;
          height: 1px !important;
          background: #D7D7D7 !important;
          margin: 0 !important;
        }

        .swiper-pagination-progressbar-fill {
          background: #0076d8 !important;
          height: 3px !important;
          top: -1px !important;
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 768px) {
          .project-slider .swiper-slide {
            opacity: 0.7;
          }
          
          .project-slider .swiper-slide-active {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default CaseStudiesSection;