import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591"
            alt="Construction team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">About EVICO Contracting L.L.C</h1>
            <p className="text-xl max-w-2xl">
              Building excellence through quality craftsmanship and dedication to customer satisfaction since 1998.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-blue-600" />,
                title: 'Excellence',
                description: 'Commitment to delivering the highest quality in every project.'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: 'Teamwork',
                description: 'Collaboration and communication are key to our success.'
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-600" />,
                title: 'Timeliness',
                description: 'We respect deadlines and deliver projects on schedule.'
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: 'Integrity',
                description: 'Honest and transparent in all our dealings.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company to success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
                description: '25+ years of construction industry experience.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Project Director',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
                description: 'Expert in project management and client relations.'
              },
              {
                name: 'Michael Chen',
                role: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                description: 'Specializes in innovative construction solutions.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 1998, EVICO Contracting L.L.C has grown from a small local contractor to one of the region's most respected construction companies.
                </p>
                <p className="text-gray-600">
                  Over the past 25 years, we've completed hundreds of successful projects across residential, commercial, and industrial sectors, earning numerous industry awards and certifications along the way.
                </p>
                <p className="text-gray-600">
                  Today, we continue to build on our reputation for excellence, embracing new technologies and sustainable building practices while maintaining our commitment to quality craftsmanship and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt="Historic project"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591"
                alt="Modern project"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
       </section>
    </div>
  );
}