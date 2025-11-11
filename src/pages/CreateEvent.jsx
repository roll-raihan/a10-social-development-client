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

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    // handle date picker
    const handleDateChange = (date) => {
        setEventData({ ...eventData, event_date: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!eventData.event_date || eventData.event_date < new Date()) {
            Swal.fire({
                icon: "error",
                title: "Invalid Date",
                text: "Please select a future date!",
            });
            return;
        }

        const newEvent = {
            ...eventData,
            creator_email: user?.email,
            event_date: eventData.event_date.toISOString(),
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
                navigate("/upcomingEvents");
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
                {/* Event Title */}
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

                {/* Description */}
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

                {/* Event Type */}
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

                {/* Thumbnail URL */}
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

                {/* Location */}
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

                {/* Event Date */}
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

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;