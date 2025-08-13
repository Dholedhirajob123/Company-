import  { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Palette, 
  Settings, 
  Zap,
  Globe,
  Bot,
  BarChart3,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star
} from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure to optimize performance and cost-efficiency.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design and management for reliable data storage.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approaches for engaging digital experiences.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging AI and ML technologies.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with analytics tools.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment with automation.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance your applications speed and efficiency.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 technical support and ongoing maintenance.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

   const testimonials = [
    {
      name: "Praful Nikam",
      role: "Techno Friends",
      content: "The team at Novapex Infohub delivered outstanding results, significantly improving our digital presence and customer interactions. Their expertise is unmatched in the industry.",
      rating: 5,
      // avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      // project: "Enterprise SaaS Platform"
    },
    {
      name: "Rahul D",
      role: "Tech Luster",
      content: "Novapex Infohub transformed our customer experience with their innovative digital solutions. Highly recommend their services for any business looking to enhance engagement.",
      rating: 5,
      // avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      // project: "Cross-platform Mobile App"
    }
    // {
    //   name: "Emily Rodriguez",
    //   role: "Product Manager, CloudScale",
    //   content: "Cloud migration reduced our infrastructure costs by 40% while improving performance. Their team made the complex transition completely seamless.",
    //   rating: 4,
    //   avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    //   project: "AWS Cloud Migration"
    // }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background with office image and gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/95"></div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section with background image */}
        <div className="relative text-center mb-16 py-16 rounded-3xl overflow-hidden">
          {/* Background image for hero section only */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Modern office workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-purple-900/80"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive software development services to help businesses 
              transform their ideas into powerful digital solutions that drive growth and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service image background */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                    <span className="text-sm">Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute top-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 -translate-y-30"></div>
              <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-white rounded-full -translate-x-40 translate-y-40"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with our expert services and cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Get Free Consultation</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
             {/* Customer Feedback Section */}
        <div className="mt-24 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <Quote className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Customer Feedback</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Our clients appreciate the exceptional digital services we provide.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-100"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <p className="text-blue-600 text-sm mt-1">{testimonial.project}</p>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-blue-200 mb-4" />
                      <p className="text-gray-700 text-lg mb-6">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          {/* Client Logos */}
      
        </div>
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Services;