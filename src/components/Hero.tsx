import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code, Smartphone, Brain, Cloud, Play,
  Trophy, 
  TrendingUp, Users, Award,  Phone, 
  Shield, Zap, MapPin,
   User, Mail, Building, MessageSquare, Send
} from 'lucide-react';
import HowWeWorkModal from '../components/HowWeWorkModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCartoon, setCurrentCartoon] = useState(0);
  const [filter, setFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  // Hero slides data
const heroSlides = [
  {
    title: "Transforming Digital Customer Experiences",
    subtitle: "Digital Solutions That Transform",
    description:
      "We create cutting-edge software solutions that drive business growth and digital transformation for companies worldwide.",
    backgroundImage:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1600&h=900&fit=crop" // abstract gradient tech bg
  },
  {
    title: "Empowering Digital Experiences for Businesses",
    subtitle: "Enterprise-Ready Technology",
    description:
      "Build robust, scalable applications that grow with your business needs using modern cloud architecture and best practices.",
    backgroundImage:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1600&h=900&fit=crop" // cloud servers background
  },
  {
    title: "Innovative Digital Solutions",
    subtitle: "Future-Proof Solutions",
    description:
      "Implementing industry-leading security practices and emerging technologies to keep your business ahead of the curve.",
    backgroundImage:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1600&h=900&fit=crop" // futuristic AI background
  }
];



// ...existing code...

  // Professional tech illustrations
  const cartoonImages = [
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
  ];

  // Core services
  const coreServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent systems powered by machine learning',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      color: 'from-orange-500 to-red-500'
   }
  ];

  // Additional services
  const additionalServices = [
  
    {
      title: "E-commerce Solutions",
      description: "Complete online store setups with payment gateways, inventory management, and more.",
      icon: Award
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      icon: Shield
    }
  ];

  // Project data
  const projectCategories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce'];
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A complete online shopping solution with inventory management and payment processing.",
      category: "E-commerce",
      duration: "3 months",
      team: "5 members",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Product catalog with filters",
        "Secure checkout process",
        "Admin dashboard",
        "Customer accounts"
      ],
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg"
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      description: "Workout tracking and coaching app with personalized training plans.",
      category: "Mobile Apps",
      duration: "4 months",
      team: "4 members",
      technologies: ["React Native", "Firebase", "Google Fit API"],
      features: [
        "Custom workout plans",
        "Progress tracking",
        "Video tutorials",
        "Social sharing"
      ],
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
    }
  ];

  // Contact information
  const contactInfo = [
    {
      title: "Email",
      icon: Mail,
      details: ["Contact@novapexhub.com", "support@novapexinfohub.com"],
      action: "Contact@novapexhub.com"
    },
    {
      title: "Phone",
      icon: Phone,
      details: ["+912269718996"],
  
    },
    {
      title: "Office",
      icon: MapPin,
      details: ["Remote"]
    }
  ];

  // Benefits for careers section
  const benefits = [
    {
      icon: Trophy,
      title: "Competitive Benefits",
      description: "Health insurance, retirement plans, and generous vacation time"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Work with the latest technologies and innovative projects"
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Collaborative environment with talented, passionate people"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Clear career paths and professional development support"
    }
  ];




  // Set up intervals for animations
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    const cartoonInterval = setInterval(() => {
      setCurrentCartoon((prev) => (prev + 1) % cartoonImages.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(cartoonInterval);
    };
  }, []);

  // Filter projects based on category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Dynamic Background Image with Overlay */}
  <div className="absolute inset-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentSlideData.backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
  </div>

  {/* Animated Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
  </div>

  {/* Centered Content */}
  <div className="relative z-10 text-center max-w-4xl px-6">
    {/* Title */}
<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-slide-in-down">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
    {currentSlideData.title}
  </span>
</h1>

{/* Subtitle */}
<h2 
  className="text-2xl md:text-3xl font-semibold mb-4 text-blue-500 animate-fade-in"
  style={{ animationDelay: "0.3s" }}
>
  {currentSlideData.subtitle}
