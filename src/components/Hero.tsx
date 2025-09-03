import React, { useState, useEffect } from 'react';

const NovapexPage = () => {
  const conferenceImage = "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const maintenanceIllustration = "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const appScreenshot = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

  // Custom cursor state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [hoverElement, setHoverElement] = useState(null);

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Detect hover state for elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setHoverElement(element);
    };

    // Track mouse down/up
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans cursor-none">
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-600/20 border-2 border-blue-600 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          scale: isClicking ? '0.5' : '1',
          backgroundColor: hoverElement?.closest('button') ? 'rgba(37, 99, 235, 0.3)' : 'rgba(37, 99, 235, 0.2)',
        }}
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Conference Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${conferenceImage})` }}
        >
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white">
              <span className="block">Novapex Infohub</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
              Join the world's leading developers, designers, and innovators for three days of 
              cutting-edge insights and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Novapex Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  #1 Business Solutions
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Elevate Your Business with 
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Novapex Solutions
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600">
                  Discover innovative strategies and cutting-edge technology designed to propel your business forward in today's competitive market.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">Customized business solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">24/7 expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">Proven results</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium rounded-lg transition-all duration-300">
                  View Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">4.9/5 from 2k+ reviews</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                  alt="Team collaboration at Novapex" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Growth Strategy</h4>
                      <p className="text-sm text-gray-600">Custom solutions for your business</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stat */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    97% Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  App Store Editor's Choice
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Your Mobile
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Experience
                  </span>
                  Perfected
                </h1>
                
                <p className="text-lg text-gray-600">
                  Transform how you work on the go. Our mobile app brings all the power of our platform 
                  to your fingertips with an intuitive, lightning-fast interface.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 12.04C17.32 15.91 14.75 17.5 13.03 17.5C11.63 17.5 10.58 16.81 9.37 16.81C8.14 16.81 6.95 17.5 5.75 17.5C3.73 17.5 1.5 15.13 1.5 10.6C1.5 6.63 4.13 4.33 6.96 4.33C8.28 4.33 9.41 5.03 10.23 5.03C10.99 5.03 12.17 4.33 13.64 4.33C14.92 4.33 16.26 4.85 17.22 5.84C15.49 6.93 14.78 9.22 15.05 12.04H17.05ZM12.63 3.5C12.28 2.3 13.31 1 14.47 1C14.67 2.17 13.77 3.33 12.63 3.5Z"/>
                    </svg>
                    Download for iOS
                  </button>
                  <button className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium rounded-lg transition-all duration-300 flex items-center justify-center">
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.5 3.5 2.5H20.5C20.66 2.5 21 2.91 21 3.5V20.5C21 21.09 20.66 21.5 20.5 21.5H3.5C3.34 21.5 3 21.09 3 20.5ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z"/>
                    </svg>
                    Get on Android
                  </button>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-sm text-gray-600">1M+ Downloads</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">4.8 Rating</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50ms</div>
                  <div className="text-xs text-gray-600">Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-600">Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Sync</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[640px] bg-white rounded-[3rem] p-2 shadow-xl border border-gray-200/50">
                  <div className="w-full h-full bg-gray-100 rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 bg-white">
                      <div className="text-sm font-medium text-gray-900">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-6 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-6 h-2 bg-blue-600 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="h-full">
                      <img 
                        src={appScreenshot}
                        alt="Mobile App Interface"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900/20 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-8 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                  New Update!
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">Sarah Chen</div>
                      <div className="text-xs text-gray-600">Just joined your team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Novapex?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">Get your solutions up and running quickly with our efficient processes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your data and operations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Analytics</h3>
              <p className="text-gray-600">Gain insights with our comprehensive reporting and analysis tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Scheduled Maintenance
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We're Making Things
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Even Better
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Our platform is temporarily unavailable while we implement exciting new features 
              and performance improvements. We'll be back shortly!
            </p>
          </div>

          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-2xl rounded-full"></div>
            <img 
              src={maintenanceIllustration}
              alt="Maintenance Illustration"
              className="relative w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What's Coming Next?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="font-medium">⚡ Enhanced Performance</div>
                  <div className="text-sm text-gray-200">3x faster load times</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">🛡️ Advanced Security</div>
                  <div className="text-sm text-gray-200">Enhanced protection</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">🎨 New Interface</div>
                  <div className="text-sm text-gray-200">Refreshed design</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">🤖 AI Features</div>
                  <div className="text-sm text-gray-200">Smart automation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white hover:bg-gray-100 text-indigo-900 font-medium rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Notified When Live
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Check Status Page
              </button>
            </div>

            <div className="text-center space-y-2">
              <div className="text-sm text-gray-200">
                Estimated completion: <span className="font-medium text-white">2:00 AM UTC</span>
              </div>
              <div className="text-xs text-gray-300">
                Follow us on social media for real-time updates
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovapexPage;