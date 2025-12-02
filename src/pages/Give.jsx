import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CreditCard, Smartphone, Gift, Heart } from 'lucide-react';

const Give = () => {
    return (
        <>
            <Helmet>
                <title>Give | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Partner with us in God's work through tithes, offerings, and missions support. Your generosity helps us reach more people and build the Kingdom." />
            </Helmet>
            <div className="pt-10 pb-20">
                <div className="bg-primary-green text-white py-20 px-4 text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
                        Giving
                    </h1>
                    <p className="text-xl text-secondary-sage max-w-2xl mx-auto">
                        Partner with us in God's work. Your generosity helps us reach more people, support missions, and build the Kingdom of God.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Online Giving */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-red text-center">
                            <div className="w-16 h-16 bg-red-100 text-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
                                <CreditCard size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-neutral-charcoal">Give Online</h2>
                            <p className="text-neutral-deepGray mb-8">
                                Securely give your tithes and offerings using your credit card or bank account.
                            </p>
                            <button className="w-full bg-primary-red text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg">
                                Give Now
                            </button>
                            <div className="mt-4 flex justify-center gap-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 opacity-50" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50" />
                            </div>
                        </div>

                        {/* Bank Transfer */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-green text-center">
                            <div className="w-16 h-16 bg-green-100 text-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                                <Smartphone size={32} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-neutral-charcoal">Bank Transfer</h2>
                            <p className="text-neutral-deepGray mb-6">
                                You can also give directly via bank transfer using the details below:
                            </p>
                            <div className="bg-neutral-softGray p-4 rounded-xl text-left space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-neutral-deepGray">Bank Name:</span>
                                    <span className="font-bold">First Bank</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-deepGray">Account Name:</span>
                                    <span className="font-bold">Faith Foursquare Church</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-deepGray">Account Number:</span>
                                    <span className="font-bold font-mono">1234567890</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why We Give */}
                    <section className="bg-secondary-sand/30 p-10 rounded-3xl text-center">
                        <Heart size={48} className="text-primary-red mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-6 font-serif text-neutral-charcoal">Why We Give</h2>
                        <p className="text-lg text-neutral-deepGray leading-relaxed max-w-2xl mx-auto">
                            "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
                            <br /><span className="font-bold mt-4 block">- Malachi 3:10</span>
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Give;
