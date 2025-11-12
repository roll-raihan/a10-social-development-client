import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import Loading from './Loading';

const UpcomingEventDetails = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`https://social-development-server-pi.vercel.app/trees/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [id]);

    const handleJoinEvent = () => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You must login!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }

        const joinData = {
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            eventId: event._id,
            eventTitle: event.event_title,
            eventDate: event.event_date,
        };

        fetch("https://social-development-server-pi.vercel.app/join-event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(joinData),
        })
            .then(res => res.json())
            .then(() => Swal.fire({
                title: "Well Done!",
                text: "You joined this event successfully!",
                icon: "success"
            }));
    };

    if (!event) return <Loading></Loading>;

    return (
        <div className="p-8">
            <img src={event.thumbnail} alt={event.event_title} className="w-full h-80 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold mt-4">{event.event_title}</h1>
            <p className="mt-2">{event.description}</p>
            <p>📍 Location: {event.location?.name}</p>
            <p>🗓 Date: {event.event_date}</p>
            <button onClick={handleJoinEvent} className="btn btn-primary mt-6">Join Event</button>
        </div>
    );
};

export default UpcomingEventDetails;