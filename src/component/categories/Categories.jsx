import { FaTree, FaBroom, FaHandHoldingHeart, FaRecycle, FaWater, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router';

const Categories = () => {

    const categories = [
        {
            icon: <FaTree className="text-5xl" />,
            title: "Plantation",
            description: "Join tree and plant growing initiatives to increase green cover and combat climate change in your community.",
            eventCount: "120+ Events",
            color: "from-green-400 to-green-600"
        },
        {
            icon: <FaBroom className="text-5xl" />,
            title: "Cleanup",
            description: "Participate in neighborhood, park, and riverside cleanup drives to keep our environment clean and healthy.",
            eventCount: "85+ Events",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: <FaHandHoldingHeart className="text-5xl" />,
            title: "Donation",
            description: "Support environmental causes through donation drives for saplings, tools, and community development projects.",
            eventCount: "45+ Events",
            color: "from-pink-400 to-pink-600"
        },
        {
            icon: <FaRecycle className="text-5xl" />,
            title: "Recycling",
            description: "Learn and practice waste segregation and recycling techniques to reduce environmental pollution effectively.",
            eventCount: "60+ Events",
            color: "from-emerald-400 to-emerald-600"
        },
        {
            icon: <FaHandHoldingHeart className="text-5xl" />,
            title: "Charity",
            description: "Support underprivileged communities through charity events, food distribution, and essential supplies donation.",
            eventCount: "55+ Events",
            color: "from-purple-400 to-purple-600"
        },
        {
            icon: <FaUserGraduate className="text-5xl" />,
            title: "Awareness",
            description: "Attend workshops and seminars on environmental education, sustainability, and climate action strategies.",
            eventCount: "70+ Events",
            color: "from-orange-400 to-orange-600"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-[#F1F8E9] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Event Categories
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore diverse opportunities to contribute to environmental causes
                        across multiple categories
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className={`bg-gradient-to-r ${category.color} p-6 text-white flex justify-center items-center h-32 group-hover:scale-105 transition-transform duration-300`}>
                                {category.icon}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    {category.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {category.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-secondary font-semibold text-sm">
                                        {category.eventCount}
                                    </span>
                                    <Link
                                        to="/upcomingEvent"
                                        className="text-primary hover:text-secondary font-semibold text-sm transition-colors duration-300"
                                    >
                                        Browse Events →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-4 text-lg">
                        Can't find what you're looking for?
                    </p>
                    <Link
                        to="/createEvent"
                        className="bg-primary hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-block"
                    >
                        Create Your Own Event
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Categories;