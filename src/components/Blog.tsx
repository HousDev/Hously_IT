import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  delay: string;
  content?: string; // Full content for the modal
}

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest advancements in web development including AI-powered tools, serverless architecture, and progressive web apps.",
      date: "24 Jan, 2025",
      author: "John Smith",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      delay: "0ms",
      content: `The web development landscape is evolving at an unprecedented pace. In 2025, we're seeing several key trends that are reshaping how we build for the web. Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of development workflows. AI-powered code assistants, automated testing tools, and intelligent debugging systems are becoming standard in developer toolkits.

Serverless architecture continues to gain momentum, with more organizations adopting Function-as-a-Service (FaaS) platforms. This shift allows developers to focus on writing business logic rather than managing infrastructure. Combined with edge computing, this enables faster, more scalable applications that serve users globally with minimal latency.

Progressive Web Apps (PWAs) have matured significantly, blurring the line between web and native applications. With improved browser APIs and better support for native-like features, PWAs now offer offline functionality, push notifications, and home screen installation across all major platforms.

The rise of WebAssembly (Wasm) is another game-changer, enabling near-native performance for computationally intensive tasks directly in the browser. This opens up possibilities for complex applications like video editing, 3D modeling, and scientific simulations that were previously only possible with native applications.

Accessibility and performance remain critical focus areas. Core Web Vitals have become a key ranking factor, pushing developers to prioritize user experience metrics. Meanwhile, improved accessibility standards and automated testing tools are making the web more inclusive for all users.`
    },
    {
      id: 2,
      title: "AI in Business: How Machine Learning is Transforming Industries",
      excerpt: "Discover how AI and ML solutions are driving innovation across healthcare, finance, retail, and manufacturing sectors.",
      date: "16 Jul, 2025",
      author: "Sarah Chen",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
      delay: "270ms",
      content: `Artificial Intelligence and Machine Learning are no longer futuristic concepts—they're practical tools transforming businesses today. Across industries, organizations are leveraging AI to gain competitive advantages, improve efficiency, and create new value propositions.

In healthcare, AI algorithms are revolutionizing diagnostics. Machine learning models can now analyze medical images with accuracy surpassing human experts in some cases. Predictive analytics help hospitals anticipate patient needs and optimize resource allocation. Natural language processing enables more efficient patient record management and clinical documentation.

The financial sector has embraced AI for fraud detection, risk assessment, and algorithmic trading. Machine learning models analyze millions of transactions in real-time to identify suspicious patterns that might indicate fraudulent activity. Robo-advisors powered by AI provide personalized investment recommendations at scale, making wealth management services accessible to broader audiences.

Retail has been transformed by AI-powered recommendation engines, dynamic pricing algorithms, and inventory optimization systems. Computer vision enables cashier-less stores, while natural language processing powers sophisticated chatbots that handle customer inquiries 24/7. Predictive analytics help retailers anticipate demand trends and optimize supply chains.

Manufacturing benefits from AI through predictive maintenance, quality control automation, and supply chain optimization. IoT sensors combined with machine learning algorithms can predict equipment failures before they occur, minimizing downtime. Computer vision systems inspect products for defects with superhuman consistency and speed.`
    },
    {
      id: 3,
      title: "Cloud Migration Best Practices for Enterprise Success",
      excerpt: "Learn the essential strategies for successful cloud migration, security considerations, and cost optimization techniques.",
      date: "30 Jun, 2025",
      author: "Michael Rodriguez",
      category: "Cloud Solutions",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      delay: "540ms",
      content: `Cloud migration is a complex but rewarding journey for enterprises seeking scalability, flexibility, and cost efficiency. A successful migration requires careful planning, execution, and ongoing optimization.

The first critical step is conducting a comprehensive assessment of your current infrastructure. This includes inventorying applications, dependencies, data flows, and performance requirements. Categorize applications based on their cloud readiness—some may be easily lifted-and-shifted, while others require refactoring or complete re-architecture.

Choosing the right migration strategy is paramount. The "6 R's" framework remains relevant: Rehost (lift-and-shift), Replatform (lift-tinker-and-shift), Repurchase (replace with SaaS), Refactor (re-architect for cloud-native), Retire (decommission unnecessary systems), and Retain (keep on-premises). Most successful migrations use a combination of these approaches.

Security must be integrated into the migration process from day one. Implement a "secure by design" approach with proper identity and access management, network segmentation, encryption, and continuous monitoring. Consider regulatory compliance requirements that may dictate data residency and protection standards.

Cost optimization is an ongoing process, not a one-time event. Implement tagging strategies to track resource ownership and usage. Use reserved instances and savings plans for predictable workloads. Implement auto-scaling to match resources with actual demand. Regularly review and rightsize instances to eliminate waste.

Post-migration, focus on cloud operations excellence. Implement DevOps practices, continuous monitoring, and automated governance. Establish clear operational procedures and train your team on cloud-native tools and methodologies.`
    },
    {
      id: 4,
      title: "DevOps Automation: Streamlining Software Delivery Pipelines",
      excerpt: "Implement efficient CI/CD pipelines with automated testing, deployment, and monitoring for faster software releases.",
      date: "15 May, 2025",
      author: "Emma Wilson",
      category: "Cloud & DevOps",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      delay: "0ms",
      content: `DevOps automation has evolved from a competitive advantage to a business necessity. In today's fast-paced digital landscape, organizations must deliver software updates rapidly while maintaining quality and reliability. A well-implemented CI/CD pipeline is the foundation of modern software delivery.

Continuous Integration (CI) begins with version control best practices. Teams should commit code frequently to main branches, with automated builds triggered on every commit. Modern CI tools provide parallel test execution, intelligent test selection, and comprehensive reporting. The key is failing fast—identifying issues as early as possible in the development cycle.

Test automation is critical for sustainable CI/CD. Implement a testing pyramid approach with unit tests forming the base, integration tests in the middle, and fewer end-to-end tests at the top. Automated security testing (SAST, DAST, SCA) should be integrated into the pipeline. Performance testing under realistic conditions helps prevent regression.

Infrastructure as Code (IaC) enables reproducible, version-controlled environments. Tools like Terraform, CloudFormation, or Pulumi allow teams to define infrastructure declaratively. This eliminates configuration drift and enables self-service environments for development and testing.

Continuous Deployment (CD) requires careful rollout strategies. Blue-green deployments, canary releases, and feature flags allow teams to deploy with confidence. Automated rollback mechanisms provide safety nets when issues are detected post-deployment.

Monitoring and observability complete the feedback loop. Implement distributed tracing, centralized logging, and comprehensive metrics. Use AIOps for anomaly detection and predictive alerting. The goal is to shift from reactive incident response to proactive system management.`
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of Digital Transformation",
      excerpt: "Essential security measures and best practices for protecting digital assets during business transformation initiatives.",
      date: "08 Apr, 2025",
      author: "David Kim",
      category: "Cybersecurity",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      delay: "270ms",
      content: `Digital transformation initiatives expand the attack surface for organizations, making robust cybersecurity more critical than ever. As businesses adopt cloud services, IoT devices, and remote work models, they must evolve their security strategies to match new threat landscapes.

A zero-trust architecture has become the gold standard for modern security. This approach assumes that no user or device should be trusted by default, even if they're inside the corporate network. Every access request must be verified, regardless of origin. Implement least-privilege access, micro-segmentation, and continuous verification of all entities.

Identity and Access Management (IAM) is foundational. Multi-factor authentication (MFA) should be mandatory for all users, especially for privileged accounts. Implement single sign-on (SSO) where possible to reduce password fatigue and improve security. Regularly audit permissions and remove unnecessary access rights.

Cloud security requires shared responsibility understanding. While cloud providers secure the infrastructure, customers must secure their data, applications, and configurations. Use cloud-native security tools, implement encryption for data at rest and in transit, and regularly audit cloud configurations for compliance with security best practices.

Endpoint security has evolved beyond traditional antivirus. Modern solutions include endpoint detection and response (EDR), application control, and device health verification. For remote workers, consider secure access service edge (SASE) solutions that combine network security with WAN capabilities.

Security awareness training remains crucial. Phishing attacks continue to be a primary attack vector. Regular training, simulated phishing campaigns, and clear security policies help create a security-conscious culture. Remember: technology solutions are only effective when combined with informed, vigilant users.`
    },
    {
      id: 6,
      title: "Building Scalable Software Architecture: Modern Approaches",
      excerpt: "Design principles and patterns for creating scalable, maintainable, and high-performance software systems.",
      date: "22 Mar, 2025",
      author: "Lisa Thompson",
      category: "Software Development",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      delay: "540ms",
      content: `Scalable software architecture is essential for applications that need to handle growth—whether in user numbers, data volume, or feature complexity. Modern approaches focus on principles that enable systems to scale efficiently while remaining maintainable and resilient.

Microservices architecture has become the standard for large-scale applications. By decomposing systems into small, independently deployable services, teams can scale components independently, use different technologies where appropriate, and deploy updates without affecting the entire system. However, microservices introduce complexity in communication, data consistency, and operational management. Service mesh solutions like Istio help manage this complexity.

Event-driven architecture complements microservices by enabling loose coupling between components. Services communicate through events rather than direct API calls, allowing for better scalability and resilience. Event streaming platforms like Apache Kafka enable real-time data processing and provide durable event storage for replay and analytics.

Database design for scalability requires careful consideration. Polyglot persistence—using different database technologies for different data needs—is often necessary. Consider time-series databases for metrics, graph databases for relationships, and distributed SQL databases for transactional data. Implement caching strategies with Redis or Memcached to reduce database load.

API design principles impact scalability significantly. Use GraphQL for flexible data retrieval, especially for mobile applications with varying data needs. Implement rate limiting, caching headers, and proper versioning. Consider API gateways for request routing, composition, and protocol translation.

Resilience patterns are crucial for scalable systems. Implement circuit breakers to prevent cascading failures, retries with exponential backoff for transient errors, and bulkheads to isolate failures. Use chaos engineering to test system resilience proactively.

Monitoring and observability must be designed into the architecture from the beginning. Implement distributed tracing, structured logging, and comprehensive metrics. Use this data to make informed decisions about scaling, optimization, and troubleshooting.`
    }
  ];

  const subTitle = "News";
  const mainTitle = "Our Latest News & Blog";

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      <section id="blog" className="py-[30px] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1488px]">
          {/* Title Section */}
          <div className="flex flex-wrap justify-between items-end -mx-3">
            {/* Left Column - Title */}
            <div className="w-full lg:w-6/12 px-3">
              <div className="mb-[42px] relative z-10 -mt-4">
                {/* Sub Title */}
                <span
                  className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-7 relative pb-1 animate-slideInLeft"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    animationDelay: '0ms',
                  }}
                >
                  {renderAnimatedText(subTitle)}
                </span>

                {/* Main Title */}
               <h2
  className="
    text-[36px] 
    sm:text-[64px] 
    font-bold 
    leading-tight 
    text-gray-900 
    mb-5 
    -mt-7 
    animate-slideInLeft
  "
  style={{
    fontFamily: '"Space Grotesk", sans-serif',
    animationDelay: '0ms',
  }}
