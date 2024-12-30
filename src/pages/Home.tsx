import React from 'react';
import { ArrowRight, CheckCircle2, Trophy, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Your Vision,<br />Exceeding Expectations
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              EVICO Contractors delivers exceptional construction services with unmatched quality and professionalism.
            </p>
            <div className="space-x-4">
              <Link to="/quote" className="bg-amber-500 text-black px-8 py-3 rounded-md hover:bg-amber-800 inline-flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/projects" className="bg-amber-800 text-black
               px-8 py-3 rounded-md hover:bg-gray-100">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-500 mb-4">Our Services</h2>
            <p className="text-amber-600 max-w-2xl mx-auto">
              We offer comprehensive construction services tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                icon: <Wrench className="h-12 w-12 text-black" />,
                title: 'Construction',
                description: 'Full-service construction for residential and commercial projects.'
              },
              {
                icon: <Users className="h-12 w-12 text-black" />,
                title: 'Project Management',
                description: 'Expert project management ensuring timely and efficient completion.'
              },
              {
                icon: <Trophy className="h-12 w-12 text-black" />,
                title: 'Renovations',
                description: 'Quality renovations that transform spaces and add value.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-amber-500 p-8 rounded-lg text-center shadow-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-500 mb-4">Why Choose Us</h2>
            <p className="text-amber-600 max-w-2xl mx-auto">
              With years of experience and a commitment to excellence, we're your trusted partner in construction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Licensed & Insured',
              'Quality Craftsmanship',
              'On-Time Completion',
              'Competitive Pricing',
              'Expert Team',
              'Customer Satisfaction',
              'Project Management',
              'Free Consultations'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-amber-800 flex-shrink-0" />
                <span className="text-amber-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-amber-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <Link to="/contact" className="bg-amber-800 text-black px-8 py-3 rounded-md hover:bg-gray-100 inline-flex items-center">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}