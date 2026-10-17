import React from 'react';

const Pricing = () => {
    return (
        <div>
            <section className="bg-white py-12 px-4">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-2xl font-bold text-center border border-dotted border-blue-400 py-2">
                    Simple, Transparent Pricing
                </h2>

                <p className="text-xs text-gray-400 text-center mt-2 mb-6">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-dotted border-blue-400">

                     
                    <div className="p-3 flex flex-col">
                        <h3 className="text-sm font-semibold">Starter</h3>
                        <p className="text-xs text-gray-400 mt-1">
                            Perfect for getting started
                        </p>

                        <h2 className="text-xl font-bold mt-4">
                            $0<span className="text-xs text-gray-400 font-normal">/Month</span>
                        </h2>

                        <ul className="text-xs text-gray-500 space-y-2 mt-4 mb-6 flex-1">
                            <li>✓ Access to 10 free tools</li>
                            <li>✓ Basic templates</li>
                            <li>✓ Community support</li>
                            <li>✓ 1 project per month</li>
                        </ul>

                        <button className="bg-purple-600 text-white rounded-full py-2 text-xs">
                            Get Started Free
                        </button>
                    </div>

                    
                    <div className="relative p-3 flex flex-col bg-gradient-to-b from-purple-600 to-purple-800 text-white rounded-lg">

                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-200 text-purple-800 rounded-full px-2 py-1 text-[9px] whitespace-nowrap">
                            Most Popular
                        </span>

                        <h3 className="text-sm font-semibold">Pro</h3>
                        <p className="text-xs text-purple-200 mt-1">
                            Best for professionals
                        </p>

                        <h2 className="text-xl font-bold mt-4">
                            $29<span className="text-xs text-purple-200 font-normal">/Month</span>
                        </h2>

                        <ul className="text-xs space-y-2 mt-4 mb-6 flex-1">
                            <li>✓ Access to all premium tools</li>
                            <li>✓ Unlimited templates</li>
                            <li>✓ Priority support</li>
                            <li>✓ Unlimited projects</li>
                            <li>✓ AI guided insights</li>
                            <li>✓ Advanced analytics</li>
                        </ul>

                        <button className="bg-white text-purple-700 rounded-full py-2 text-xs">
                            Start Pro Trial
                        </button>
                    </div>

                    
                    <div className="p-3 flex flex-col">
                        <h3 className="text-sm font-semibold">Enterprise</h3>
                        <p className="text-xs text-gray-400 mt-1">
                            For teams and businesses
                        </p>

                        <h2 className="text-xl font-bold mt-4">
                            $99<span className="text-xs text-gray-400 font-normal">/Month</span>
                        </h2>

                        <ul className="text-xs text-gray-500 space-y-2 mt-4 mb-6 flex-1">
                            <li>✓ Everything in Pro</li>
                            <li>✓ Team collaboration</li>
                            <li>✓ Custom integrations</li>
                            <li>✓ Dedicated support</li>
                            <li>✓ SLA guarantees</li>
                            <li>✓ Custom branding</li>
                        </ul>

                        <button className="bg-purple-600 text-white rounded-full py-2 text-xs">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default Pricing;