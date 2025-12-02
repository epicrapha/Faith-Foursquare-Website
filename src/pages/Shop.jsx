import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
    const products = [
        { name: "Faith T-Shirt", price: "$25.00", category: "Apparel" },
        { name: "Church Mug", price: "$15.00", category: "Accessories" },
        { name: "Sermon Series: Hope", price: "$10.00", category: "Digital" },
        { name: "Journal", price: "$20.00", category: "Stationery" },
    ];

    return (
        <>
            <Helmet>
                <title>Shop | Faith Foursquare Gospel Church</title>
                <meta name="description" content="Browse church merchandise, books, and digital resources. Support the ministry and wear your faith." />
            </Helmet>
            <div className="pt-10 pb-20">
                <div className="bg-neutral-softGray py-20 px-4 text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-neutral-charcoal">
                        Church Store
                    </h1>
                    <p className="text-xl text-neutral-deepGray max-w-2xl mx-auto">
                        Support the ministry and wear your faith.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="aspect-square bg-gray-100 rounded-t-xl flex items-center justify-center text-gray-400">
                                    <ShoppingBag size={48} />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-primary-green font-bold uppercase mb-1">{product.category}</div>
                                    <h3 className="text-lg font-bold text-neutral-charcoal mb-2">{product.name}</h3>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl font-bold text-neutral-charcoal">{product.price}</span>
                                        <button className="bg-neutral-charcoal text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-red transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
