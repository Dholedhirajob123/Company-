const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Businesses",
      description: "AI is helping companies automate tasks, improve customer experiences, and make data-driven decisions.",
      date: "Sep 3, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442135135-416f8aa26a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Top Services Every Tech Company Should Offer",
      description: "From cloud solutions to AI-driven analytics, discover the must-have services for modern businesses.",
      date: "Aug 20, 2025",
      category: "Services",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Future of Work with AI",
      description: "Artificial Intelligence is reshaping industries. Learn how your company can stay ahead.",
      date: "Aug 10, 2025",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Cloud Computing Trends for 2025",
      description: "Discover the latest developments in cloud technology and how they impact business operations.",
      date: "Jul 28, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices",
      description: "Essential strategies to protect your business from evolving cyber threats in the digital age.",
      date: "Jul 15, 2025",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Digital Transformation Strategies",
      description: "How to successfully navigate the process of digital transformation in your organization.",
      date: "Jun 30, 2025",
      category: "Business",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00C08B] mb-4">Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and news about technology, business, and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group"
            >
              {/* Image with overlay */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#00C08B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center text-white text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  {post.readTime}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00C08B] transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  {/* <span>{post.date}</span> */}
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-[#00C08B] hover:text-[#008c68] font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-white border border-[#00C08B] text-[#00C08B] font-semibold py-3 px-8 rounded-lg hover:bg-[#00C08B] hover:text-white transition-all duration-300">
            Load More Articles
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
