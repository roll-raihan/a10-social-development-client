import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';

const JoinedEvents = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/join-event?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    const sortedData = data.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
                    setMyEvents(sortedData);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) return <Loading />;

    return (
        <div className="px-4 py-8 bg-secondary opacity-[80%]">
            <h2 className="text-3xl font-bold mb-6 text-black">My Joined Events</h2>
            {myEvents.length === 0 ? (
                <p className='text-secondary'>You haven't joined any events yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full text-black">
                        <thead className='text-black'>
                            <tr>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myEvents.map(event => (
                                <tr key={event._id}>
                                    <td>
                                        <img
                                            src={event.thumbnail}
                                            alt={event.eventTitle}
                                            className="w-16 h-16 rounded"
                                        />
                                    </td>
                                    <td>{event.eventTitle}</td>
                                    <td>{event.eventType}</td>
                                    <td>{event.eventDate}</td>
                                    <td>{event.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default JoinedEvents;
