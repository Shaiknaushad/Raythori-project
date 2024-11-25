import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Raythori</h3>
            <p className="text-green-200">
              Connecting farmers and buyers directly, eliminating middlemen for better prices and fresher produce.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-green-200">
              <li>Email: info@raythori.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Bangalore, India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Raythori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}