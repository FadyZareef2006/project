import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import EVICO from '../assets/EVICO.png';

export default function Footer() {
  return (
    <footer className="bg-black text-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src={EVICO} className="h-8 mt-2 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">EVICO Constracting L.L.C</span>
            </div>
            <p className="mt-4 text-amber-500">
              Building excellence through quality craftsmanship and dedication to customer satisfaction.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-amber-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-amber-500 hover:text-amber-300">Services</Link></li>
              <li><Link to="/projects" className="text-amber-500 hover:text-amber-300">Projects</Link></li>
              <li><Link to="/about" className="text-amber-500 hover:text-amber-300">About Us</Link></li>
              <li><Link to="/contact" className="text-amber-500 hover:text-amber-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-amber-500">Residential Construction</li>
              <li className="text-amber-500">Commercial Construction</li>
              <li className="text-amber-500">Renovations</li>
              <li className="text-amber-500">Project Management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-amber-500">
                <MapPin className="h-5 w-5 mr-2" />
                123 Construction Ave, City, ST 12345
              </li>
              <li className="flex items-center text-amber-500">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-amber-500">
                <Mail className="h-5 w-5 mr-2" />
                info@EVICOcontractors.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-500 mt-8 pt-8 text-center text-amber-500">
          <p>&copy; {new Date().getFullYear()} EVICO Constracting L.L.C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}