// import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import type { Swiper as SwiperType } from 'swiper';

// const TestimonialsSection: React.FC = () => {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [, setCurrentSlide] = useState(0);

//   const renderAnimatedText = (text: string) => {
//     return text.split('').map((letter, index) => (
//       <span
//         key={index}
//         className="inline-block animate-fadeInUp"
//         style={{
//           animationDelay: `${index * 50}ms`
//         }}
//       >
//         {letter === ' ' ? '\u00A0' : letter}
//       </span>
//     ));
//   };

//   const testimonials = [
//   {
//     id: 1,
//     name: "Michael Lacefield",
//     position: "Co-founder, XYZ",
//     rating: 5,
//     text: "Their AI-powered analytics platform transformed our decision-making process, increasing efficiency by 65% in the first quarter with seamless integration and exceptional 24/7 support.",
//     image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-1.jpg"
//   },
//   {
//     id: 2,
//     name: "Harry Callum",
//     position: "Co-founder",
//     rating: 5,
//     text: "Cloud migration executed flawlessly with zero downtime across 15TB of data. Healthcare compliance expertise and security protocols reduced our infrastructure costs by 40% overall.",
//     image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-2.jpg"
//   },
//   {
//     id: 3,
//     name: "Mason Robert",
//     position: "Co-founder, XYZ",
//     rating: 5,
//     text: "Our e-commerce platform's performance increased by 300% after their optimization. The AI chatbot reduced customer service costs by 45% while improving satisfaction scores significantly.",
//     image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-3.jpg"
//   },
//   {
//     id: 4,
//     name: "Amelia Margaret",
//     position: "Co-founder",
//     rating: 5,
//     text: "Enterprise security solution prevented 12 potential breaches in one year. Compliance audits passed perfectly and system uptime maintained 99.99% reliability through advanced monitoring.",
//     image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-4.jpg"
//   },
// ];
//   return (
//     <>
//       <section className="relative overflow-hidden pt-[10px] pb-[50px] bg-gray-100">
//         <div className="container mx-auto px-6 max-w-[1488px]">
//           <div className="flex flex-wrap -mx-3 flex-row-reverse">
//             {/* Right Side - Image */}
//             <div className="w-full xl:w-7/12 px-3 mt-12">
//               <div className="text-right">
//                 <div className="inline-block rounded-[30px] overflow-hidden max-w-[773px] animate-slideInRight">
//                   <img
//                     alt="Testimonial"
//                     src="https://html.themehour.net/robor/demo/assets/img/testimonial/testi-thumb1-1.jpg"
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Left Side - Content */}
//             <div className="w-full xl:w-5/12 px-3 mt-12">
//               {/* Title Area */}
//               <div className="mb-[42px] relative z-10 -mt-4">
//                 <span
//                   className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-7 relative pb-1 animate-slideInUp"
//                   style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                 >
//                   {renderAnimatedText('Testimonials')}
                  
//                 </span>

//                 <h2
//                   className="text-[64px] font-bold leading-tight text-gray-900 mb-5 -mt-6 animate-slideInUp"
//                   style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                 >
//                   {renderAnimatedText('What Our Clients  Say About us')}
//                 </h2>
//               </div>

//               {/* Slider Area */}
//               <div className="relative z-10 mb-6 animate-slideInUp -mr-[372px]">
//                 <div className="-m-[25px] px-3">
//                   <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     spaceBetween={24}
//                     slidesPerView={'auto'}
//                     centeredSlides={false}
//                     loop={true}
//                     speed={1000}
//                     autoplay={{
//                       delay: 5000,
//                       disableOnInteraction: false,
//                     }}
//                     navigation={{
//                       nextEl: '.testimonial-next',
//                       prevEl: '.testimonial-prev',
//                     }}
//                     pagination={{
//                       el: '.testimonial-pagination',
//                       clickable: true,
//                       renderBullet: (index: number, className: string) => {
//                         return `<span class="${className} testimonial-bullet"></span>`;
//                       },
//                     }}
//                     onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
//                     onSwiper={(swiper) => {
//                       swiperRef.current = swiper;
//                     }}
//                     className="testimonial-slider py-[25px]"
//                     autoHeight={true}
//                     breakpoints={{
//                       0: {
//                         slidesPerView: 1,
//                       },
//                       768: {
//                         slidesPerView: 'auto',
//                       }
//                     }}
//                   >
//                     {testimonials.map((testimonial) => (
//                       <SwiperSlide key={testimonial.id} className="!w-[472px]">
//                         <div className="bg-white rounded-[30px] p-11 shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
//                           {/* Rating Stars */}
//                           <div className="flex gap-2 text-blue-600 mb-6 text-xl">
//                             {[...Array(testimonial.rating)].map((_, i) => (
//                               <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
//                                 <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                               </svg>
//                             ))}
//                           </div>

