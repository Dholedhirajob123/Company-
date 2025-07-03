import React, { useState, useEffect } from 'react';
import { 
  Building2, Star, Briefcase, Trophy, ChevronRight, Play, 
  TrendingUp, Users, Target, Eye, Award, Globe, Code,
  Calendar, Phone, ExternalLink, X, Cpu, Server,
  Shield, Zap, ArrowRight, BarChart2, MapPin, Clock,
  DollarSign, User, Mail, Building, MessageSquare, Send
} from 'lucide-react';

const Header = () => {
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

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages with regular reviews.",
      icon: DollarSign
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work-life balance.",
      icon: Clock
    },
    {
      title: "Career Growth",
      description: "Clear career paths with mentorship and professional development budgets.",
      icon: TrendingUp
    },
    {
      title: "Great Culture",
      description: "Collaborative environment with team events and wellness programs.",
      icon: Users
    }
  ];

  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      description: "Build beautiful, responsive user interfaces using React and modern web technologies.",
      location: "Remote",
      type: "Full-time",
      salary: "$90K - $120K",
      requirements: ["React", "TypeScript", "CSS", "REST APIs"]
    },
    {
      title: "UX Designer",
      department: "Design",
      description: "Create intuitive user experiences and interfaces for our products and clients.",
      location: "San Francisco",
      type: "Full-time",
      salary: "$85K - $110K",
      requirements: ["Figma", "User Research", "Prototyping", "UI Design"]
    }
  ];

  const contactInfo = [
    {
      title: "Email",
      icon: Mail,
      details: ["hello@novapexinfohub.com", "support@novapexinfohub.com"],
      action: "mailto:hello@novapexinfohub.com"
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

  const heroSlides = [
    {
      title: "About Novapex Infohub",
      subtitle: "Leading Tech Education Company",
      description: "Founded in 2018, Novapex Infohub has become a premier technology education company, transforming careers through comprehensive full-stack development training programs with industry-leading results.",
      companyInfo: {
        founded: "2018",
        headquarters: "San Francisco, CA",
        employees: "250+ Expert Instructors",
        mission: "Empowering next-gen developers"
      },
      performance: {
        students: "15,000+",
        completion: "95%",
        placement: "92%",
        satisfaction: "98%"
      },
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      backgroundImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Our Methodology",
      subtitle: "Project-Based Learning Excellence",
      description: "Novapex Infohub's proven methodology combines hands-on projects, real-world applications, and 1:1 mentorship to ensure students gain practical skills that employers demand.",
      companyInfo: {
        approach: "Hands-on Learning",
        mentorship: "1:1 Industry Mentors",
        projects: "Real Client Work",
        support: "24/7 Learning Support"
      },
      performance: {
        projects: "1,200+",
        mentors: "150+",
        hours: "500+",
        technologies: "50+"
      },
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      backgroundImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Success Stories",
      subtitle: "Transforming Careers Since 2018",
      description: "With an industry-leading 92% job placement rate and partnerships with 500+ companies, Novapex Infohub graduates are working at top tech companies worldwide.",
      companyInfo: {
        graduates: "15,000+ Alumni",
        companies: "500+ Partners",
        salaries: "$85K+ Average",
        growth: "40% YoY Growth"
      },
      performance: {
        placement: "92%",
        salary: "$85K",
        companies: "500+",
        retention: "94%"
      },
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      backgroundImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Innovation & Future",
      subtitle: "Pioneering EdTech Excellence",
      description: "Novapex Infohub continues to innovate with AI-powered learning paths, cutting-edge curriculum updates, and strategic partnerships with Fortune 500 companies.",
      companyInfo: {
        innovation: "AI-Powered Learning",
        partnerships: "Fortune 500 Partners",
        research: "EdTech Research Lab",
        expansion: "Global Reach Program"
      },
      performance: {
        innovation: "25+",
        patents: "12",
        awards: "18",
        countries: "15+"
      },
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
      backgroundImage: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const cartoonImages = [
    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: Code
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      icon: Globe
    },
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
      title: "Cloud Services",
      description: "Scalable cloud solutions for hosting, storage, and computing power.",
      icon: Server
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
      icon: Shield
    }
  ];

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
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
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
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Modern responsive website for a financial services company.",
      category: "Web Development",
      duration: "2 months",
      team: "3 members",
      technologies: ["Next.js", "Tailwind CSS", "Contentful CMS"],
      features: [
        "Responsive design",
        "Content management system",
        "Contact forms",
        "SEO optimized"
      ],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectDetails = (project) => {
    setSelectedProject({
      ...project,
      detailedInfo: {
        overview: `This project was developed for ${project.category} needs, providing comprehensive solutions for our client.`,
        challenge: "The client needed a modern solution that could handle their growing business requirements while maintaining excellent performance and user experience.",
        solution: "We implemented a cutting-edge technology stack that provided scalability, security, and an intuitive user interface.",
        workflow: [
          "Requirement gathering and analysis",
          "Wireframing and prototyping",
          "UI/UX design implementation",
          "Backend development",
          "Testing and quality assurance",
          "Deployment and maintenance"
        ],
        keyFeatures: project.features.map(feature => ({
          title: feature,
          description: `This feature provides ${feature.toLowerCase()} functionality that enhances the user experience.`,
          icon: <Zap className="h-5 w-5 text-blue-600" />
        })),
        results: [
          { value: "40%", label: "Increase in conversions" },
          { value: "3x", label: "Faster load times" },
          { value: "95%", label: "User satisfaction" },
          { value: "24/7", label: "Uptime guarantee" }
        ],
        testimonials: [
          {
            quote: "Working with Novapex Infohub was a game-changer for our business. Their team delivered beyond our expectations.",
            author: "John Smith, CEO"
          }
        ]
      }
    });
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
      {/* Hero Section with Novapex Infohub Company Information */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${currentSlideData.backgroundImage})`
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-purple-900/90"></div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-bounce"></div>
        </div>

        {/* Novapex Infohub Company Header */}
        <div className="absolute top-8 left-8 z-20">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Novapex Infohub</h3>
              <p className="text-cyan-300 text-sm">Tech Education Leader</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Content with Company Information Slider */}
          <div className="text-white">
            {/* Company Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30 mb-4">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-semibold">Novapex Infohub Company</span>
              </div>
            </div>

            {/* Company Logo and Title Slider */}
            <div className="mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${currentSlideData.gradient} mb-6 transform transition-all duration-500 hover:scale-110 shadow-2xl`}>
                <Building2 className="w-10 h-10 text-white" />
              </div>
              
              <div className="transition-all duration-500 ease-in-out">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {currentSlideData.title}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed mb-6 max-w-lg">
                  {currentSlideData.description}
                </p>
                
                {/* Company Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Company Info Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-sm font-semibold text-white">Company Info</h3>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(currentSlideData.companyInfo).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300 text-xs capitalize">{key}:</span>
                          <span className="text-cyan-300 text-xs font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <h3 className="text-sm font-semibold text-white">Performance</h3>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(currentSlideData.performance).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300 text-xs capitalize">{key}:</span>
                          <span className="text-green-300 text-xs font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                Start Learning with Novapex Infohub
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/30 flex items-center gap-2">
                <Play className="w-5 h-5" />
                See How Novapex Infohub Works
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 w-8 shadow-lg' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side with Images */}
          <div className="relative">
            {/* Main Slide Image */}
            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-80 object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">{currentSlideData.title}</h3>
                  <p className="text-sm text-gray-200">{currentSlideData.subtitle}</p>
                </div>
                
                {/* Novapex Infohub Badge on Image */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-3 py-1">
                  <span className="text-white text-xs font-bold">Novapex Infohub</span>
                </div>
              </div>
            </div>

            {/* Cartoon/Illustration Slider */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={cartoonImages[currentCartoon]}
                  alt="Novapex Infohub learning"
                  className="w-full h-32 object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs font-semibold bg-black/50 rounded px-2 py-1">Learning Path</span>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={cartoonImages[(currentCartoon + 1) % cartoonImages.length]}
                  alt="Novapex Infohub projects"
                  className="w-full h-32 object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20"></div>
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs font-semibold bg-black/50 rounded px-2 py-1">Practice Labs</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 w-6 text-green-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Success Rate</p>
                  <p className="text-2xl font-bold text-green-400">95%</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-2">
                <Users className="w-6 w-6 text-cyan-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Novapex Infohub Students</p>
                  <p className="text-2xl font-bold text-cyan-400">15K+</p>
                </div>
              </div>
            </div>

            {/* Novapex Infohub Method Card */}
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 max-w-48">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-white text-sm font-semibold">Novapex Infohub Method</span>
              </div>
              <p className="text-gray-200 text-xs leading-relaxed">
                Project-based learning with real industry mentorship and hands-on experience.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
     {/* About Section */}
<section id="about" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About <span className="text-blue-600">Novapex Infohub</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We are a forward-thinking software development company dedicated to 
        creating innovative solutions that empower businesses to thrive in the digital landscape.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
      <div className="relative">
        {/* Rice image on left */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
          <img
            src="https://images.pexels.com/photos/1627169/pexels-photo-1627169.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            alt="Rice fields"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Our Foundations</h3>
              <p className="text-sm">Rooted in tradition, growing with innovation</p>
            </div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Years Experience</p>
              <p className="text-xl font-bold text-blue-600">5+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* PIV image on right */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
          <img
            src="https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            alt="PIV verification"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Secure Identity Verification</h3>
              <p className="text-sm">Trusted PIV solutions for enterprise security</p>
            </div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Security Certifications</p>
              <p className="text-xl font-bold text-blue-600">12+</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Values */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center group">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
          <Target className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Mission</h4>
        <p className="text-gray-600">
          To deliver innovative software solutions that drive business success and create lasting value.
        </p>
      </div>
      <div className="text-center group">
        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
          <Eye className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Vision</h4>
        <p className="text-gray-600">
          To be the leading software development partner, known for excellence and innovation.
        </p>
      </div>
      <div className="text-center group">
        <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
          <Award className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
        <p className="text-gray-600">
          We maintain the highest standards in every aspect of our work and client relationships.
        </p>
      </div>
      <div className="text-center group">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
          <Globe className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h4>
        <p className="text-gray-600">
          Serving clients worldwide with local expertise and global best practices.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive software development services to help businesses 
              transform their ideas into powerful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
<section id="portfolio" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our <span className="text-blue-600">Portfolio</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Explore our collection of successful projects that demonstrate our expertise 
        in delivering high-quality digital solutions across various industries.
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

    {/* Projects Grid with Enhanced Titles and Descriptions */}
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
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                {/* {project.category} */}
              </span>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Project Title with Icon */}
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            </div>
            
            {/* Project Description */}
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            
            {/* Project Metadata */}
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{project.team}</span>
              </div>
            </div>
            
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
            
            {/* Key Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ChevronRight className="h-3 w-3 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-auto flex space-x-3">
              <button 
                onClick={() => openProjectDetails(project)}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Case Study</span>
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center text-sm font-medium"
                aria-label="Contact us about this project"
              >
                <Phone className="h-4 w-4" />
                <span className="ml-1">Inquire</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Empty State */}
    {filteredProjects.length === 0 && (
      <div className="text-center py-12">
        <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No projects found</h3>
        <p className="text-gray-500">We don't have any projects in this category yet.</p>
        <button 
          onClick={() => setFilter('All')}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View all projects
        </button>
      </div>
    )}

    {/* Portfolio CTA */}
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's collaborate to bring your vision to life with our expertise and innovative solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Get a Free Quote
        </button>
        <button 
          onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  </div>

  {/* Project Details Modal */}
  {selectedProject && (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={closeProjectDetails}
    >
      {/* ... (existing modal content remains the same) ... */}
    </div>
  )}
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
              Send us a message and we'll respond as soon as possible.
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
                                target={info.action.startsWith('http') ? '_blank' : undefined}
                                rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
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
  
              {/* Office Image */}
              <div className="mt-8">
                <img 
                  src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Navapexhub Office" 
                  className="w-full h-48 object-cover rounded-2xl"
                />
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
                      {services.map((service, index) => (
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
  
          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">How long does a typical project take?</h4>
                <p className="text-gray-600">Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-12 months. We provide detailed timelines during our initial consultation.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Do you provide ongoing support?</h4>
                <p className="text-gray-600">Yes, we offer comprehensive support and maintenance packages to ensure your software continues to perform optimally. Our support includes bug fixes, updates, and feature enhancements.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">What technologies do you work with?</h4>
                <p className="text-gray-600">We work with a wide range of modern technologies including React, Node.js, Python, Java, cloud platforms (AWS, Azure, GCP), mobile frameworks, and emerging technologies like AI/ML.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">Can you work with our existing team?</h4>
                <p className="text-gray-600">Absolutely! We often collaborate with in-house teams and can provide additional expertise, resources, or take on specific project components based on your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;