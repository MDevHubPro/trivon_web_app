import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Assuming react-icons might be there, if not I'll use SVGs. I'll use SVGs to be safe.

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-16 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-bold text-xl">TRIVON<br /><span className="text-purple-500">DIGITAL</span></span>
            </div>
            <p className="leading-relaxed">
              We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Navigations */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigations</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-purple-400 transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-purple-400 transition">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-purple-400 transition">Our Services</Link></li>
              <li><Link href="/#testimonials" className="hover:text-purple-400 transition">Testimonials</Link></li>
              <li><Link href="/case-study" className="hover:text-purple-400 transition">Case Study</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Licence */}
          <div>
            <h4 className="text-white font-bold mb-6">Licence</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition">Term & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1"><svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <span>+1929 999 2523</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1"><svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                <span>hello@trivondigital.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1"><svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                <span>Arrant Services LLC, 1517 FM 359 Rd, Suite 400, Richmond, TX 77406.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© Trivon Digital 2025</p>
        </div>
      </div>
    </footer>
  );
}
