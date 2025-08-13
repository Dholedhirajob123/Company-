import { useState } from 'react';
import { Target, Eye, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Mr. Amol Harne",
      // role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
      description: "As an experienced HR professional and visionary entrepreneur, Amol brings a unique perspective to Novapex Infohub. His strategic thinking and people-first approach lay the foundation for a strong, client-centric organization. Amol oversees operations and ensures the delivery of exceptional services tailored to client needs.",
      color: "blue"
    },
    {
      name: "Mrs. Mrunal Ghenge",
      // role: "Chief Operating Officer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      description: "Mrunal is a creative thinker and problem solver. Her focus on design, quality, and user experience brings life to Novapex Infohub’s projects. She specializes in translating client visions into visually appealing, functional web applications.",
      color: "purple"
    },
    {
      name: "Mrs. Rasika Aswar",
      // role: "Head of Design",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
      description: "Rasika is a dynamic leader with expertise in web development and project management. Her commitment to delivering excellence drives Novapex Infohub's innovative solutions. She plays a pivotal role in leading the technical team and ensuring projects are executed flawlessly.",
      color: "green"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

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
            
            {/* Company Building Image */}
            <div className="mt-8 relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern corporate building" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold">Novapex Infohub Headquarters</h4>
                <p className="text-sm opacity-90">Innovation starts here</p>
              </div>
            </div>
          </div>
          {/* 2222 */}
          <div className="space-y-8">
            {/* CEO Information Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="CEO Portrait" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Mr. Amol Harne</h4>
                  <p className="text-blue-600 font-semibold mb-3">Chief Executive Officer & Founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                   As an experienced HR professional and visionary entrepreneur, Amol brings a unique perspective to Novapex Infohub. His strategic thinking and people-first approach lay the foundation for a strong, client-centric organization. Amol oversees operations and ensures the delivery of exceptional services tailored to client needs.
                  </p>
                 
                </div>
              </div>
            </div>
            
            {/* Why Choose Us Card */}
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

        {/* Team Collaboration Section */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Team collaboration" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-600/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl mx-auto px-8 text-white">
                <h3 className="text-4xl font-bold mb-6">Collaboration at Its Best</h3>
                <p className="text-xl leading-relaxed">
                  Our diverse team of experts works together seamlessly, combining creativity, 
                  technical expertise, and strategic thinking to deliver exceptional results for every project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Workspace Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern office workspace" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Our Modern Workspace</h4>
                <p className="text-sm opacity-90">Where innovation meets collaboration</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Innovation-Driven Environment</h3>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facilities are designed to foster creativity and collaboration. 
                From open-concept workspaces to dedicated innovation labs, every corner of our office 
                is optimized for productivity and breakthrough thinking.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Open Collaboration</h5>
                  <p className="text-sm text-gray-600">Flexible spaces that encourage teamwork</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Innovation Labs</h5>
                  <p className="text-sm text-gray-600">Dedicated areas for experimentation</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Focus Zones</h5>
                  <p className="text-sm text-gray-600">Quiet spaces for deep work</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Tech Hub</h5>
                  <p className="text-sm text-gray-600">Latest tools and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Office Building Section */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Modern office building exterior" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Our Global Presence</h3>
              <p className="text-lg max-w-2xl">
                Strategically located in major tech hubs worldwide, our offices serve as innovation centers 
                that connect local expertise with global opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Architecture Building */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Architectural Excellence</h3>
              <p className="text-gray-600 mb-6">
                Just as we believe in clean, efficient code, our workspace reflects our commitment to 
                clarity, functionality, and aesthetic excellence. Every detail is thoughtfully designed 
                to inspire our team and impress our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Sustainable design principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Energy-efficient systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Smart building technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Wellness-focused amenities</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Clean modern building architecture" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Clean Architecture</h4>
                <p className="text-sm opacity-90">Form follows function</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
     <div className="mb-20 relative">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Co-Founders</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the visionary leaders who drive our company's success and innovation
        </p>
      </div>
      
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Previous team member"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Next team member"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>

        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={`${member.name} Portrait`} 
                  className={`w-20 h-20 rounded-full object-cover border-4 border-${member.color}-100 mx-auto mb-4`}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className={`text-${member.color}-600 font-semibold mb-3`}>{member.role}</p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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