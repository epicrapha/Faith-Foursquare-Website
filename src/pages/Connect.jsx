import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, UserPlus, Heart, Hand, MessageCircle } from 'lucide-react';
import { clsx } from 'clsx';

const Connect = () => {
    const [activeTab, setActiveTab] = useState('visitor');

    const tabs = [
        { id: 'visitor', label: 'New Visitor', icon: UserPlus },
        { id: 'volunteer', label: 'Volunteer', icon: Hand },
        { id: 'ministry', label: 'Join Ministry', icon: Heart },
        { id: 'prayer', label: 'Prayer Request', icon: MessageCircle },
        { id: 'contact', label: 'Contact Us', icon: Mail },
    ];

    return (
        <>
            <Helmet>
                <title>Connect | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Connect with us! Fill out a visitor card, volunteer, join a ministry, submit a prayer request, or contact our team." />
            </Helmet>
            <div className="pt-10 pb-20 bg-neutral-softGray min-h-screen">
                <div className="text-center mb-12 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-neutral-charcoal">
                        Get Connected
                    </h1>
                    <p className="text-xl text-neutral-deepGray max-w-2xl mx-auto">
                        Whether you're new, need prayer, or want to serve — this is the place to connect.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all",
                                    activeTab === tab.id
                                        ? "bg-primary-red text-white shadow-lg transform scale-105"
                                        : "bg-white text-neutral-deepGray hover:bg-gray-100"
                                )}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Form Container */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                        {activeTab === 'visitor' && (
                            <form className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-primary-green">New Visitor Connect Card</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-deepGray mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-deepGray mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-deepGray mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-deepGray mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                </div>
                                <button type="submit" className="w-full bg-primary-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors">
                                    Submit
                                </button>
                            </form>
                        )}

                        {activeTab === 'volunteer' && (
                            <form className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-primary-green">Volunteer Sign-Up</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-deepGray mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-deepGray mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-deepGray mb-2">Area of Interest</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all">
                                        <option>Children's Ministry</option>
                                        <option>Worship Team</option>
                                        <option>Ushering / Greeters</option>
                                        <option>Media / Tech</option>
                                        <option>Outreach</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-primary-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors">
                                    Sign Up to Serve
                                </button>
                            </form>
                        )}

                        {activeTab === 'ministry' && (
                            <div className="text-center animate-fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-primary-green">Join a Ministry</h2>
                                <p className="mb-6 text-neutral-deepGray">Select a ministry to learn more and get involved.</p>
                                <button className="bg-primary-green text-white px-8 py-3 rounded-full font-bold">Contact Ministry Leader</button>
                            </div>
                        )}

                        {activeTab === 'prayer' && (
                            <form className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-primary-green">Prayer Request</h2>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-deepGray mb-2">Your Name (Optional)</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-deepGray mb-2">How can we pray for you?</label>
                                    <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors">
                                    Send Prayer Request
                                </button>
                            </form>
                        )}

                        {activeTab === 'contact' && (
                            <form className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold mb-6 text-primary-green">Contact Us</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-deepGray mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-deepGray mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-deepGray mb-2">Message</label>
                                    <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-green-200 outline-none transition-all"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Connect;
