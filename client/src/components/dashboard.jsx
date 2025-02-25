import React, { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

const AdminDashboard = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("dashboard");

    const registeredUsers = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    ];

    const pointsTable = [
        { id: 1, name: "John Doe", points: 100 },
        { id: 2, name: "Jane Smith", points: 85 },
        { id: 3, name: "Alice Johnson", points: 95 },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case "dashboard":
                return (
                    <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Welcome to the Dashboard</h2>
                        <p className="text-gray-400">This is the dashboard section. You can add custom components here later.</p>
                    </div>
                );
            case "users":
                return (
                    <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Registered Users</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-800">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-black/60 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 bg-black/60 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    {registeredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-black/60 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case "table":
                return (
                    <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Points Table</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-800">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-black/60 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 bg-black/60 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Points</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    {pointsTable.map((user) => (
                                        <tr key={user.id} className="hover:bg-black/60 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex">
            <div className={`lg:block w-64 bg-black text-white fixed h-full p-4 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 border-r border-gray-800`}>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">✕</button>
                </div>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <button 
                                onClick={() => setActiveSection("dashboard")} 
                                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                                    activeSection === "dashboard" 
                                    ? "bg-gray-800 text-white" 
                                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                Dashboard
                            </button>
                        </li>
                        <li className="mb-4">
                            <button 
                                onClick={() => setActiveSection("users")} 
                                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                                    activeSection === "users" 
                                    ? "bg-gray-800 text-white" 
                                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                Users
                            </button>
                        </li>
                        <li className="mb-4">
                            <button 
                                onClick={() => setActiveSection("table")} 
                                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                                    activeSection === "table" 
                                    ? "bg-gray-800 text-white" 
                                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                Table
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex-1 lg:ml-64">
                <div className="bg-black/40 border-b border-gray-800">
                    <div className="flex justify-between items-center p-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-400 hover:text-white">☰</button>
                        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                        <button 
                            onClick={() => signOut()} 
                            className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-gray-200 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="p-8">{renderSection()}</div>
            </div>
        </div>
    );
};

export default AdminDashboard;