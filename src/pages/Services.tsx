import React from 'react';
import { Building2, Home, Warehouse, Wrench, PaintBucket, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: 'Commercial Construction',
      description: 'Full-service commercial construction including office buildings, retail spaces, and industrial facilities.',
      features: ['New Construction', 'Renovations', 'Tenant Improvements', 'Project Management']
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Residential Construction',
      description: 'Custom home building and residential construction services tailored to your needs.',
      features: ['Custom Homes', 'Additions', 'Remodeling', 'Design-Build']
    },
    {
      icon: <Warehouse className="h-12 w-12 text-blue-600" />,
      title: 'Industrial Construction',
      description: 'Specialized construction services for industrial and manufacturing facilities.',
      features: ['Factory Construction', 'Warehouse Facilities', 'Industrial Renovations', 'Safety Compliance']
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Renovation Services',
      description: 'Complete renovation and remodeling services for all types of properties.',
      features: ['Kitchen Remodels', 'Bathroom Updates', 'Office Renovations', 'Historic Restorations']
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-blue-600" />,
      title: 'Finishing Services',
      description: 'High-quality finishing services to complete your construction project.',
      features: ['Painting', 'Flooring', 'Cabinetry', 'Custom Finishes']
    },
    {
      icon: <HardHat className="h-12 w-12 text-blue-600" />,
      title: 'Project Management',
      description: 'Professional project management services to ensure successful project completion.',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Subcontractor Coordination']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Comprehensive construction services delivered with expertise and dedication to quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to discuss your project needs and vision.' },
              { step: '02', title: 'Planning', description: 'Detailed project planning including timeline and budget.' },
              { step: '03', title: 'Execution', description: 'Professional construction with regular progress updates.' },
              { step: '04', title: 'Completion', description: 'Final inspection and project handover.' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 font-bold text-xl mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}