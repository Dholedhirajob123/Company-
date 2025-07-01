import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, Github, Calendar, Users, Code, X, 
  CheckCircle, ArrowRight, Zap, Shield, Database, 
  Globe, Phone, MapPin, Clock, Star, ChevronRight,
  Layout, Server, Cpu, Smartphone, BarChart2, Award,
  Dumbbell, BookOpen, ShoppingCart, Clipboard, Search,
  Truck, MessageSquare, Activity
} from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projectCategories = [
    'All',
    'Restaurant',
    'Gym',
    'Education',
    'Service',
    'E-commerce',
    'Booking'
  ];

  const projects = [
    // Restaurant Project
    {
      id: 1,
      title: 'Delicious Bites Restaurant Website',
      category: 'Restaurant',
      description: 'A modern restaurant website with online menu, table reservations, food ordering, and customer reviews system.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      duration: '3 months',
      team: '4 developers',
      features: ['Online Menu', 'Table Booking', 'Food Delivery', 'Customer Reviews'],
      detailedInfo: {
        overview: 'A comprehensive restaurant website that transforms the dining experience with online ordering, table reservations, and seamless customer engagement features.',
        challenge: 'Traditional restaurants struggled with manual booking systems, limited online presence, and difficulty managing orders during peak hours.',
        solution: 'We created an all-in-one restaurant platform with real-time table booking, online food ordering with payment integration, and customer review management.',
        workflow: [
          'Restaurant Requirements Analysis',
          'Menu & Booking System Design',
          'Payment Gateway Integration',
          'Mobile-Responsive Development',
          'Order Management System',
          'Customer Review Platform',
          'Staff Training & Setup',
          'Launch & Marketing Support'
        ],
        keyFeatures: [
          {
            title: 'Interactive Menu',
            description: 'Digital menu with high-quality images, descriptions, and real-time pricing',
            icon: <Layout className="h-5 w-5 text-blue-600" />
          },
          {
            title: 'Table Reservation System',
            description: 'Real-time table booking with confirmation and reminder notifications',
            icon: <Calendar className="h-5 w-5 text-blue-600" />
          },
          {
            title: 'Online Food Ordering',
            description: 'Complete ordering system with payment processing and delivery tracking',
            icon: <Smartphone className="h-5 w-5 text-blue-600" />
          },
          {
            title: 'Customer Reviews & Ratings',
            description: 'Integrated review system to build trust and improve service quality',
            icon: <Star className="h-5 w-5 text-blue-600" />
          }
        ],
        results: [
          { value: '250%', label: 'Increase in online orders' },
          { value: '80%', label: 'Reduction in booking errors' },
          { value: '4.8/5', label: 'Customer satisfaction' },
          { value: '60%', label: 'Increase in revenue' }
        ],
        testimonials: [
          {
            quote: "This platform transformed our restaurant operations completely. Online orders now account for 40% of our revenue.",
            author: "Michael Chen, Restaurant Owner"
          }
        ]
      }
    },
   
  {
  id: 1,
  title: 'FitTrack Gym Management System',
  category: 'Gym',
  description: 'A comprehensive gym management platform with member tracking, class scheduling, workout analytics, and payment processing.',
  image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  duration: '4 months',
  team: '5 developers',
  features: ['Member Management', 'Class Scheduling', 'Workout Tracking', 'Progress Analytics'],
  detailedInfo: {
    overview: 'An all-in-one gym management solution that helps fitness centers streamline operations, enhance member experience, and track performance metrics with digital tools.',
    challenge: 'Gyms were struggling with manual member management, inefficient class scheduling, and lacked tools to track member progress and engagement.',
    solution: 'We developed a comprehensive system with member portals, trainer dashboards, real-time class scheduling, and detailed workout analytics.',
    workflow: [
      'Gym Requirements Analysis',
      'Member Management System Design',
      'Class Scheduling Integration',
      'Workout Tracking Development',
      'Payment Processing Setup',
      'Mobile App Development',
      'Staff Training & Onboarding',
      'Launch & Support'
    ],
    keyFeatures: [
      {
        title: 'Member Portal',
        description: 'Personalized dashboards with workout history, progress tracking, and payment management',
        icon: <Users className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Class Scheduling',
        description: 'Real-time class booking with capacity management and waitlist features',
        icon: <Calendar className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Workout Analytics',
        description: 'Detailed performance metrics and visual progress tracking',
        icon: <Activity className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Trainer Dashboard',
        description: 'Tools for client management and personalized workout plans',
        icon: <Dumbbell className="h-5 w-5 text-blue-600" />
      }
    ],
    results: [
      {
        value: '90%',
        label: 'Member retention rate'
      },
      {
        value: '3x',
        label: 'More class bookings'
      },
      {
        value: '40%',
        label: 'Reduced administrative work'
      },
      {
        value: '4.9/5',
        label: 'Member satisfaction score'
      }
    ],
    testimonials: [
      {
        quote: "FitTrack revolutionized how we manage our gym. Member engagement has never been higher and our staff spends 60% less time on admin tasks.",
        author: "Sarah Johnson, Gym Owner"
      }
    ]
  }
},
{
  id: 3,
  title: 'EduConnect School Portal',
  category: 'Education',
  description: 'Complete school management system with public website, parent portal, teacher dashboard, and administrative ERP features.',
  image: 'https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'JWT Auth'],
  duration: '6 months',
  team: '8 developers',
  features: [
    'School Website CMS',
    'ERP Login System',
    'Grade Management',
    'Attendance Tracking',
    'Fee Payment Portal',
    'Parent-Teacher Communication'
  ],
  detailedInfo: {
    overview: 'A comprehensive education platform combining a modern school website with a powerful ERP system for complete school administration, student management, and parent engagement.',
    challenge: 'Schools needed an integrated solution that combined their public-facing website with secure internal management tools while maintaining data consistency across platforms.',
    solution: 'Developed a unified platform with role-based access (admin, teacher, student, parent) connecting the public website with backend ERP functionality through a secure login system.',
    workflow: [
      'Stakeholder interviews with school administrators',
      'User journey mapping for all roles',
      'Public website CMS development',
      'ERP backend architecture',
      'Role-based authentication system',
      'Grade and attendance modules',
      'Payment gateway integration',
      'Training and deployment'
    ],
    keyFeatures: [
      {
        title: 'School Website',
        description: 'Customizable CMS for school information, news, and event management',
        icon: <Globe className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'ERP Login System',
        description: 'Secure multi-role authentication with SSO capabilities',
        icon: <Shield className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Admin Dashboard',
        description: 'Complete school management with student records, staff management, and reporting',
        icon: <Database className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Parent Portal',
        description: 'Real-time access to grades, attendance, and school communications',
        icon: <Users className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Teacher Workspace',
        description: 'Grade submission, attendance marking, and lesson planning tools',
        icon: <BookOpen className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Fee Management',
        description: 'Online payment processing with receipts and payment history',
        // icon: <CreditCard className="h-5 w-5 text-blue-600" />
      }
    ],
    results: [
      {
        value: '75%',
        label: 'Reduction in administrative workload'
      },
      {
        value: '95%',
        label: 'Parent engagement rate'
      },
      {
        value: '100+',
        label: 'Schools implemented'
      },
      {
        value: '4.9/5',
        label: 'User satisfaction score'
      }
    ],
    testimonials: [
      {
        quote: "EduConnect transformed how our school operates. The seamless integration between our website and management system saved us countless hours.",
        author: "Dr. Robert Johnson, School Principal"
      },
      {
        quote: "As a parent, I love being able to see my child's progress in real-time through the portal.",
        author: "Lisa Thompson, Parent"
      }
    ]
  }
},
{
  id: 4,
  title: 'CleanPro Manpower Services',
  category: 'Service',
  description: 'On-demand housekeeping and manpower service platform connecting clients with professional cleaners and service providers.',
  image: 'https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg?auto=compress&cs=tinysrgb&w=1200',
  technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Twilio'],
  duration: '5 months',
  team: '5 developers',
  features: [
    'Service Booking System',
    'Worker Management',
    'Real-time Tracking',
    'Quality Assurance',
    'Payment Processing',
    'Client Portal'
  ],
  detailedInfo: {
    overview: 'A complete digital solution for housekeeping and manpower services that streamlines booking, dispatching, and quality control for service businesses.',
    challenge: 'Service providers struggled with manual booking processes, inefficient worker dispatch, and lacked transparency for clients about service status.',
    solution: 'Developed a mobile-friendly platform with real-time booking, GPS tracking of workers, quality assurance checks, and automated payment processing.',
    workflow: [
      'Service provider interviews',
      'Booking flow design',
      'Worker management system',
      'Real-time tracking integration',
      'Quality control features',
      'Payment processing setup',
      'Mobile app development',
      'Deployment and training'
    ],
    keyFeatures: [
      {
        title: 'Instant Booking',
        description: '24/7 online booking with immediate confirmation',
        icon: <Calendar className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Worker Management',
        description: 'Complete staff profiles with skills, ratings and availability',
        icon: <Users className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Live Tracking',
        description: 'Real-time GPS tracking of service providers',
        icon: <MapPin className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Quality Control',
        description: 'Post-service checklists and client ratings',
        icon: <CheckCircle className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Flexible Payments',
        description: 'Multiple payment options with automated invoicing',
        // icon: <CreditCard className="h-5 w-5 text-blue-600" />
      },
      {
        title: 'Client Portal',
        description: 'Service history, receipts and rebooking',
        icon: <Clipboard className="h-5 w-5 text-blue-600" />
      }
    ],
    results: [
      {
        value: '3x',
        label: 'More bookings'
      },
      {
        value: '90%',
        label: 'On-time arrivals'
      },
      {
        value: '4.8/5',
        label: 'Average service rating'
      },
      {
        value: '50%',
        label: 'Reduced admin costs'
      }
    ],
    testimonials: [
      {
        quote: "CleanPro transformed our small cleaning business into a professional service with 3x more clients in just 6 months.",
        author: "Maria Gonzalez, Cleaning Business Owner"
      },
      {
        quote: "I love being able to see exactly when my cleaner will arrive and track their progress to my home.",
        author: "David Wilson, Regular Client"
      }
    ]
  }
},


  
 

  
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectDetails = (project: React.SetStateAction<null>) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  };

  const closeProjectDetails = (e) => {
    if (e.target === e.currentTarget || e.target.closest('.modal-close-button')) {
      setSelectedProject(null);
      document.body.style.overflow = 'unset';
    }
  };

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loading Portfolio...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg h-96 animate-pulse">
                <div className="bg-gray-200 h-48 w-full"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of business websites and applications that showcase our expertise 
            in creating tailored digital solutions for various industries.
          </p>
        </div>

        {/* Category Filters */}
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
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
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
                
                <div className="mb-4">
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
                
                <div className="mt-auto flex space-x-3">
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                  <button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Contact us"
                  >
                    <Phone className="h-4 w-4" />
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

        {/* Portfolio Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Websites Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Business Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Business Types We Serve */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Business Types We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Restaurants', 'Gyms & Fitness', 'Schools & Education', 
              'Cleaning Services', 'E-commerce', 'Healthcare',
              'Beauty Salons', 'Consulting', 'Real Estate',
              'Legal Services', 'Automotive', 'Travel & Tourism'
            ].map((business, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="font-medium text-gray-900">{business}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeProjectDetails}
        >
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center shadow-sm z-10">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={closeProjectDetails}
                className="modal-close-button p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Close project details"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Project Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative rounded-xl overflow-hidden h-64">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {selectedProject.detailedInfo.overview}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{selectedProject.team}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Cpu className="h-4 w-4" />
                      <span>{selectedProject.technologies.length} Technologies</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Server className="h-4 w-4" />
                      <span>{selectedProject.features.length} Key Features</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Code className="h-6 w-6 text-blue-600 mr-2" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-lg font-medium flex items-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-red-600 mr-2" />
                    The Challenge
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedInfo.challenge}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="h-6 w-6 text-green-600 mr-2" />
                    Our Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedInfo.solution}
                  </p>
                </div>
              </div>

              {/* Development Workflow */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ArrowRight className="h-6 w-6 text-blue-600 mr-2" />
                  Development Process
                </h3>
                <div className="relative">
                  <div className="absolute left-5 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {selectedProject.detailedInfo.workflow.map((step, index) => (
                      <div key={index} className="relative pl-12">
                        <div className="absolute left-5 top-0 h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center -ml-3">
                          {index + 1}
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <p className="font-medium text-gray-900">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features & Functionality</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.detailedInfo.keyFeatures.map((feature, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        {feature.icon}
                        <span className="ml-2">{feature.title}</span>
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white mb-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart2 className="h-6 w-6 mr-2" />
                  Measurable Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedProject.detailedInfo.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <div className="text-2xl font-bold mb-1">{result.value}</div>
                        <div className="text-sm">{result.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              {selectedProject.detailedInfo.testimonials && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    Client Testimonials
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{selectedProject.detailedInfo.testimonials[0].quote}"
                    </blockquote>
                    <p className="font-medium text-gray-900">
                      — {selectedProject.detailedInfo.testimonials[0].author}
                    </p>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h4>
                <p className="text-gray-600 mb-6">Let us help you build a professional website that grows your business and engages your customers.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      closeProjectDetails();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Book Free Consultation</span>
                  </button>
                  <button 
                    onClick={() => {
                      closeProjectDetails();
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <Globe className="h-5 w-5" />
                    <span>View Our Services</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;