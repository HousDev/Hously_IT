import React from "react";

// Components
import Breadcrumb from "../../components/Breadcrumb";
import Services from "../../components/Services";
import PricingSec from "../../components/PricingSec";


const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        
      />

      {/* Services Section */}
      <Services />
      

      {/* Pricing Section */}
      <PricingSec />

      
    </>
  );
};

export default ServicesPage;
