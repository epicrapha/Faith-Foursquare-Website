import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Calendar, Users, Heart, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Discover a community where Jesus is lifted high, people are loved deeply, and lives are transformed. Join Faith Foursquare Gospel Church this Sunday." />
                <meta name="keywords" content="church, faith, foursquare, gospel, worship, community, Jesus" />
            </Helmet>
            <div className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative h-[90vh] flex items-center justify-center text-white">
                    <div className="absolute inset-0 z-0">
                        <img src={heroBg} alt="Worship" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary-green/90"></div>
                    </div>

                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight"
                        >
                            Encounter Jesus,<br />Grow in Faith
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl mb-10 text-secondary-sand/90 font-light"
                        >
                            Discover a community where Jesus is lifted high, people are loved deeply, and lives are transformed.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link to="/services" className="bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-900/50">
                                Join Us This Sunday
                            </Link>
                            <Link to="/connect" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                                I'm New Here
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Welcome Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="text-primary-red font-bold tracking-wider uppercase text-sm"
                        >
                            Welcome Home
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="text-4xl font-bold mt-3 mb-6 text-neutral-charcoal font-serif"
                        >
                            A Place for Everyone
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="text-lg text-neutral-deepGray leading-relaxed"
                        >
                            At Faith Foursquare Gospel Church, we believe that everyone has a place in God's family. Whether you're seeking a church home, exploring faith, or returning to your spiritual journey, we welcome you with open arms. Come experience powerful worship, life-giving teaching, and a Christ-centered community.
                        </motion.p>
                    </div>
                </section>

                {/* Livestream Preview */}
                <section className="py-20 bg-neutral-softGray">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video bg-black rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                                    <Play size={64} className="text-white relative z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                    <span className="absolute bottom-6 left-6 text-white font-bold z-10 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                        Watch Latest Service
                                    </span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-primary-green font-serif">Join Us Online</h2>
                                <p className="text-neutral-deepGray text-lg">
                                    Can't make it in person? Join our live stream every Sunday at 10:00 AM. Experience the worship and message from wherever you are.
                                </p>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-red font-bold hover:text-red-700 transition-colors">
                                    Go to our YouTube Channel <ArrowRight size={20} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ministries Grid */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-neutral-charcoal font-serif mb-4">Our Ministries</h2>
                            <p className="text-neutral-deepGray max-w-2xl mx-auto">
                                We serve every generation with ministries designed to help you grow in faith and connect with others.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Children & Youth", icon: Users, color: "bg-blue-100 text-blue-600" },
                                { title: "Men & Women", icon: Users, color: "bg-orange-100 text-orange-600" },
                                { title: "Worship & Creative", icon: Heart, color: "bg-purple-100 text-purple-600" },
                                { title: "Discipleship", icon: Calendar, color: "bg-green-100 text-green-600" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center group"
                                >
                                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-neutral-charcoal">{item.title}</h3>
                                    <Link to="/services" className="text-sm font-bold text-primary-green hover:text-primary-red transition-colors">Learn More &rarr;</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Events Highlight */}
                <section className="py-20 bg-primary-green text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-red/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <span className="text-secondary-sage font-bold tracking-wider uppercase text-sm">Upcoming</span>
                                <h2 className="text-4xl font-bold mt-2 font-serif">Events & Gatherings</h2>
                            </div>
                            <Link to="/events" className="hidden md:inline-block bg-white text-primary-green px-6 py-3 rounded-full font-bold hover:bg-secondary-sand transition-colors">
                                View All Events
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { day: "SUN", date: "10:00 AM", title: "Sunday Worship Service", desc: "Join us for worship and the word." },
                                { day: "FRI", date: "7:00 PM", title: "Bible Study", desc: "Deep dive into scripture." },
                                { day: "SAT", date: "7:00 PM", title: "Prayer Meeting", desc: "Interceding for our city." }
                            ].map((event, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-red text-white p-3 rounded-lg text-center min-w-[70px]">
                                            <div className="text-xs font-bold opacity-80">{event.day}</div>
                                            <div className="font-bold text-sm">{event.date}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-secondary-sage text-sm">{event.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center md:hidden">
                            <Link to="/events" className="inline-block bg-white text-primary-green px-6 py-3 rounded-full font-bold hover:bg-secondary-sand transition-colors">
                                View All Events
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Connect Banner */}
                <section className="py-24 px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-charcoal font-serif">Ready to take the next step?</h2>
                        <p className="text-lg text-neutral-deepGray mb-8">
                            From worship nights to community outreaches, there's always something meaningful happening at Faith Foursquare.
                        </p>
                        <Link to="/connect" className="inline-block bg-neutral-charcoal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-red transition-colors shadow-lg">
                            Get Connected
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
