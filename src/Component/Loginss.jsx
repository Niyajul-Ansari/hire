import React, { useState } from 'react';
import { FaUser, FaUsers } from 'react-icons/fa';

const Loginss = () => {
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Invalid Login');
        setShowModal(false);
    };

    return (
        <div className="relative font-sans">
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-50 bg-gray-100 px-4 py-3 flex flex-row justify-center sm:justify-end items-center gap-6 sm:gap-6 text-white text-sm font-medium shadow-md">
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 hover:underline text-black"
                >
                    <FaUser className="text-red-400" /> Employee Login
                </button>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 hover:underline text-black"
                >
                    <FaUsers className="text-red-400" /> Associate Login
                </button>
            </div>

            {/* Modal Form */}
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-xl bg-opacity-50 flex justify-center items-center z-2000 p-4">
                    <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-xl">
                        <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center text-gray-800">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            {/* <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            /> */}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-2 rounded-lg text-base"
                            >
                                Login
                            </button>
                        </form>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 block text-center text-sm text-red-500 hover:underline w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Dummy content for scroll testing */}

        </div>
    );
};

export default Loginss;