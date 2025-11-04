import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const services = [
    'Income Tax Return',
    'GST Registration',
    'GST Return',
    'Company Registration',
    'Company Compliances',
    'Accounting',
    'Loan Consultancy',
    'Mutual Fund',
    'Tax Planning'
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Consultation', href: '/book' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.builder.io/api/v1/assets/2e3165756011448d8df6628c432b5ba9/logo-9e502f?format=webp&width=800" 
                alt="Griva Consultancy" 
                className="h-10 w-auto filter invert"
              />
              <div>
                <h3 className="text-lg font-bold">Griva Consultancy</h3>
                <p className="text-sm text-primary">Tax & Business Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for comprehensive tax and business solutions. 
              We help individuals and businesses navigate complex tax regulations 
              and achieve financial success.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-gray-300 text-sm">+91 7600510309</p>
                  <p className="text-xs text-gray-400">Mon-Sat 9AM-7PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-gray-300 text-sm">grivaconsultancy@gmail.com</p>
                  <p className="text-xs text-gray-400">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <p className="text-gray-300 text-sm">Business Hours</p>
                  <p className="text-xs text-gray-400">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <div>
                  <a href="https://maps.google.com/?q=102+Lotus+Corporate+House+RTO+Road+Bhavnagar" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-primary">
                    102, Lotus Corporate House, RTO Road, Bhavnagar
                  </a>
                  <p className="text-xs text-gray-400">Office Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Griva Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
