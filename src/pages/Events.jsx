import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const Events = () => {
    const events = [
        {
            title: "Worship Night",
            date: "Dec 15",
            time: "7:00 PM",
            location: "Main Sanctuary",
            image: "bg-purple-600"
        },
        {
            title: "Community Outreach",
            date: "Dec 20",
            time: "9:00 AM",
            location: "City Park",
            image: "bg-green-600"
        },
        {
            title: "Christmas Service",
            date: "Dec 25",
            time: "10:00 AM",
            location: "Main Sanctuary",
            image: "bg-red-600"
        },
        {
            title: "New Year's Eve Vigil",
            date: "Dec 31",
            time: "10:00 PM",
            location: "Main Sanctuary",
            image: "bg-blue-900"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Events | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Explore upcoming events, special services, and community outreaches at Faith Foursquare Gospel Church. Join us and be part of something meaningful." />
            </Helmet>
            <div className="pt-10 pb-20">
                <div className="bg-primary-green text-white py-20 px-4 text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-secondary-sage max-w-2xl mx-auto">
                        Be part of the life of the church! Explore upcoming gatherings, special services, and community outreaches.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    {/* Featured Event */}
                    <div className="bg-neutral-charcoal text-white rounded-3xl overflow-hidden shadow-2xl mb-20 flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-primary-red p-12 flex flex-col justify-center">
                            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold self-start mb-6">FEATURED</span>
                            <h2 className="text-4xl font-bold font-serif mb-4">Annual Christmas Celebration</h2>
                            <p className="text-lg text-white/90 mb-8">
                                Join us for a magical evening of carols, performances, and the story of Jesus' birth. Bring your family and friends!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-primary-red px-8 py-3 rounded-full font-bold hover:bg-secondary-sand transition-colors">
                                    Register Now
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 min-h-[300px] bg-[url('https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                            {/* Image Placeholder */}
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <h2 className="text-3xl font-bold text-neutral-charcoal mb-8 font-serif">This Month</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {events.map((event, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                                <div className={`h-32 ${event.image} relative`}>
                                    <div className="absolute top-4 right-4 bg-white text-neutral-charcoal px-3 py-1 rounded-lg font-bold text-sm shadow-sm">
                                        {event.date}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-neutral-charcoal group-hover:text-primary-red transition-colors">{event.title}</h3>
                                    <div className="space-y-2 text-sm text-neutral-deepGray">
                                        <div className="flex items-center">
                                            <Clock size={16} className="mr-2 text-accent-gold" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={16} className="mr-2 text-accent-gold" />
                                            {event.location}
                                        </div>
                                    </div>
                                    <button className="mt-6 w-full py-2 border border-primary-green text-primary-green rounded-lg font-bold hover:bg-primary-green hover:text-white transition-colors">
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;
