import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-green text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand & Mission */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-serif">Faith Foursquare</h3>
                        <p className="text-secondary-sage text-sm leading-relaxed">
                            To lead people into a life-changing relationship with Jesus Christ, equip believers for spiritual growth, and empower them to live out their God-given purpose.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-secondary-sage hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-secondary-sage hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-secondary-sage hover:text-white transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-secondary-sand">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Service Times</Link></li>
                            <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link to="/give" className="hover:text-white transition-colors">Give</Link></li>
                            <li><Link to="/connect" className="hover:text-white transition-colors">Connect</Link></li>
                        </ul>
                    </div>

                    {/* Ministries */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Ministries</h4>
                        <ul className="space-y-3 text-sm text-secondary-sand">
                            <li><Link to="/services" className="hover:text-white transition-colors">Children & Youth</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Men's Fellowship</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Women's Fellowship</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Worship Team</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Outreach</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent-gold">Visit Us</h4>
                        <ul className="space-y-4 text-sm text-secondary-sand">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent-gold" />
                                <span>123 Faith Avenue<br />City, State 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0 text-accent-gold" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0 text-accent-gold" />
                                <span>hello@faithfoursquare.church</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-800 mt-12 pt-8 text-center text-sm text-secondary-sage">
                    <p>&copy; {new Date().getFullYear()} Faith Foursquare Gospel Church. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
