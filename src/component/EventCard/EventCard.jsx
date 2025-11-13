import React from 'react';
import { Link } from 'react-router';

const EventCard = ({ event }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="event-card border rounded-2xl p-5">
            <div className="card-image">
                <img className='w-full h-[150px]' src={event.image} alt={event.event_title} />
            </div>
            <div className="card-content">
                <h3 className='font-bold text-xl text-black'>{event.event_title}</h3>
                <p className='text-primary'>📅 {formatDate(event.event_date)} @ {event.event_time}</p>
                <p className='text-black'>📍 {event.location.name}, {event.location.city}</p>
                <Link to={`/upcomingEvent/${event._id}`}>
                    <button className="btn btn-primary w-full">View Event</button>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;