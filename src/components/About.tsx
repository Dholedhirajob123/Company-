import React from 'react';
import { Target, Eye, Award, Globe } from 'lucide-react';

const About = () => {
  return (
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
  );
};

export default About;