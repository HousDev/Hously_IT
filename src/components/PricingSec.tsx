import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  duration: string;
  subtitle: string;
  features: {
    text: string;
    available: boolean;
  }[];
  delay: string;
}

const PricingSection: React.FC = () => {
  const renderAnimatedText = (text: string) => {
    return text.split('').map((letter, index) => (
      <div
        key={index}
        style={{
          position: 'relative',
          display: 'inline-block',
          opacity: 1,
          visibility: 'inherit',
          transform: 'translate(0px, 0px)',
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </div>
    ));
  };

  const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic',
    description: 'This is an excellent option for people & small businesses who are starting out.',
    price: '₹2,199',
    duration: '/month',
    subtitle: 'Up to 10 Members per month',
    features: [
      { text: 'Cultivation plans and field boundaries', available: true },
      { text: 'Scouting app/module', available: false },
      { text: 'Satellite relative crop moisture', available: false },
    ],
    delay: '0ms',
  },
  {
    title: 'Standard',
    description: 'This is an excellent option for people & small businesses who are starting out.',
    price: '₹7,199',
    duration: '/month',
    subtitle: 'Up to 10 Members per month',
    features: [
      { text: 'Cultivation plans and field boundaries', available: true },
      { text: 'Scouting app/module', available: true },
      { text: 'Satellite relative crop moisture', available: false },
    ],
    delay: '270ms',
  },
  {
    title: 'Premium',
    description: 'This is an excellent option for people & small businesses who are starting out.',
    price: '₹13,999',
    duration: '/month',
    subtitle: 'Up to 10 Members per month',
    features: [
      { text: 'Cultivation plans and field boundaries', available: true },
      { text: 'Scouting app/module', available: true },
      { text: 'Satellite relative crop moisture', available: true },
    ],
    delay: '540ms',
  },
];


  return (
    <>
      <section className="overflow-hidden">
        <div className="price-wrap bg-gray-100 relative max-w-[1720px] mx-auto py-[40px]">
          {/* Background Shape */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 pointer-events-none">
            <img
              alt="Background Shape"
              src="https://html.themehour.net/robor/demo/assets/img/shape/bg-shape1.png"
              className="w-full h-auto transform scale-[0.8]"
            />
          </div>

          <div className="container mx-auto px-3 max-w-[1488px]">
            {/* Title Area */}
            <div className="flex justify-center">
              <div className="w-full">
                <div className="text-center mb-[42px] relative z-10 -mt-[0.9em]">
                 <div className="flex items-center justify-center space-x-3 mb-7">
  {/* Left line */}
  <div className="w-15 h-[1px] bg-blue-600"></div>

  {/* Center text */}
  <span
    className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 relative pb-1 opacity-0 animate-slideInUp"
    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
  >
    <div className="relative inline-block">
      {renderAnimatedText('PRICING PLAN')}
    </div>
  </span>

  {/* Right line */}
  <div className="w-15 h-[1px] bg-blue-600"></div>
</div>


                 <h2
  className="text-[32px] md:text-[64px] font-bold leading-[1.227] text-gray-900 mb-[18px] -mt-[0.24em] opacity-0 animate-slideInUp"
  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
>
  <div className="relative inline-block">
    {renderAnimatedText('Affordable Pricing Plan')}
  </div>
</h2>

                </div>
              </div>
            </div>

            {/* Pricing Cards */}
          <div className="flex flex-wrap -mx-3 mt-[-24px] justify-center">
  {pricingPlans.map((plan, index) => (
    <div
      key={index}
      className="w-full md:w-1/2 xl:w-1/3 px-3 mb-[24px] opacity-0 animate-slideInUp"
      style={{
        animationDelay: plan.delay,
        animationFillMode: 'both',
      }}
    >
      <div className="bg-white rounded-[24px] p-[36px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] relative z-10">

        {/* Card Header */}
        <h3
          className="text-[24px] font-bold leading-[1.3] text-gray-900 -mt-[0.25em] -mb-[0.1em]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {plan.title}
        </h3>

        <p
          className="text-[15px] text-gray-600 leading-[1.7] mt-[12px] mb-[18px]"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          {plan.description}
        </p>

        {/* Price Box */}
        <div className="bg-blue-50 rounded-[16px] p-[20px]">
          <h4
            className="text-[32px] font-semibold leading-[1.25] text-blue-600 -mt-[0.2em] mb-0"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {plan.price}
            <span
              className="text-[14px] font-normal text-gray-600 ml-[4px]"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {plan.duration}
            </span>
          </h4>

          <p
            className="text-[14px] text-gray-600 leading-[1.6] mt-[4px]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {plan.subtitle}
          </p>
        </div>

        {/* Features List */}
        <div className="inline-block mt-[20px]">
          <ul className="list-none p-0 m-0 text-left">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-gray-600 text-[15px] font-medium"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  marginBottom: idx === plan.features.length - 1 ? '0' : '14px',
                  opacity: feature.available ? 1 : 0.5,
                }}
              >
                <Check
                  className="w-4.5 h-4.5 flex-shrink-0 mt-[2px]"
                  style={{
                    color: feature.available ? '#6D30FB' : '#C6C9D4',
                  }}
                />
                {feature.text}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex flex-wrap items-center mt-[22px]">
          <a
            href="#"
            className="w-full inline-flex items-center justify-center px-[24px] py-[16px] rounded-[40px] bg-[#0076d8] text-white text-[13px] font-medium leading-none min-w-[150px] transition-all duration-500 hover:bg-blue-700"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Choose Your Plan
          </a>
        </div>

      </div>
    </div>
  ))}
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

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }

        body {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #6F756D;
          line-height: 26px;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </>
  );
};

export default PricingSection;