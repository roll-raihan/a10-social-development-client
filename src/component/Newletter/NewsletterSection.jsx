import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="py-20 bg-green-100 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-primary dark:text-secondary">
                        Stay Rooted: Get Our Green Updates
                    </h2>
                    <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                        Subscribe to receive monthly updates on local planting events, success stories, and essential environmental tips directly to your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address to grow with us"
                            className="w-full sm:w-80 p-3 border border-secondary rounded-lg focus:ring-green-500 focus:border-secondary transition duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            aria-label="Email address for newsletter"
                            disabled
                        />
                        <button
                            className="main-cta-button w-full sm:w-auto px-6 py-3 font-semibold rounded-lg text-white bg-primary hover:bg-green-700 transition duration-300 shadow-md"
                            disabled
                        >
                            Join the Roots
                        </button>
                    </div>

                    <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                        We respect your privacy. No spam, just soil and saplings!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;