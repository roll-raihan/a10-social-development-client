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

    // 1️⃣ Fetch existing event data
    useEffect(() => {
        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEventData(data);
                setLoading(false);
            });
    }, [id]);

    // 2️⃣ Handle field updates
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    // 3️⃣ Handle date change
    const handleDateChange = (date) => {
        setEventData({ ...eventData, event_date: date });
    };

    // 4️⃣ Submit updates to server
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedEvent = {
            ...eventData,
            event_date: eventData.event_date.toISOString().split('T')[0],
        };

        fetch(`http://localhost:3000/events/${id}`, {
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
                }
            });
    };

    if (loading) return <Loading />;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl shadow-lg my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Update Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Event Title */}
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

                {/* Description */}
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

                {/* Event Type */}
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

                {/* Thumbnail */}
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

                {/* Location */}
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

                {/* Event Date */}
                <div>
                    <label className="block font-semibold mb-2">Event Date</label>
                    <DatePicker
                        selected={new Date(eventData.event_date)}
                        onChange={handleDateChange}
                        className="input input-bordered w-full"
                        minDate={new Date()} // prevent past dates
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