//                           {/* Testimonial Text */}
//                           <p
//                             className="text-[20px] text-gray-600 leading-[1.5em] mb-[72px] -mt-[0.4em]"
//                             style={{ fontFamily: '"DM Sans", sans-serif' }}
//                           >
//                             "{testimonial.text}"
//                           </p>

//                           {/* Profile */}
//                           <div className="flex items-center gap-4">
//                             <div className="flex-shrink-0 rounded-full overflow-hidden">
//                               <img
//                                 alt={testimonial.name}
//                                 src={testimonial.image}
//                                 className="w-auto h-auto"
//                               />
//                             </div>
//                             <div>
//                               <h3
//                                 className="text-[18px] font-medium text-gray-900 mb-1 -mt-[0.32em] -mb-[0.3em]"
//                                 style={{ fontFamily: '"Space Grotesk", sans-serif' }}
//                               >
//                                 {testimonial.name}
//                               </h3>
//                               <p
//                                 className="text-[14px] text-gray-600 mt-[5px] -mb-[0.5em]"
//                                 style={{ fontFamily: '"DM Sans", sans-serif' }}
//                               >
//                                 {testimonial.position}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>

//                   {/* Custom Controls */}
//                   <div className="mt-4 flex items-center border border-gray-300 rounded-[40px] p-[5px] max-w-[662px]">
//                     {/* Previous Button */}
//                     <button className="testimonial-prev flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                       </svg>
//                     </button>

//                     {/* Pagination */}
//                     <div className="testimonial-pagination flex-1 flex items-center justify-center gap-1"></div>

//                     {/* Next Button */}
//                     <button className="testimonial-next flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Global Styles */}
//       <style>{`
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

//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-slideInUp {
//           animation: slideInUp 0.9s ease forwards;
//         }

//         .animate-slideInRight {
//           animation: slideInRight 0.9s ease forwards;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.5s ease forwards;
//           opacity: 0;
//         }

//         /* Custom Pagination Bullets */
//         .testimonial-bullet {
//           display: inline-block;
//           width: 40px;
//           height: 6px;
//           background-color: #D7D7D7;
//           border-radius: 10px;
//           transition: all 0.4s;
//           cursor: pointer;
//           margin: 0 4px;
//         }

//         .testimonial-bullet.swiper-pagination-bullet-active {
//           background-color: #6D30FB;
//           width: 60px;
//         }

//         /* Slider Styles */
//         .testimonial-slider {
//           overflow: visible !important;
//         }

//         .testimonial-slider .swiper-wrapper {
//           align-items: flex-start;
//           transition-timing-function: ease-in-out;
//         }

//         .testimonial-slider .swiper-slide {
//           height: auto;
//           backface-visibility: hidden;
//           transform: translateZ(0);
//         }
//       `}</style>
//     </>
//   );
// };

// export default TestimonialsSection;




