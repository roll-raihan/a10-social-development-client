import React from 'react';
import { FaCalendarCheck, FaCalendarPlus, FaTasks } from 'react-icons/fa';

const DashboardOverview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Total Events */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex items-center">
                    <FaCalendarPlus className="text-4xl text-blue-500 mr-4" />
                    <div>
                        <h2 className="card-title">Total Events</h2>
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-sm text-gray-500">Created by you</p>
                    </div>
                </div>
            </div>

            {/* Manage Events */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex items-center">
                    <FaTasks className="text-4xl text-green-500 mr-4" />
                    <div>
                        <h2 className="card-title">Manage Events</h2>
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-sm text-gray-500">Pending tasks</p>
                    </div>
                </div>
            </div>

            {/* Joined Events */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex items-center">
                    <FaCalendarCheck className="text-4xl text-purple-500 mr-4" />
                    <div>
                        <h2 className="card-title">Joined Events</h2>
                        <p className="text-2xl font-bold">0</p>
                        <p className="text-sm text-gray-500">Upcoming participation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;