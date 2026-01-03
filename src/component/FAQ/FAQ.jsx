import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I join an event on GreenRoots?",
            answer: "Simply browse our Upcoming Events page, click on any event that interests you, and hit the 'Join Event' button. You'll need to be logged in to join events. Once joined, you'll receive all the event details and can track it in your Joined Events page."
        },
        {
            question: "Is there any cost to participate in events?",
            answer: "Most events on GreenRoots are completely free to join. However, some special events or donation drives may have optional contribution requests. All cost details are clearly mentioned on the event details page before you join."
        },
        {
            question: "Can I create my own environmental event?",
            answer: "Absolutely! Any registered user can create events on GreenRoots. Simply log in, navigate to the 'Create Event' page, fill in the event details including title, description, location, date, and type. Your event will be visible to all users on the platform."
        },
        {
            question: "How do I track my environmental impact?",
            answer: "Your personal dashboard shows all the events you've joined and organized. You can see statistics like total events attended, trees planted, and cleanup drives participated in. We also award badges for your contributions to celebrate your environmental journey."
        },
        {
            question: "What types of events can I find on GreenRoots?",
            answer: "GreenRoots hosts diverse event categories including Tree Plantation, Community Cleanup, Donation Drives, Recycling Workshops, Charity Events, and Environmental Awareness Campaigns. You can filter events by category, location, and date to find what suits you best."
        },
        {
            question: "Can I edit or cancel an event I created?",
            answer: "Yes, event creators have full control over their events. Visit the 'Manage Events' page to view all events you've created. You can update event details, change dates, or delete events if needed. Only the event creator can modify their own events."
        },
        {
            question: "How do I find events near my location?",
            answer: "Use our location-based search feature on the Upcoming Events page. You can filter events by city or area, or use the search function to find events in specific neighborhoods. Each event card displays the location clearly."
        },
        {
            question: "What happens after I join an event?",
            answer: "After joining, the event appears in your 'Joined Events' page. You'll have access to all event details including exact location, date, time, and any special instructions. On the event day, simply show up and contribute to making a difference!"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Got questions? We've got answers. Find everything you need
                        to know about using GreenRoots
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#F1F8E9] to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-secondary overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <h3 className="text-lg font-bold text-primary pr-4">
                                    {faq.question}
                                </h3>
                                <span className="text-secondary flex-shrink-0">
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-xl" />
                                    ) : (
                                        <FaChevronDown className="text-xl" />
                                    )}
                                </span>
                            </button>
                            
                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-4 text-lg">
                        Still have questions?
                    </p>
                    <button className="bg-secondary hover:bg-[#689F38] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;