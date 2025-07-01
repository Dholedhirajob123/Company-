import React from 'react';
import { MapPin, Clock, DollarSign, Users, Coffee, Laptop, Heart, Trophy } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$120k - $150k',
      description: 'Join our engineering team to build scalable web applications using modern technologies.',
      requirements: ['5+ years experience', 'React/Node.js', 'Cloud platforms', 'Team leadership'],
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      salary: '$100k - $130k',
      description: 'Develop cutting-edge mobile applications for iOS and Android platforms.',
      requirements: ['3+ years experience', 'React Native/Flutter', 'App Store deployment', 'UI/UX collaboration'],
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $140k',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for our development teams.',
      requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'Monitoring tools'],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Los Angeles',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Create beautiful and intuitive user experiences for our software products.',
      requirements: ['3+ years experience', 'Figma/Sketch', 'User research', 'Prototyping skills'],
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Boston',
      type: 'Full-time',
      salary: '$130k - $160k',
      description: 'Analyze complex data sets to drive business insights and machine learning solutions.',
      requirements: ['Python/R', 'Machine Learning', 'Statistical analysis', 'Data visualization'],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Seattle',
      type: 'Full-time',
      salary: '$140k - $170k',
      description: 'Lead product strategy and work with cross-functional teams to deliver exceptional products.',
      requirements: ['5+ years PM experience', 'Agile methodologies', 'Stakeholder management', 'Technical background'],
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, and vision coverage for you and your family.',
    },
    {
      icon: Laptop,
      title: 'Remote Work',
      description: 'Flexible work arrangements with the option to work remotely or in our modern offices.',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, flexible hours, and a culture that respects your personal time.',
    },
    {
      icon: Trophy,
      title: 'Growth Opportunities',
      description: 'Professional development budget, conference attendance, and clear career progression paths.',
    },
  ];

  return (
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
  );
};

export default Careers;