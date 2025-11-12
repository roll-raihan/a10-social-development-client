import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Loading from "./Loading";
import DatePicker from "react-datepicker";


const UpdateEvent = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://social-development-server-pi.vercel.app/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEventData(data);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleDateChange = (date) => {
        setEventData({ ...eventData, event_date: date });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const updatedEvent = {
    //         ...eventData,
    //         event_date: eventData.event_date.toISOString().split('T')[0],
    //     };

    //     fetch(`http://localhost:3000/events/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedEvent)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     title: 'Updated!',
    //                     text: 'Your event details were successfully updated.',
    //                     icon: 'success',
    //                 });
    //                 navigate('/manageEvent');
    //             }
    //         });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { event_title, description, thumbnail, location, event_date } = eventData;

        if (!event_title || event_title.trim().length < 3) {
            Swal.fire("Invalid Title", "Title must be at least 3 characters long.", "error");
            return;
        }

        if (!description || description.trim().length < 10) {
            Swal.fire("Invalid Description", "Description must be at least 10 characters long.", "error");
            return;
        }

        const imagePattern = /\.(jpeg|jpg|gif|png|webp)$/i;
        if (!/^https?:\/\/.+/.test(thumbnail) || !imagePattern.test(thumbnail)) {
            Swal.fire("Invalid Image URL", "Please provide a valid image link (http + .jpg/.png etc.)", "error");
            return;
        }

        if (!location || location.trim().length < 3) {
            Swal.fire("Invalid Location", "Please enter a valid location.", "error");
            return;
        }

        if (!event_date || new Date(event_date) < new Date()) {
            Swal.fire("Invalid Date", "Please select a future date!", "error");
            return;
        }

        const updatedEvent = {
            ...eventData,
            event_date: eventData.event_date.toISOString().split('T')[0],
        };

        fetch(`https://social-development-server-pi.vercel.app/events/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated!',
                        text: 'Your event details were successfully updated.',
                        icon: 'success',
                    });
                    navigate('/manageEvent');
                } else {
                    Swal.fire("No Changes", "No fields were updated.", "info");
                }
            })
            .catch(err => {
                Swal.fire("Error", "Something went wrong while updating the event.", "error");
                console.error(err);
            });
    };


    if (loading) return <Loading />;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl shadow-lg my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Update Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-2">Event Title</label>
                    <input
                        type="text"
                        name="event_title"
                        value={eventData.event_title}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block font-semibold mb-2">Event Type</label>
                    <select
                        name="event_type"
                        value={eventData.event_type}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select type</option>
                        <option value="Cleanup">Cleanup</option>
                        <option value="Plantation">Plantation</option>
                        <option value="Donation">Donation</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold mb-2">Thumbnail Image URL</label>
                    <input
                        type="text"
                        name="thumbnail"
                        value={eventData.thumbnail}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={eventData.location}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2">Event Date</label>
                    <DatePicker
                        selected={new Date(eventData.event_date)}
                        onChange={handleDateChange}
                        className="input input-bordered w-full"
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success w-full mt-4">
                    Update Event
                </button>
            </form>
        </div>
    );
};

export default UpdateEvent;
