import { FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#1B5E20] to-[#2D5016] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-9xl">🌳</div>
                <div className="absolute bottom-10 right-10 text-9xl">🌱</div>
                <div className="absolute top-1/2 left-1/3 text-7xl">🍃</div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="text-center space-y-6">

                    <div className="inline-flex items-center gap-2 bg-[#7CB342] px-4 py-2 rounded-full text-sm font-medium">
                        <FaLeaf className="text-white" />
                        <span>Join the Green Revolution</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Plant Today,
                        <br />
                        <span className="text-[#7CB342]">Breathe Tomorrow</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Join tree plantation events in your community and make a real impact.
                        Together, we can create a greener Bangladesh, one tree at a time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                        <Link
                            to="/upcomingEvent"
                            className="bg-[#7CB342] hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <FaCalendarAlt />
                            Upcoming Events
                        </Link>
                        <Link
                            to="/createEvent"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30"
                        >
                            Create Event
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-10">
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-[#7CB342]">500+</p>
                            <p className="text-sm text-gray-300 mt-1">Events Organized</p>
                        </div>
                        <div className="text-center border-l border-r border-white/20">
                            <p className="text-3xl md:text-4xl font-bold text-[#7CB342]">10K+</p>
                            <p className="text-sm text-gray-300 mt-1">Trees Planted</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-[#7CB342]">5K+</p>
                            <p className="text-sm text-gray-300 mt-1">Active Members</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;