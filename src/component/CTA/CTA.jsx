import { Link } from 'react-router';
import { FaArrowRight, FaSeedling, FaUsers, FaHeart } from 'react-icons/fa';

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-white text-6xl">
                    <FaSeedling />
                </div>
                <div className="absolute bottom-10 right-10 text-white text-6xl">
                    <FaHeart />
                </div>
                <div className="absolute top-1/2 left-1/3 text-white text-5xl">
                    <FaUsers />
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to Make a Real Impact?
                </h2>
                
                <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of environmental enthusiasts across Bangladesh 
                    who are transforming communities one event at a time. 
                    Your journey toward a greener future starts here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                    <Link 
                        to="/register" 
                        className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 group"
                    >
                        Get Started Free
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <Link 
                        to="/upcomingEvent" 
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                        Browse Events
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-green-500">
                        <div className="text-4xl font-bold mb-2">500+</div>
                        <div className="text-sm font-semibold">Active Events</div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-green-500">
                        <div className="text-4xl font-bold mb-2">10K+</div>
                        <div className="text-sm font-semibold">Community Members</div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-green-500">
                        <div className="text-4xl font-bold mb-2">50K+</div>
                        <div className="text-sm font-semibold">Trees Planted</div>
                    </div>
                </div>

                <p className="text-white text-sm mt-8 opacity-90">
                    No credit card required • Free forever • Join in 30 seconds
                </p>
            </div>
        </section>
    );
};

export default CTA;