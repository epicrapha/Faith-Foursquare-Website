import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Music, BookOpen, Users, Heart } from 'lucide-react';

const Services = () => {
    const services = [
        { day: "Sunday", time: "10:00 AM", name: "Worship Service", icon: Music, color: "text-primary-red" },
        { day: "Friday", time: "7:00 PM", name: "Bible Study", icon: BookOpen, color: "text-blue-600" },
        { day: "Saturday", time: "7:00 PM", name: "Prayer Meeting", icon: Heart, color: "text-purple-600" },
        { day: "Saturday", time: "5:00 PM", name: "Children's School", icon: Users, color: "text-orange-500" },
        { day: "Saturday", time: "1:00 PM", name: "Youth Fellowship", icon: Users, color: "text-green-600" },
    ];

    return (
        <>
            <Helmet>
                <title>Service Times | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Join us for worship, Bible study, prayer meetings, and more. View our weekly service schedule and plan your visit." />
            </Helmet>
            <div className="pt-10 pb-20">
                <div className="bg-neutral-softGray py-20 px-4 text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-neutral-charcoal">
                        Join Us This Week
                    </h1>
                    <p className="text-xl text-neutral-deepGray max-w-2xl mx-auto">
                        Grow in your relationship with God through worship, teaching, fellowship, and prayer.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4">
                    {/* Service Times Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary-green hover:-translate-y-1 transition-transform">
                                <div className="flex justify-between items-start mb-4">
                                    <service.icon size={32} className={service.color} />
                                    <span className="bg-neutral-softGray text-neutral-charcoal px-3 py-1 rounded-full text-sm font-bold">
                                        {service.day}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-neutral-charcoal">{service.name}</h3>
                                <div className="flex items-center text-lg font-medium text-neutral-deepGray">
                                    <Clock size={20} className="mr-2 text-accent-gold" />
                                    {service.time}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Location & Worship Style */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 font-serif text-primary-green">Worship Style</h2>
                            <p className="text-lg text-neutral-deepGray mb-6 leading-relaxed">
                                Our worship is contemporary, vibrant, and Spirit-led. We believe in expressing our love for God through music, prayer, and the lifting of hands. Whether you prefer hymns or modern worship songs, our heart is to encounter the presence of God together.
                            </p>
                            <div className="bg-primary-red/10 p-6 rounded-xl border border-primary-red/20">
                                <h3 className="font-bold text-primary-red mb-2">What about my kids?</h3>
                                <p className="text-neutral-deepGray">
                                    We have a dedicated Children's School on Saturdays and special programs during Sunday services to ensure your children learn about Jesus in a fun, safe environment.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-2 rounded-2xl shadow-xl">
                            {/* Map Placeholder */}
                            <div className="aspect-square bg-neutral-softGray rounded-xl flex items-center justify-center relative overflow-hidden">
                                <MapPin size={64} className="text-primary-green animate-bounce" />
                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 text-center">
                                    <p className="font-bold text-neutral-charcoal">123 Faith Avenue, City</p>
                                    <a href="#" className="text-primary-red text-sm font-bold hover:underline">Get Directions</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