>
  {renderAnimatedText(mainTitle)}
</h2>

              </div>
            </div>

            {/* Right Column - Button */}
           
          </div>

          {/* Blog Posts Grid */}
          <div className="flex flex-wrap -mx-3 -mt-15">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className={`w-full lg:w-1/2 xl:w-1/3 px-3 mt-10 animate-slideInUp`}
                style={{
                  animationDelay: post.delay,
                }}
              >
                <div className="group h-full flex flex-col">
                  {/* Image */}
                  <div className="rounded-[30px] overflow-hidden mb-6 flex-shrink-0">
                    <button 
                      onClick={() => openModal(post)}
                      className="block w-full text-left"
                    >
                      <img
                        alt={post.title}
                        src={post.image}
                        className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      {/* Date */}
                      <span className="inline-flex items-center text-gray-600 text-sm">
                        <i className="far fa-calendar mr-2 text-blue-600" />
                        {post.date}
                      </span>

                      {/* Author */}
                      <span className="inline-flex items-center text-gray-600 text-sm">
                        <i className="far fa-user mr-2 text-blue-600" />
                        {post.author}
                      </span>

                      {/* Read Time */}
                      <span className="inline-flex items-center text-gray-600 text-sm">
                        <i className="far fa-clock mr-2 text-blue-600" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 flex-1">
                      <button
                        onClick={() => openModal(post)}
                        className="text-[24px] font-bold text-gray-900 leading-[1.42] relative inline-block hover:text-blue-600 transition-colors duration-300 text-left w-full"
                        style={{
                          fontFamily: '"Space Grotesk", sans-serif',
                        }}
                      >
                        {post.title}
                      </button>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => openModal(post)}
                      className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mt-auto w-fit"
                    >
                      Read More
                      <i className="fas fa-long-arrow-right ml-2 text-sm relative transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={closeModal}
          />
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white transition-colors shadow-lg"
              >
                <i className="fas fa-times text-xl" />
              </button>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero Image */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="far fa-calendar mr-2 text-blue-600" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="far fa-user mr-2 text-blue-600" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="far fa-clock mr-2 text-blue-600" />
                      {selectedPost.readTime}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full">
                      {selectedPost.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {selectedPost.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-lg text-gray-700 mb-8 font-medium">
                    {selectedPost.excerpt}
                  </p>

                  {/* Full Content */}
                  <div className="prose prose-lg max-w-none mb-8">
                    {selectedPost.content?.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                    {/* <a
                      href={`/blog/${selectedPost.id}`}
                      className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slideInLeft {
          animation: slideInLeft 0.9s ease forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.9s ease forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Modal animations */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-content {
          animation: modalFadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default BlogSection;