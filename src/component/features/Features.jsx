import { FaGlobeAmericas, FaBolt, FaChartLine, FaUsers } from 'react-icons/fa';

const Features = () => {

    const features = [
        {
            icon: <FaGlobeAmericas className="text-5xl" />,
            title: "Discover Local Events",
            description: "Browse tree plantation events happening in your area. Filter by location, date, and event type to find the perfect opportunity to make a difference."
        },
        {
            icon: <FaBolt className="text-5xl" />,
            title: "Join in Seconds",
            description: "No complicated forms or lengthy processes. Join any event with a single click and start making an environmental impact right away."
        },
        {
            icon: <FaChartLine className="text-5xl" />,
            title: "Track Your Impact",
            description: "Monitor your environmental footprint with personal statistics. Track events attended, trees planted, and celebrate your journey toward a greener future."
        },
        {
            icon: <FaUsers className="text-5xl" />,
            title: "Build Community",
            description: "Join a growing community of environmental enthusiasts. Create events, collaborate with others, and inspire change in your neighborhood."
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-[#F1F8E9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Why Join GreenRoots?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Experience the easiest way to participate in tree plantation events
                        and contribute to a greener Bangladesh
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary group"
                        >
                            <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-4">
                        Ready to make a difference?
                    </p>
                    <button className="bg-secondary hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;