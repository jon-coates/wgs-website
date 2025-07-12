// import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig'

import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';
import Button from '../ui/button';
// import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'LinkedIn':
        return Linkedin;
      case 'Instagram':
        return Instagram;
      case 'Facebook':
        return Facebook;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {siteConfig.business.name}
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              {siteConfig.business.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-3 text-brand-600" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-600 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              
              
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                {siteConfig.socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return IconComponent ? (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-600 transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>


          {/* Services - Static list since not in config */}
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#conservation"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Conservation & Digitisation
                </a>
              </li>
              <li>
                <a 
                  href="#archival"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Archival Services
                </a>
              </li>
              <li>
                <a 
                  href="#consultation"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Expert Consultation
                </a>
              </li>
            </ul>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Acnolodgment of Traditional Owers */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className='text-sm text-zinc-500'>We acknowledge the Traditional Custodians of the land we work on, the Turrbal and Jagera peoples, whose stories and cultural heritage have been preserved through countless generations. We pay our respects to their Elders past, present and emerging, and honour their role as the first conservators and storytellers of this Country.</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 sm:mb-0">
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a 
              href="#privacy" 
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;