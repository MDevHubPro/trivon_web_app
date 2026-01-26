import React, { useState } from 'react';

export default function BrandInvestSection() {
    const [activeButton, setActiveButton] = useState('Logo Design');

    const services = [
        'Logo Design',
        'Website Design',
        'E-Commerce',
        'Branding',
        'SEO',
        'Animation'
    ];

    return (
        <div className=" bg-black flex items-center justify-center px-4 ">
            <div className="max-w-6xl w-full">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">

                        <span className="text-white" style={{
                            background: 'linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Invest {''}
                        </span>
                        <span className="text-white" style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 30%, rgba(255, 255, 255, 0.5) 84.77%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            In Your{' '}
                        </span>
                        <span style={{
                            background: 'linear-gradient(258.73deg, #6B2CEC 7.48%, #A156F7 92.51%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Brand
                        </span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
                        Flexible packages designed to fit every business need. Choose the plan that's right for you and get high-quality digital solutions with full support and ownership.
                    </p>
                </div>

                {/* Service Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    {services.map((service) => (
                        <button
                            onClick={() => setActiveButton(service)}
                            className={`px-8 py-3 rounded-full font-medium text-white border  ${activeButton === service
                                ? '' // add border 
                                : 'opacity-80 hover:opacity-100'
                                }`}
                            style={{
                                background: activeButton === service
                                    ? 'linear-gradient(258.73deg, rgba(107, 44, 236, 0.4) 7.48%, rgba(161, 86, 247, 0.4) 92.51%)'
                                    : 'linear-gradient(258.73deg, rgba(107, 44, 236, 0.2) 7.48%, rgba(161, 86, 247, 0.2) 92.51%)',
                                border: activeButton === service
                                    ? '1px solid #FFFFFF80'
                                    : '1px solid rgba(161, 86, 247, 0.3)'
                            }}
                        >
                            {service}
                        </button>

                    ))}
                </div>
            </div>
        </div>
    );
}