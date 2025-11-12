import React, { use, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from 'react-datepicker';

const CreateEvent = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const [eventData, setEventData] = useState({
        event_title: "",
        description: "",
        event_type: "Cleanup",
        thumbnail: "",
        location: "",
        event_date: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleDateChange = (date) => {
        setEventData({ ...eventData, event_date: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { event_title, description, thumbnail, location, event_date } = eventData;

        if (event_title.trim().length < 3) {
            Swal.fire("Invalid Title", "Title must be at least 3 characters long.", "error");
            return;
        }

        if (description.trim().length < 10) {
            Swal.fire("Invalid Description", "Description must be at least 10 characters long.", "error");
            return;
        }

        const imagePattern = /\.(jpeg|jpg|gif|png|webp)$/i;
        if (!/^https?:\/\/.+/.test(thumbnail) || !imagePattern.test(thumbnail)) {
            Swal.fire("Invalid Image URL", "Please provide a valid image link (http + .jpg/.png etc.)", "error");
            return;
        }

        if (location.trim().length < 3) {
            Swal.fire("Invalid Location", "Please enter a valid location.", "error");
            return;
        }

        if (!event_date || event_date < new Date()) {
            Swal.fire("Invalid Date", "Please select a future date!", "error");
            return;
        }

        const newEvent = {
            ...eventData,
            creator_email: user?.email,
            event_date: event_date.toISOString(),
        };

        try {
            const res = await fetch("http://localhost:3000/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEvent),
            });

            if (res.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Event Created!",
                    text: "Your event has been added successfully.",
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate("/upcomingEvent");
            } else {
                throw new Error("Failed to create event");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    };


    return (
        <div className="max-w-lg mx-auto p-6 bg-base-200 rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-5 text-center">Create New Event</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Event Title</label>
                    <input
                        type="text"
                        name="event_title"
                        value={eventData.event_title}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block font-medium">Event Type</label>
                    <select
                        name="event_type"
                        value={eventData.event_type}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                    >
                        <option>Cleanup</option>
                        <option>Plantation</option>
                        <option>Donation</option>
                        <option>Awareness</option>
                        <option>Charity</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium">Thumbnail Image URL</label>
                    <input
                        type="text"
                        name="thumbnail"
                        value={eventData.thumbnail}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={eventData.location}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block font-medium">Event Date</label>
                    <DatePicker
                        selected={eventData.event_date}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        className="input input-bordered w-full"
                        dateFormat="yyyy-MM-dd"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;