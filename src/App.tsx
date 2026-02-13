import React, { useState } from 'react';
import logo from "/public/nv-3d-logo.png";
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent!');
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
                eNvy CREATIONS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-pink-500 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-pink-500 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-pink-500 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/98 border-t border-pink-500/20">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-500/10 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-500/10 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-500/10 transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-500/10 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-md hover:bg-pink-500/10 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

    <div>
        <img className="logo" src={logo} alt="Logo" width={600} />
    </div>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-pulse">
            Coming Soon!
          </h1>
          <div className="neon-box mx-auto mb-8 max-w-md">
            <p className="text-xl sm:text-2xl text-pink-400">eNvy CREATIONS</p>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Your content here. Describe your vision and what makes your creations unique.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black to-pink-950/20">
        <div className="max-w-4xl">
          <h2 className="section-title">About Us</h2>
          <div className="neon-box">
            <p className="text-lg text-gray-300 mb-4">
              Your about content here. Tell your story and what drives your creative vision.
            </p>
            <p className="text-lg text-gray-300">
              Add more details about your background, mission, and values.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neon-box">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Service One</h3>
              <p className="text-gray-300">Description of your first service offering.</p>
            </div>
            <div className="neon-box">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Service Two</h3>
              <p className="text-gray-300">Description of your second service offering.</p>
            </div>
            <div className="neon-box">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Service Three</h3>
              <p className="text-gray-300">Description of your third service offering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black to-pink-950/20">
        <div className="max-w-6xl w-full">
          <h2 className="section-title">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="neon-box aspect-square flex items-center justify-center">
                <p className="text-gray-400">Gallery Item {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <h2 className="section-title">Get In Touch</h2>
          <div className="neon-box">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pink-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-pink-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-pink-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 eNvy CREATIONS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
