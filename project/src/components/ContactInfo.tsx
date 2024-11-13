import { Phone, Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="py-12 space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Us</h3>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-3 text-lg group">
          <Phone className="text-green-700 group-hover:text-green-600 transition" size={24} />
          <a href="tel:+31623636825" className="text-gray-700 group-hover:text-green-700 transition">
            +31 6 2363 6825
          </a>
        </div>
        
        <div className="flex items-center space-x-3 text-lg group">
          <Mail className="text-green-700 group-hover:text-green-600 transition" size={24} />
          <a href="mailto:lmsmestre@gmail.com" className="text-gray-700 group-hover:text-green-700 transition">
            lmsmestre@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-3 text-lg">
          <MapPin className="text-green-700" size={24} />
          <span className="text-gray-700">Netherlands</span>
        </div>
      </div>
    </div>
  );
}