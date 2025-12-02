import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Learn about our mission, vision, beliefs, and the story of Faith Foursquare Gospel Church. Discover what to expect when you visit us." />
            </Helmet>
            <div className="pt-10 pb-20">
                {/* Header */}
                <div className="bg-primary-green text-white py-20 px-4 text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-serif mb-4"
                    >
                        Who We Are
                    </motion.h1>
                    <p className="text-xl text-secondary-sage max-w-2xl mx-auto">
                        Faith Foursquare Gospel Church
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4 space-y-20">
                    {/* Mission & Vision */}
                    <section className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-secondary-sand/30 p-8 rounded-2xl border border-secondary-sand"
                        >
                            <h2 className="text-2xl font-bold text-primary-red mb-4 font-serif">Our Mission</h2>
                            <p className="text-neutral-deepGray leading-relaxed">
                                To lead people into a life-changing relationship with Jesus Christ, equip believers for spiritual growth, and empower them to live out their God-given purpose.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-secondary-sand/30 p-8 rounded-2xl border border-secondary-sand"
                        >
                            <h2 className="text-2xl font-bold text-primary-green mb-4 font-serif">Our Vision</h2>
                            <p className="text-neutral-deepGray leading-relaxed">
                                A church where Jesus is known, disciples are made, families are strengthened, and communities are transformed through the power of the Holy Spirit.
                            </p>
                        </motion.div>
                    </section>

                    {/* Beliefs */}
                    <section>
                        <h2 className="text-3xl font-bold text-neutral-charcoal mb-8 text-center font-serif">What We Believe</h2>
                        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border-l-8 border-primary-red">
                            <p className="text-lg text-neutral-deepGray mb-6">
                                We hold to the core beliefs of the Foursquare Church:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                {[
                                    { title: "Savior", desc: "Jesus died for our sins" },
                                    { title: "Baptizer", desc: "With the Holy Spirit" },
                                    { title: "Healer", desc: "For our bodies & souls" },
                                    { title: "King", desc: "Soon-Coming King" }
                                ].map((belief, idx) => (
                                    <div key={idx} className="p-4 bg-neutral-softGray rounded-lg">
                                        <h3 className="font-bold text-primary-green text-xl mb-2">{belief.title}</h3>
                                        <p className="text-sm text-neutral-deepGray">{belief.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Story */}
                    <section className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-neutral-charcoal mb-6 font-serif">Our Story</h2>
                            <p className="text-neutral-deepGray leading-relaxed mb-4">
                                Faith Foursquare Gospel Church was established to bring hope, truth, and the love of Jesus to our community. From humble beginnings to a thriving church family, we continue to see God's faithfulness in every season.
                            </p>
                            <p className="text-neutral-deepGray leading-relaxed">
                                We are part of the global Foursquare family, dedicated to interdenominational worldwide evangelism.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-video bg-neutral-softGray rounded-2xl overflow-hidden shadow-lg">
                                {/* Placeholder for history image */}
                                <div className="w-full h-full bg-gradient-to-br from-primary-green to-primary-red opacity-20"></div>
                            </div>
                        </div>
                    </section>

                    {/* What to Expect */}
                    <section className="bg-neutral-charcoal text-white p-12 rounded-3xl text-center">
                        <h2 className="text-3xl font-bold mb-6 font-serif">What to Expect</h2>
                        <p className="text-lg text-secondary-sand max-w-2xl mx-auto">
                            When you visit, expect a warm welcome, vibrant worship, and a message that applies to your daily life. We have a casual atmosphere where you can come as you are.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;
