import { FaSeedling, FaCalendarAlt, FaHandsHelping, FaAward, FaBullhorn, FaMapMarkedAlt } from 'react-icons/fa';

const Services = () => {

    const services = [
        {
            icon: <FaSeedling className="text-5xl" />,
            title: "Tree Plantation Drives",
            description: "Organize and participate in large-scale tree plantation campaigns across Bangladesh. We provide saplings, tools, and expert guidance for successful plantation events."
        },
        {
            icon: <FaCalendarAlt className="text-5xl" />,
            title: "Event Management",
            description: "Create and manage environmental events with ease. Our platform handles registrations, attendance tracking, and post-event impact reports automatically."
        },
        {
            icon: <FaHandsHelping className="text-5xl" />,
            title: "Community Cleanup",
            description: "Connect with volunteers for neighborhood cleanup initiatives. From parks to riversides, organize cleanup drives that keep our communities clean and green."
        },
        {
            icon: <FaAward className="text-5xl" />,
            title: "Recognition Programs",
            description: "Earn badges and certificates for your environmental contributions. Showcase your impact and inspire others with your dedication to sustainability."
        },
        {
            icon: <FaBullhorn className="text-5xl" />,
            title: "Awareness Campaigns",
            description: "Launch educational campaigns about environmental issues. Spread awareness about climate change, waste management, and sustainable living practices."
        },
        {
            icon: <FaMapMarkedAlt className="text-5xl" />,
            title: "Location-Based Discovery",
            description: "Find events near you with our smart location finder. Discover opportunities to volunteer and contribute in your neighborhood or explore events citywide."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Comprehensive solutions for environmental activism and community engagement
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#F1F8E9] to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary group"
                        >
                            <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-3 text-center">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-4 text-lg">
                        Want to learn more about how we can help?
                    </p>
                    <button className="bg-primary hover:bg-[#558B2F] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        Explore All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;