import { Receipt, Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <Receipt size={24} className="text-blue-400 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Billify
            </span>
          </div>
          <p className="text-sm text-gray-400">Effortless receipts for modern businesses.</p>
        </div>

        {/* Social links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Twitter size={18} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Linkedin size={18} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Github size={18} /></a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end"><Mail size={14} className="mr-2" /> hello@billify.com</p>
          <p className="flex items-center justify-center md:justify-end"><Phone size={14} className="mr-2" /> +1 555-123-4567</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © 2024 Billify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;