import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Testimonial = () => {

    const testimonials = [
        {
            name: "Rafiq Ahmed",
            location: "Dhaka",
            image: "https://i.pravatar.cc/150?img=12",
            role: "Community Volunteer",
            rating: 5,
            text: "GreenRoots has transformed how I contribute to my community. I've planted over 50 trees in the last six months and met amazing people who share my passion for the environment."
        },
        {
            name: "Nusrat Jahan",
            location: "Chittagong",
            image: "https://i.pravatar.cc/150?img=45",
            role: "Event Organizer",
            rating: 5,
            text: "Creating and managing events has never been easier. The platform handles everything from registrations to impact tracking. Our cleanup drive in Patenga Beach was a massive success!"
        },
        {
            name: "Kamal Hossain",
            location: "Sylhet",
            image: "https://i.pravatar.cc/150?img=33",
            role: "Environmental Activist",
            rating: 5,
            text: "This platform bridges the gap between passion and action. I've participated in 15 events across different categories and earned recognition for my contributions. Highly recommend!"
        },
        {
            name: "Fatima Begum",
            location: "Khulna",
            image: "https://i.pravatar.cc/150?img=47",
            role: "Teacher & Volunteer",
            rating: 5,
            text: "I bring my students to GreenRoots events for hands-on environmental education. It's inspiring to see young minds engaged in real-world sustainability projects."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        What Our Community Says
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Real stories from volunteers who are making a difference
                        through GreenRoots
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#F1F8E9] to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary group relative"
                        >
                            <FaQuoteLeft className="text-4xl text-secondary opacity-20 absolute top-4 right-4" />
                            
                            <div className="flex items-center mb-4">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-secondary"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-primary">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 text-sm" />
                                ))}
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed italic">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-4 text-lg">
                        Join thousands of volunteers making an impact
                    </p>
                    <Link to='/createEvent' className="bg-secondary hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        Start Your Journey
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;