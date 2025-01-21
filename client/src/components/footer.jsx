import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Twitch, 
  Youtube,
  Globe,
  Mail,
  Shield,
  FileText,
  Home,
  Info
} from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            
            {/* Orange accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Main content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand section */}
                    <div className="text-center sm:text-left md:text-left">
                        <h3 className="text-xl font-bold mb-4">ZQG</h3>
                        <p className="text-gray-400 text-sm">
                            Leading the future of competitive gaming and esports entertainment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left md:text-left">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm flex items-center justify-center sm:justify-start md:justify-start gap-2">
                                    <Home className="w-4 h-4" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm flex items-center justify-center sm:justify-start md:justify-start gap-2">
                                    <Globe className="w-4 h-4" />
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm flex items-center justify-center sm:justify-start md:justify-start gap-2">
                                    <Info className="w-4 h-4" />
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    

                    {/* Social Links */}
                    <div className="text-center sm:text-left md:text-left">
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex justify-center sm:justify-start md:justify-start gap-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Twitch className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-sm text-gray-400">
                        Design and maintained by{' '}
                        <a 
                            href="https://chandril365.vercel.app" 
                            className="text-orange-500 hover:text-orange-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @Chandril
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
