import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code, Smartphone, Brain, Cloud, Play,
  Building2, Star, Briefcase, Trophy, ChevronRight,
  TrendingUp, Users, Target, Eye, Award, Globe,
  Calendar, Phone, ExternalLink, X, Cpu, Server,
  Shield, Zap, BarChart2, MapPin, Clock,
  DollarSign, User, Mail, Building, MessageSquare, Send
} from 'lucide-react';
import HowWeWorkModal from '../components/HowWeWorkModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCartoon, setCurrentCartoon] = useState(0);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
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
      description: "We create cutting-edge software solutions that drive business growth and digital transformation for companies worldwide.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
    },
    {
      title: "Empowering Digital Experiences for Businesses",
      subtitle: "Enterprise-Ready Technology",
      description: "Build robust, scalable applications that grow with your business needs using modern cloud architecture and best practices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop"
    },
    {
      title: "Innovative Digital Solutions",
      subtitle: "Future-Proof Solutions",
      description: "Implementing industry-leading security practices and emerging technologies to keep your business ahead of the curve.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
    }
  ];

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
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.",
      icon: Eye
    },
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
  const projectCategories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX'];
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
      details: ["contact@novapexhub.com", "support@novapexinfohub.com"],
      action: "contact@novapexhub.com"
    },
    {
      title: "Phone",
      icon: Phone,
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "tel:+15551234567"
    },
    {
      title: "Office",
      icon: MapPin,
      details: ["123 Tech Street", "San Francisco, CA 94107", "United States"]
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

  // Open positions for careers section
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco / Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description: "Lead the development of our client-facing applications using React and modern web technologies.",
      requirements: [
        "5+ years experience",
        "React expertise",
        "TypeScript",
        "REST APIs"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description: "Create beautiful, intuitive interfaces for our web and mobile applications.",
      requirements: [
        "3+ years experience",
        "Figma/Sketch",
        "User research",
        "Prototyping"
      ]
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

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            {/* Company Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30 mb-4 animate-scale-in">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-semibold">TechVision Solutions</span>
              </div>
            </div>

            {/* Title and Description */}
            <div className="mb-8">
              <div className="transition-all duration-500 ease-in-out">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-slide-in-right">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {currentSlideData.title}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed mb-6 max-w-lg animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  {currentSlideData.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/services"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center group transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                See How We Work
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-3 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 w-8 shadow-lg shadow-cyan-400/50'
                      : 'bg-white/30 hover:bg-white/50 w-3'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side with Images */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Main Slide Image */}
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-80 object-cover transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">{currentSlideData.title}</h3>
                  <p className="text-sm text-gray-200">{currentSlideData.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Tech Illustration Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  src={cartoonImages[currentCartoon]}
                  alt="Tech innovation"
                  className="w-full h-32 object-cover transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <img
                  src={cartoonImages[(currentCartoon + 1) % cartoonImages.length]}
                  alt="Tech solutions"
                  className="w-full h-32 object-cover transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-green-500/40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to AI solutions, we offer comprehensive services to meet all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl w-fit mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Portfolio</span>
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
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
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
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
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
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
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
              Join Our <span className="text-blue-600">Team</span>
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
                  <div key={index} className="text-center group">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
  
          {/* Open Positions */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <DollarSign className="h-4 w-4" />
                      <span>{position.salary}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Requirements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <span 
                          key={reqIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm border"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Don't See the Right Position?</h3>
            <p className="text-xl mb-8 opacity-90">
              We're always interested in connecting with talented professionals. 
              Send us your resume and tell us about yourself!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Send Your Resume
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
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
              Get In <span className="text-blue-600">Touch</span>
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your project and requirements..."
                      ></textarea>
                    </div>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
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