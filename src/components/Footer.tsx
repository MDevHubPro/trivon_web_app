import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-16 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-44 aspect-[16/9] flex items-center justify-center  rounded-lg">
                <Image src={'/assets/headerlogo.png'} alt="bg-2" width={140} height={140} />
              </div>
              {/* <span className="text-white font-bold text-xl">TRIVON<br /><span className="text-purple-500">DIGITAL</span></span> */}
            </div>
            <p className="leading-relaxed">
              We provide you with a convenient and reliable platform for effective business management. Forget about complexities we'll handle everything for your convenience!
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <Image width={14} height={14} src={'/assets/facebook.png'} alt="bg-2" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <Image width={14} height={14} src={'/assets/twitter.png'} alt="bg-2" />

              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <Image width={14} height={14} src={'/assets/instagram.png'} alt="bg-2" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
                <Image width={14} height={14} src={'/assets/linkedin.png'} alt="bg-2" />
              </a>
            </div>
          </div>

          {/* Navigations */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigations</h4>
            <ul className="space-y-3 text-white">
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
            <ul className="space-y-3 text-white">
              <li><Link href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition">Term & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact us</h4>
            <ul className="space-y-4  text-white">
              <li className="flex items-center gap-3">
                <span className="mt-1"><svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <span>+1929 999 2523</span>
              </li>
              <li className="flex items-center gap-3">
                {/* <span className="mt-1"><svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span> */}
                <Image src={'/assets/mail.svg'} alt="bg-2" width={20} height={20} />
                <span>hello@trivondigital.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src={'/assets/location.svg'} alt="bg-2" width={20} height={20} />
                <span>Arrant Services LLC, 1517 FM 359 Rd, Suite 400, Richmond, TX 77406.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© Trivon Digital 2025</p>
        </div>
      </div>
    </footer >
  );
}
