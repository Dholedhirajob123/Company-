import React, { useState } from 'react';
import { Users, Coffee, Laptop, Heart, Trophy, Upload, FileText, Mail, Phone } from 'lucide-react';

const Careers = () => {
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const [isHRContactOpen, setIsHRContactOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      requirements: ['5+ years experience', 'React/Node.js', 'Cloud platforms', 'Team leadership'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop'
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      requirements: ['3+ years experience', 'React Native/Flutter', 'App Store deployment', 'UI/UX collaboration'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'Monitoring tools'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
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

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmitResume = (e) => {
    e.preventDefault();
    console.log('Submitting resume for:', selectedPosition?.title);
    console.log('File:', resumeFile.name);
    
    setResumeFile(null);
    setSelectedPosition(null);
    setIsResumeDialogOpen(false);
    
    alert('Resume submitted successfully! Our HR team will contact you soon.');
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setIsResumeDialogOpen(true);
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation.
          </p>
        </div>

        {/* Benefits Section */}
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

        {/* Open Positions with Images */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Position Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={position.image} 
                    alt={position.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
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
                  
                  <button 
                    onClick={() => handleApplyClick(position)}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center gap-2"
                  >
                    <Upload className="h-5 w-5" />
                    <span>Send Resume</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Submit your resume directly to our HR team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsResumeDialogOpen(true)}
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Upload className="h-5 w-5 group-hover:animate-bounce" />
                <span>Upload Resume</span>
              </button>
              <button 
                onClick={() => setIsHRContactOpen(true)}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call HR</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Upload Modal */}
      {isResumeDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {selectedPosition ? `Apply for ${selectedPosition.title}` : 'Submit Your Resume'}
              </h3>
              <button 
                onClick={() => {
                  setIsResumeDialogOpen(false);
                  setResumeFile(null);
                }} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmitResume}>
              <div className="space-y-4">
                {selectedPosition && (
                  <div className="p-3 bg-gray-100 rounded-md mb-4">
                    <p className="font-medium text-gray-900">Position:</p>
                    <p className="text-gray-600">{selectedPosition.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {selectedPosition.department}
                    </p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="resume-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                        >
                          <span>Select a file</span>
                          <input
                            id="resume-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, or DOCX up to 5MB
                      </p>
                    </div>
                  </div>
                  {resumeFile && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {resumeFile.name}
                    </p>
                  )}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <button
                    type="submit"
                    disabled={!resumeFile}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    Submit Resume
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsResumeDialogOpen(false);
                      setResumeFile(null);
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HR Contact Modal */}
      {isHRContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Contact HR Team</h3>
              <button 
                onClick={() => setIsHRContactOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsHRContactOpen(false)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;