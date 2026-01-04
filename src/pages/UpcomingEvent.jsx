import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../component/EventCard/EventCard';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedType, setSelectedType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const fetchEvents = async (type = 'All', search = '') => {
        try {
            setLoading(true);
            let url = `https://social-development-server-pi.vercel.app/trees?`;

            if (type && type !== 'All') url += `type=${type}&`;
            if (search) url += `search=${search}`;

            const response = await axios.get(url);
            setEvents(response.data);
        } catch (err) {
            console.error("Error fetching events:", err);
            setError('Failed to load upcoming events. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents(selectedType, searchQuery);
    }, [selectedType, searchQuery]);

    if (loading) return <div className="loading-state">Loading Upcoming Events...</div>;
    if (error) return <div className="error-state">🚨 {error}</div>;

    return (
        <div className="upcoming-events-page p-5 bg-gradient-to-b from-secondary via-[#F7A1B1] to-[#D8C6E0]">
            <h2 className="font-bold text-center text-4xl p-10 text-black">Community Upcoming Events</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search by event name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-lg px-4 py-2 w-64 text-black bg-white"
                />

                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="rounded-lg px-4 py-2 w-48 text-black bg-white"
                >
                    <option value="All">All Types</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Donation">Donation</option>
                    <option value="Awareness">Awareness</option>
                    <option value="Awareness">Charity</option>
                </select>
            </div>

            {events.length === 0 ? (
                <p className="empty-state text-center text-lg font-medium">No upcoming events found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {events.map(event => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;