</h2>

    {/* Description */}
    <p 
      className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      {currentSlideData.description}
    </p>

    {/* Action Buttons */}
    <div 
      className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
      style={{ animationDelay: "0.9s" }}
    >
      <Link
        to="/services"
        className="bg-gradient-to-r from-[#00C08B] to-[#008C6B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#00A87A] hover:to-[#007A5A] transition-all duration-300 inline-flex items-center justify-center group transform hover:scale-105"
      >
        Explore Services
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="group bg-white/10 backdrop-blur-sm border border-[#00C08B]/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#00C08B]/20 flex items-center justify-center gap-2 transform hover:scale-105"
      >
        <Play className="w-5 h-5 text-[#00C08B] group-hover:scale-110 transition-transform" />
        See How We Work
      </button>
    </div>

    {/* Slide Indicators */}
    <div 
      className="flex justify-center gap-3 mt-10 animate-fade-in"
      style={{ animationDelay: "1.2s" }}
    >
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`h-3 rounded-full transition-all duration-300 ${
            index === currentSlide 
              ? "bg-[#00C08B] w-8 shadow-lg shadow-[#00C08B]/50"
              : "bg-white/30 hover:bg-[#00C08B]/50 w-3"
          }`}
        />
      ))}
    </div>
  </div>
</section>


      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span style={{ color: "#00C08B" }}>Services</span>

            </h2>
    
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From web development to AI solutions, we offer comprehensive services to meet all your technology needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {coreServices.map((service, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group hover:border-[#00C08B] border-2 border-transparent">
          <div className="bg-gradient-to-r from-[#00C08B] to-[#008C6B] p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
            <service.icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#00C08B] transition-colors duration-300">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link
        to="/services"
        className="bg-gradient-to-r from-[#00C08B] to-[#008C6B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#00A87A] hover:to-[#007A5A] transition-all duration-300 inline-flex items-center group transform hover:scale-105"
      >
        View All Services
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
</section>

      {/* Portfolio Section */}
   <section id="portfolio" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our <span style={{ color: "#00C08B" }}>Portfolio</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Explore our collection of successful projects that demonstrate our expertise 
        in delivering high-quality digital solutions.
      </p>
    </div>

    {/* Portfolio Navigation */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            filter === category
              ? 'bg-[#00C08B] text-white shadow-md shadow-[#00C08B]/30'
              : 'bg-white text-gray-700 hover:bg-[#00C08B]/10 hover:text-[#00C08B] shadow-sm border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div 
          key={project.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100 hover:border-[#00C08B]/30"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden h-48">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-[#00C08B] text-white px-3 py-1 rounded-full text-xs font-medium">
              {project.category}
            </span>
          </div>
          
          {/* Project Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00C08B] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies Used */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-[#00C08B] hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-auto bg-gradient-to-r from-[#00C08B] to-[#008C6B] text-white py-2 px-4 rounded-lg hover:from-[#00A87A] hover:to-[#007A5A] transition-all duration-300 text-sm font-medium transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#00C08B]/20"
            >
              View Case Study
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Careers Section */}
<section id="careers" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Join Our <span style={{ color: "#00C08B" }}>Team</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We're always looking for talented individuals who share our passion for innovation 
        and want to make a meaningful impact in the world of technology.
      </p>
    </div>

    {/* Why Work With Us */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#00C08B] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
                <IconComponent className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00C08B] transition-colors duration-300">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-20 bg-gradient-to-r from-[#00C08B] to-[#008C6B] rounded-2xl p-12 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">Don't See the Right Position?</h3>
      <p className="text-xl mb-8 opacity-90">
        We're always interested in connecting with talented professionals. 
        Send us your resume and tell us about yourself!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#00C08B] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-gray-50">
          Send Your Resume
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#00C08B] transition-all duration-300">
          Contact HR Team
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span style={{ color: "#00C08B" }}>Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {info.action && detailIndex === 0 ? (
                              <a 
                                href={info.action} 
                                className="hover:text-blue-600 transition-colors duration-200"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
  
            {/* Contact Form */}
         <div className="lg:col-span-2">
  <div className="bg-white rounded-2xl p-8 shadow-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
              placeholder="Enter your company name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
        >
          <option value="">Select a service</option>
          {[...coreServices, ...additionalServices].map((service, index) => (
            <option key={index} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell us about your project and requirements..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#00C08B] to-[#008C6B] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
      >
        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        <span>Send Message</span>
      </button>
    </form>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* How We Work Modal */}
      <HowWeWorkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header; 