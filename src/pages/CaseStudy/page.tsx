import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, TrendingUp, CheckCircle, X } from 'lucide-react';
// Types
interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  client: string;
  duration: string;
  teamSize: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

// Data
const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "ecommerce-ai-chatbot",
    title: "E-commerce AI Chatbot System",
    category: "AI & Chatbot Development",
    description: "Intelligent customer support chatbot with 95% query resolution rate",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    metrics: "Increased sales by 30%, reduced support tickets by 70%",
    client: "ShopMart Inc.",
    duration: "6 months",
    teamSize: "8 specialists",
    technologies: ["Python", "TensorFlow", "Natural Language Processing", "AWS Lambda", "React"],
    challenge: "ShopMart was struggling with high customer support costs and slow response times. They received over 10,000 customer queries daily, leading to long wait times and customer dissatisfaction.",
    solution: "We developed an AI-powered chatbot using advanced NLP and machine learning algorithms. The system was trained on historical customer interactions and integrated seamlessly with their existing e-commerce platform. It could handle product inquiries, order tracking, returns, and basic troubleshooting.",
    results: [
      "95% query resolution rate without human intervention",
      "Response time reduced from 5 minutes to under 10 seconds",
      "30% increase in sales through personalized product recommendations",
      "70% reduction in customer support tickets",
      "Customer satisfaction score improved from 3.2 to 4.7 out of 5"
    ],
    testimonial: {
      quote: "The AI chatbot has transformed our customer service. It's like having 100 support agents working 24/7. Our customers are happier, and our costs have dropped significantly.",
      author: "Jennifer Smith",
      position: "CEO, ShopMart Inc."
    }
  },
  {
    id: 2,
    slug: "healthcare-saas-platform",
    title: "Healthcare SaaS Platform",
    category: "Software Development",
    description: "Cloud-based healthcare management system for clinics and hospitals",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&auto=format&fit=crop",
    metrics: "Served 50+ healthcare facilities, improved efficiency by 40%",
    client: "MediCare Solutions",
    duration: "12 months",
    teamSize: "15 developers",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA Compliance", "HL7 FHIR"],
    challenge: "Healthcare facilities were using outdated, disconnected systems for patient management, scheduling, billing, and records. This led to inefficiencies, errors, and poor patient experience.",
    solution: "We built a comprehensive cloud-based SaaS platform that integrated all aspects of healthcare management. The system included patient portals, appointment scheduling, electronic health records (EHR), billing automation, and analytics dashboards. All components were HIPAA compliant and featured robust security measures.",
    results: [
      "50+ healthcare facilities onboarded within first year",
      "40% improvement in operational efficiency",
      "Appointment no-shows reduced by 35%",
      "Patient satisfaction increased by 45%",
      "Administrative costs reduced by 25%"
    ],
    testimonial: {
      quote: "This platform has revolutionized how we operate. Everything is connected, secure, and accessible. Our staff can focus on patient care instead of paperwork.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer, City General Hospital"
    }
  },
  {
    id: 3,
    slug: "enterprise-cloud-migration",
    title: "Enterprise Cloud Migration",
    category: "Cloud Solutions",
    description: "Complete AWS migration for financial services company",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    metrics: "Reduced costs by 45%, improved performance by 60%",
    client: "FinanceCorp Global",
    duration: "9 months",
    teamSize: "12 cloud architects",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "MongoDB"],
    challenge: "FinanceCorp was running legacy on-premise infrastructure that was expensive to maintain, difficult to scale, and lacked modern security features. Their systems couldn't handle peak loads during trading hours.",
    solution: "We executed a phased cloud migration strategy to AWS. We containerized applications using Docker and Kubernetes, implemented auto-scaling, set up disaster recovery, and enhanced security with AWS security services. The migration was done with zero downtime.",
    results: [
      "Infrastructure costs reduced by 45%",
      "Application performance improved by 60%",
      "99.99% uptime achieved",
      "Deployment time reduced from weeks to hours",
      "Enhanced security with real-time threat detection"
    ],
    testimonial: {
      quote: "The cloud migration was seamless and the results exceeded our expectations. We're now more agile, secure, and cost-effective than ever before.",
      author: "Robert Johnson",
      position: "CTO, FinanceCorp Global"
    }
  },
  {
    id: 4,
    slug: "digital-transformation-portal",
    title: "Digital Transformation Portal",
    category: "Digital Transformation",
    description: "Comprehensive digital platform for government services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    metrics: "Served 1M+ users, reduced processing time by 80%",
    client: "State Government Services",
    duration: "18 months",
    teamSize: "25 specialists",
    technologies: ["Angular", "Java Spring Boot", "Oracle", "Azure", "Blockchain", "Biometric Auth"],
    challenge: "Citizens had to visit multiple government offices for different services, leading to long queues and processing times. There was no centralized digital platform for accessing government services.",
    solution: "We developed a comprehensive digital portal that integrated 50+ government services. The platform featured digital document submission, real-time application tracking, online payments, and biometric authentication. We also implemented blockchain for secure document verification.",
    results: [
      "1M+ active users within 6 months",
      "Processing time reduced by 80%",
      "95% of services now available online",
      "Citizen satisfaction score: 4.6/5",
      "Reduced government operational costs by 30%"
    ],
    testimonial: {
      quote: "This portal has transformed how citizens interact with government services. What used to take days now takes minutes. It's a model for digital governance.",
      author: "Sarah Martinez",
      position: "Director of Digital Services, State Government"
    }
  },
  {
    id: 5,
    slug: "ml-powered-analytics-dashboard",
    title: "ML-Powered Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time business intelligence dashboard with predictive analytics",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
    metrics: "Improved decision-making speed by 50%, identified new revenue streams",
    client: "RetailTech Inc.",
    duration: "8 months",
    teamSize: "10 data scientists",
    technologies: ["Python", "scikit-learn", "Apache Spark", "Tableau", "AWS Redshift", "React"],
    challenge: "RetailTech had massive amounts of data but lacked tools to extract actionable insights. Decision-making was slow and often based on outdated information.",
    solution: "We built an ML-powered analytics platform that processed real-time data from multiple sources. The dashboard featured predictive analytics for sales forecasting, customer behavior analysis, inventory optimization, and automated anomaly detection.",
    results: [
      "Decision-making speed improved by 50%",
      "Identified 3 new revenue streams worth $5M annually",
      "Inventory costs reduced by 20%",
      "Sales forecast accuracy improved to 92%",
      "Real-time alerts prevented potential losses of $2M"
    ],
    testimonial: {
      quote: "The analytics platform gives us superpowers. We can predict trends, optimize operations, and make data-driven decisions in real-time. It's been a game-changer.",
      author: "David Lee",
      position: "VP of Analytics, RetailTech Inc."
    }
  },
  {
    id: 6,
    slug: "devops-automation-pipeline",
    title: "DevOps Automation Pipeline",
    category: "Cloud & DevOps",
    description: "CI/CD pipeline with automated testing and deployment",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    metrics: "Reduced deployment time by 75%, increased release frequency 3x",
    client: "SoftwareCo",
    duration: "5 months",
    teamSize: "6 DevOps engineers",
    technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
    challenge: "SoftwareCo had a manual deployment process that was error-prone and time-consuming. Releases took weeks, testing was inconsistent, and rollbacks were difficult.",
    solution: "We implemented a complete DevOps transformation with automated CI/CD pipelines. The solution included automated testing, containerization, infrastructure as code, monitoring, and automated rollback capabilities. We also set up comprehensive logging and alerting systems.",
    results: [
      "Deployment time reduced from 8 hours to 2 hours (75% reduction)",
      "Release frequency increased from monthly to weekly (3x increase)",
      "Deployment failures reduced by 90%",
      "Mean time to recovery (MTTR) reduced from 4 hours to 30 minutes",
      "Developer productivity increased by 40%"
    ],
    testimonial: {
      quote: "The DevOps pipeline has transformed our development process. We can now release features faster, with higher quality, and with complete confidence.",
      author: "Emily Rodriguez",
      position: "Engineering Director, SoftwareCo"
    }
  }
];

