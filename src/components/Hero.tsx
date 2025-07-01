import React from 'react';
import Header from './Header';
import { Target, Eye, Award, Globe,  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Palette, 
  Settings, 
  Zap,

  Bot,
  BarChart3,
  Headphones, 
  Phone,
  CheckCircle} from 'lucide-react';

const HomePage = () => {
    const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure to optimize performance and cost-efficiency.'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design and management for reliable data storage.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approaches for engaging digital experiences.'
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions leveraging AI and ML technologies.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with analytics tools.'
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment with automation.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance your applications speed and efficiency.'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 technical support and ongoing maintenance.'
    }
  ];
  return (
    <div className="relative">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business Digitally
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We deliver cutting-edge software solutions tailored to your unique needs
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

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
                 <div>
                   <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                   <p className="text-gray-600 mb-6">
                     Founded in 2020, Novapex Infohub emerged from a passion for technology and a vision to 
                     bridge the gap between complex business challenges and elegant software solutions. 
                     Our team of expert developers, designers, and strategists work collaboratively to 
                     deliver exceptional results.
                   </p>
                   <p className="text-gray-600 mb-6">
                     We believe in the power of innovation, quality craftsmanship, and building 
                     long-lasting partnerships with our clients. Every project we undertake is 
                     an opportunity to push boundaries and set new standards in software excellence.
                   </p>
                   <div className="flex space-x-4">
                     <div className="text-center">
                       <div className="text-3xl font-bold text-blue-600">5+</div>
                       <div className="text-gray-600">Years Experience</div>
                     </div>
                     <div className="text-center">
                       <div className="text-3xl font-bold text-blue-600">50+</div>
                       <div className="text-gray-600">Team Members</div>
                     </div>
                     <div className="text-center">
                       <div className="text-3xl font-bold text-blue-600">25+</div>
                       <div className="text-gray-600">Countries Served</div>
                     </div>
                   </div>
                 </div>
                 <div className="relative">
                   <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                     <h4 className="text-2xl font-bold mb-4">Why Choose Novapex Infohub?</h4>
                     <ul className="space-y-3">
                       <li className="flex items-center space-x-3">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                         <span>Expert team with proven track record</span>
                       </li>
                       <li className="flex items-center space-x-3">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                         <span>Cutting-edge technologies and methodologies</span>
                       </li>
                       <li className="flex items-center space-x-3">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                         <span>Agile development process</span>
                       </li>
                       <li className="flex items-center space-x-3">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                         <span>24/7 support and maintenance</span>
                       </li>
                       <li className="flex items-center space-x-3">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                         <span>Transparent communication</span>
                       </li>
                     </ul>
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
     <section id="portfolio" className="min-h-screen py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        See examples of our work and client success stories
      </p>
    </div>

    {/* Portfolio items */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Gym Project */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
          <img 
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
            alt="Gym Management System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            Gym
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">FitPro Gym Management</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Member portal & class booking
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Trainer scheduling tools
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Progress tracking analytics
            </li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" />
            Contact About This Project
          </button>
        </div>
      </div>

      {/* Restaurant Project */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
          <img 
            src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg" 
            alt="Restaurant Website"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            Restaurant
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Gourmet Bites Restaurant</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Online table reservations
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Digital menu with food ordering
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Customer review system
            </li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" />
            Contact About This Project
          </button>
        </div>
      </div>

      {/* Manpower/Housekeeping Project */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
          <img 
            src="https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg" 
            alt="Housekeeping Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            Service
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">CleanPro Housekeeping</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              On-demand service booking
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Real-time staff tracking
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              Quality control system
            </li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Phone className="h-4 w-4 mr-2" />
            Contact About This Project
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Careers Section */}
        <section id="careers" className="min-h-screen py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're always looking for talented individuals to join our growing team
              </p>
            </div>
            {/* Careers content */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your project? Contact us today
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">123 Tech Park, Innovation City</p>
                    </div>
                  </div>
                  {/* Add more contact methods */}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  {/* Add more form fields */}
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Novapex Infohub</h3>
              <p className="text-gray-400">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            {/* Add footer columns */}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Novapex Infohub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;