
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
  Headphones
} from 'lucide-react';

const Services = () => {
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
  );
};

export default Services;