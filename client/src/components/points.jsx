import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './points.css';

export default function Points() {
   
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/admin/table-info`);
                let sortedUsers = response.data.sort((a, b) => {
                    // Sort by total points
                    if (b.totalPoints !== a.totalPoints) {
                        return b.totalPoints - a.totalPoints;
                    }
                    // If points are equal, sort by goal difference
                    if (b.goalDifference !== a.goalDifference) {
                        return b.goalDifference - a.goalDifference;
                    }
                    // If goal difference is also equal, sort by wins
                    return b.wins - a.wins;
                });
                setUsers(sortedUsers);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="points-table">
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>P</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td data-label="User name">{user.inGameId}</td>
                            <td data-label="Matches Played">{user.matchesPlayed}</td>
                            <td data-label="Wins">{user.wins}</td>
                            <td data-label="Draws">{user.draws}</td>
                            <td data-label="Losses">{user.losses}</td>
                            <td data-label="Goal Difference">{user.goalDifference}</td>
                            <td data-label="Total Points">{user.totalPoints}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
