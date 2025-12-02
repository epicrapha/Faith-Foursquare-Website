import React from 'react';
import { Helmet } from 'react-helmet-async';

const Staff = () => {
    const team = [
        {
            role: "Lead Pastor",
            name: "Rev. John Doe",
            bio: "Pastor John has been leading Faith Foursquare for over 10 years. He has a heart for missions and seeing families restored by God's love.",
            image: "bg-gray-300"
        },
        {
            role: "Assistant Pastor",
            name: "Pst. Jane Smith",
            bio: "Pastor Jane oversees our discipleship and women's ministries. She is passionate about teaching the Word and mentoring the next generation.",
            image: "bg-gray-300"
        },
        {
            role: "Youth Pastor",
            name: "Bro. Mike Johnson",
            bio: "Mike leads our vibrant youth ministry with energy and truth. He loves connecting with students and helping them navigate life with faith.",
            image: "bg-gray-300"
        },
        {
            role: "Worship Director",
            name: "Sis. Sarah Lee",
            bio: "Sarah leads our worship team with excellence and anointing. Her desire is to create an atmosphere where people can encounter God.",
            image: "bg-gray-300"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Our Team | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Meet our dedicated pastoral team and ministry leaders who serve with humility, passion, and a heart for God's people." />
            </Helmet>
            <div className="pt-10 pb-20">
                <div className="text-center mb-16 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-neutral-charcoal">
                        Meet Our Team
                    </h1>
                    <p className="text-xl text-neutral-deepGray max-w-2xl mx-auto">
                        We are blessed with dedicated leaders who serve with humility, passion, and a heart for God's people.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center group">
                                <div className={`h-64 ${member.image} relative overflow-hidden`}>
                                    {/* Placeholder for photo */}
                                    <div className="absolute inset-0 bg-neutral-deepGray flex items-center justify-center text-white/20 text-4xl font-bold">
                                        PHOTO
                                    </div>
                                    <div className="absolute inset-0 bg-primary-green/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold border border-white px-4 py-2 rounded-full">View Profile</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-primary-red font-bold text-sm tracking-wider uppercase">{member.role}</span>
                                    <h3 className="text-2xl font-bold mb-3 text-neutral-charcoal font-serif">{member.name}</h3>
                                    <p className="text-neutral-deepGray text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Staff;
