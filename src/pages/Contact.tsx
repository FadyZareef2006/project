import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Contact Info Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-amber-300 mb-4">Contact Us</h1>
            <p className="text-amber-500 max-w-2xl mx-auto">
              Get in touch with us for any questions about our services or to discuss your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8 text-amber-300" />,
                title: 'Phone',
                info: '(555) 123-4567',
                subInfo: 'Mon-Fri 9am-5pm'
              },
              {
                icon: <Mail className="h-8 w-8 text-amber-300" />,
                title: 'Email',
                info: 'info@EVICOcontractors.com',
                subInfo: '24/7 Support'
              },
              {
                icon: <MapPin className="h-8 w-8 text-amber-300" />,
                title: 'Office',
                info: '123 Construction Ave',
                subInfo: 'City, ST 12345'
              },
              {
                icon: <Clock className="h-8 w-8 text-amber-300" />,
                title: 'Hours',
                info: 'Mon-Fri 9am-5pm',
                subInfo: 'Sat-Sun Closed'
              }
            ].map((item, index) => (
              <div key={index} className="text-center text-amber-500">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-1">{item.info}</p>
                <p className="text-amber-500">{item.subInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}