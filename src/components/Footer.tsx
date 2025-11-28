import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1d3557' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10" fill="white" />
              <span className="font-bold text-xl">Quick Safety Service</span>
            </div>
            <p className="text-white/80 mb-4">
              Your trusted partner for professional home and safety services. Available 24/7 for your peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('booking')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Booking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Security Guard</li>
              <li>Bouncer</li>
              <li>Servant / Aaya</li>
              <li>AC Repair</li>
              <li>Electrician</li>
              <li>PSO</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#a8dadc' }} />
                <div>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                  <p className="text-white/80">+1 (555) 987-6543</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#a8dadc' }} />
                <p className="text-white/80">info@quicksafety.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#a8dadc' }} />
                <p className="text-white/80">123 Safety Street, Service City, SC 12345</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {currentYear} Quick Safety Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