// Case Study Details Card Component
const CaseStudyDetailsCard: React.FC<{ study: CaseStudy; onClose: () => void }> = ({ study, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Card Container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Hero Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <span className="inline-block bg-[#ffd801] text-[#0375d5] px-3 py-1 rounded-full text-xs font-medium mb-2">
                {study.category}
              </span>
              <h2 className="text-2xl font-bold text-white">{study.title}</h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-12rem)] p-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-[#0375d5]" />
                <span className="text-sm font-medium text-gray-700">Client</span>
              </div>
              <p className="text-sm text-gray-600">{study.client}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-[#0375d5]" />
                <span className="text-sm font-medium text-gray-700">Duration</span>
              </div>
              <p className="text-sm text-gray-600">{study.duration}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{study.description}</p>
          </div>

          {/* Key Results */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h3>
            <div className="space-y-2">
              {study.results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.slice(0, 5).map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#0375d5]/10 text-[#0375d5] px-3 py-1 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Preview */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-2 mb-3">
              <div className="text-[#ffd801] text-3xl leading-none">"</div>
              <p className="text-sm text-gray-700 italic line-clamp-3">
                {study.testimonial.quote}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0375d5] rounded-full flex items-center justify-center text-white text-xs font-bold">
                {study.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{study.testimonial.author}</p>
                <p className="text-xs text-gray-600">{study.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with View Full Button */}
        <div className="border-t p-4">
          <button className="w-full bg-[#0375d5] text-white py-3 rounded-lg font-medium hover:bg-[#025a9e] transition-colors">
            View Full Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const CaseStudyApp: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (

<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
     

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedStudy(study)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-[#ffd801] text-[#0375d5] px-4 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0375d5] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700 font-medium">{study.metrics}</span>
                  </div>

                  {/* Read More Button */}
                  <button className="flex items-center gap-2 text-[#0375d5] font-medium group-hover:gap-4 transition-all">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Details Card Overlay */}
      {selectedStudy && (
        <CaseStudyDetailsCard 
          study={selectedStudy} 
          onClose={() => setSelectedStudy(null)} 
        />
      )}
    </div>
  );
};

export default CaseStudyApp;