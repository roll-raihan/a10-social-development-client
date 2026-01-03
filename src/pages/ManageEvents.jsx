import { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { Link } from "react-router";

const ManageEvents = () => {
    const { user, loading, setLoading } = use(AuthContext);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        if (user?.email) {
            // console.log(user.email)
            fetch(`https://social-development-server-pi.vercel.app/trees?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyEvents(data);
                    setLoading(false);
                });
        }
    }, [user, setLoading]);


    if (loading) return <Loading />;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Manage My Events</h2>
            {myEvents.length === 0 ? (
                <p>You haven't created any events yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myEvents.map(event => (
                                <tr key={event._id}>
                                    <td><img src={event.thumbnail} alt={event.event_title} className="w-16 h-16 rounded" /></td>
                                    <td>{event.event_title}</td>
                                    <td>{event.event_type}</td>
                                    <td>{event.event_date}</td>
                                    <td>
                                        {typeof event.location === 'object'
                                            ? `${event.location.name || ''}, ${event.location.city || ''}, ${event.location.address || ''}`
                                            : event.location}
                                    </td>

                                    <td>
                                        <Link to={`/manageEvent/${event._id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageEvents;
