import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../component/EventCard/EventCard';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/trees');
                setEvents(response.data);
            } catch (err) {
                console.error("Error fetching events:", err);
                setError('Failed to load upcoming events. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div className="loading-state">Loading Upcoming Events...</div>;
    }

    if (error) {
        return <div className="error-state">🚨 {error}</div>;
    }

    return (
        <div className="upcoming-events-page p-5 bg-gradient-to-b from-[#FFB69B] via-[#F7A1B1] to-[#D8C6E0]">
            <h2 className='font-bold text-center text-4xl p-10 text-black'>Community Upcoming Events</h2>
            {events.length === 0 ? (
                <p className="empty-state">No upcoming events are scheduled right now. Check back later!</p>
            ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {events.map(event => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;