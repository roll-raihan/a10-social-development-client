import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog = () => {

    const blogs = [
        {
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
            category: "Environmental Impact",
            title: "How Tree Plantation Helps Combat Climate Change",
            excerpt: "Discover the science behind how trees absorb carbon dioxide and contribute to cooling our planet. Learn why every tree matters in the fight against global warming.",
            author: "Dr. Tanvir Rahman",
            date: "December 28, 2024",
            readTime: "5 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500",
            category: "Success Stories",
            title: "Mirpur Cleanup Drive: 500 Volunteers, One Mission",
            excerpt: "Read about our largest cleanup event in Dhaka where volunteers collected over 2 tons of waste and transformed the neighborhood into a cleaner, greener space.",
            author: "Nadia Islam",
            date: "December 25, 2024",
            readTime: "4 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500",
            category: "Community Guide",
            title: "10 Simple Ways to Start Your Environmental Journey",
            excerpt: "New to environmental volunteering? This beginner-friendly guide covers everything from choosing your first event to making a lasting impact in your community.",
            author: "Karim Ahmed",
            date: "December 22, 2024",
            readTime: "6 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500",
            category: "Sustainability",
            title: "The Rise of Urban Forests in Bangladesh",
            excerpt: "Explore how urban plantation initiatives are transforming concrete jungles into green havens. See the positive effects on air quality and mental health.",
            author: "Sabina Yasmin",
            date: "December 20, 2024",
            readTime: "7 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500",
            category: "Innovation",
            title: "Technology Meets Nature: Digital Tools for Conservation",
            excerpt: "Learn how platforms like GreenRoots are leveraging technology to make environmental activism more accessible and measurable for everyone.",
            author: "Fahim Hasan",
            date: "December 18, 2024",
            readTime: "5 min read"
        },
        {
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
            category: "Youth Engagement",
            title: "Empowering the Next Generation of Eco-Warriors",
            excerpt: "Meet the young volunteers leading change in their schools and neighborhoods. Their stories will inspire you to take action today.",
            author: "Rima Akter",
            date: "December 15, 2024",
            readTime: "4 min read"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-[#F1F8E9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Latest from Our Blog
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Stay updated with environmental insights, success stories,
                        and practical tips for sustainable living
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-2">
                                        <FaUser className="text-secondary" />
                                        <span>{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-secondary" />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-semibold">
                                        {blog.readTime}
                                    </span>
                                    <button disabled className="text-secondary hover:text-primary font-semibold text-sm transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                                        Read More <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-4 text-lg">
                        Want to explore more articles?
                    </p>
                    <button disabled className="bg-primary hover:bg-[#558B2F] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;