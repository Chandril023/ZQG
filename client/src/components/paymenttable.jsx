import React, { useState, useEffect } from 'react';
import axios from 'axios';

 // Import the CSS file for styling

const PaymentTable = () => {
 
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/admin/payments-info');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User Table</h2>
            <table className='responsive-table'>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>In Game Id</th>
                        <th>Payment Token</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.inGameId}</td>
                            <td>{user.paymentToken}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentTable;