import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const TestimonialsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [, setCurrentSlide] = useState(0);

  const renderAnimatedText = (text: string) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className="inline-block animate-fadeInUp"
        style={{
          animationDelay: `${index * 50}ms`
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  const testimonials = [
    {
      id: 1,
      name: "Michael Lacefield",
      position: "Co-founder, XYZ",
      rating: 5,
      text: "Their AI-powered analytics platform transformed our decision-making process, increasing efficiency by 65% in the first quarter with seamless integration and exceptional 24/7 support.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-1.jpg"
    },
    {
      id: 2,
      name: "Harry Callum",
      position: "Co-founder",
      rating: 5,
      text: "Cloud migration executed flawlessly with zero downtime across 15TB of data. Healthcare compliance expertise and security protocols reduced our infrastructure costs by 40% overall.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-2.jpg"
    },
    {
      id: 3,
      name: "Mason Robert",
      position: "Co-founder, XYZ",
      rating: 5,
      text: "Our e-commerce platform's performance increased by 300% after their optimization. The AI chatbot reduced customer service costs by 45% while improving satisfaction scores significantly.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-3.jpg"
    },
    {
      id: 4,
      name: "Amelia Margaret",
      position: "Co-founder",
      rating: 5,
      text: "Enterprise security solution prevented 12 potential breaches in one year. Compliance audits passed perfectly and system uptime maintained 99.99% reliability through advanced monitoring.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-4.jpg"
    },
  ];

  return (
    <>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slideInRight {
          animation: slideInRight 0.9s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        /* Custom Pagination Bullets */
        .testimonial-bullet {
          display: inline-block;
          width: 40px;
          height: 6px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 4px;
        }

        .testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #6D30FB;
          width: 60px;
        }

        /* Slider Styles */
        .testimonial-slider {
          overflow: visible !important;
        }

        .testimonial-slider .swiper-wrapper {
          align-items: flex-start;
          transition-timing-function: ease-in-out;
        }

        .testimonial-slider .swiper-slide {
          height: auto;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* Mobile Pagination Bullets */
        .mobile-testimonial-bullet {
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 2px;
        }

        .mobile-testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #0076d8;
          width: 40px;
        }
      `}</style>

      {/* Desktop Version (hidden on mobile) */}
      <div className="hidden lg:block">
        <section className="relative overflow-hidden pt-[10px] pb-[50px] bg-gray-100">
          <div className="container mx-auto px-6 max-w-[1488px]">
            <div className="flex flex-wrap -mx-3 flex-row-reverse">
              {/* Right Side - Image */}
              <div className="w-full xl:w-7/12 px-3 mt-12">
                <div className="text-right">
                  <div className="inline-block rounded-[30px] overflow-hidden max-w-[773px] animate-slideInRight">
                    <img
                      alt="Testimonial"
                      src="https://html.themehour.net/robor/demo/assets/img/testimonial/testi-thumb1-1.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Left Side - Content */}
              <div className="w-full xl:w-5/12 px-3 mt-12">
                {/* Title Area */}
                <div className="mb-[42px] relative z-10 -mt-4">
                  <span
                    className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-7 relative pb-1 animate-slideInUp"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {renderAnimatedText('Testimonials')}
                  </span>

                  <h2
                    className="text-[64px] font-bold leading-tight text-gray-900 mb-5 -mt-6 animate-slideInUp"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {renderAnimatedText('What Our Clients  Say About us')}
                  </h2>
                </div>

                {/* Slider Area */}
                <div className="relative z-10 mb-6 animate-slideInUp -mr-[372px]">
                  <div className="-m-[25px] px-3">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={24}
                      slidesPerView={'auto'}
                      centeredSlides={false}
                      loop={true}
                      speed={1000}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                      }}
                      pagination={{
                        el: '.testimonial-pagination',
                        clickable: true,
                        renderBullet: (_index: number, className: string) => {
                          return `<span class="${className} testimonial-bullet"></span>`;
                        },
                      }}
                      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      className="testimonial-slider py-6.25"
                      autoHeight={true}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 'auto',
                        }
                      }}
                    >
                      {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="!w-[472px]">
                          <div className="bg-white rounded-[30px] p-11 shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
                            {/* Rating Stars */}
                            <div className="flex gap-2 text-blue-600 mb-6 text-xl">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>

                            {/* Testimonial Text */}
                            <p
                              className="text-[20px] text-gray-600 leading-[1.5em] mb-[72px] -mt-[0.4em]"
                              style={{ fontFamily: '"DM Sans", sans-serif' }}
                            >
                              "{testimonial.text}"
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0 rounded-full overflow-hidden">
                                <img
                                  alt={testimonial.name}
                                  src={testimonial.image}
                                  className="w-auto h-auto"
                                />
                              </div>
                              <div>
                                <h3
                                  className="text-[18px] font-medium text-gray-900 mb-1 -mt-[0.32em] -mb-[0.3em]"
                                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                                >
                                  {testimonial.name}
                                </h3>
                                <p
                                  className="text-[14px] text-gray-600 mt-[5px] -mb-[0.5em]"
                                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                                >
                                  {testimonial.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Controls */}
                    <div className="mt-4 flex items-center border border-gray-300 rounded-[40px] p-[5px] max-w-[662px]">
                      {/* Previous Button */}
                      <button className="testimonial-prev flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Pagination */}
                      <div className="testimonial-pagination flex-1 flex items-center justify-center gap-1"></div>

                      {/* Next Button */}
                      <button className="testimonial-next flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Version (visible only on mobile) */}
      <div className="block lg:hidden">
        <section className="relative overflow-hidden py-12 bg-gray-100 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Title Section */}
            <div className="text-center mb-8">
              <span className="inline-block text-blue-600 font-medium uppercase tracking-wider text-sm mb-3">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say About Us
              </h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                Hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            {/* Mobile Testimonial Slider */}
            <div className="mb-6">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.mobile-testimonial-next',
                  prevEl: '.mobile-testimonial-prev',
                }}
                pagination={{
                  el: '.mobile-testimonial-pagination',
                  clickable: true,
                  renderBullet: (_index: number, className: string) => {
                    return `<span class="${className} mobile-testimonial-bullet"></span>`;
                  },
                }}
                className="pb-10"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg mx-2">
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-blue-600 mb-4 text-lg">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        "{testimonial.text}"
                      </p>

                      {/* Profile */}
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <img
                            alt={testimonial.name}
                            src={testimonial.image}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile Slider Controls */}
              <div className="flex items-center justify-center gap-4 mt-4">
                {/* Previous Button */}
                <button className="mobile-testimonial-prev flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Pagination */}
                <div className="mobile-testimonial-pagination flex items-center justify-center gap-1"></div>

                {/* Next Button */}
                <button className="mobile-testimonial-next flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* REMOVED: Mobile Hero Image section */}
            {/* REMOVED: Mobile Stats section */}
            {/* REMOVED: Mobile CTA section */}
          </div>
        </section>
      </div>
    </>
  );
};

export default TestimonialsSection;