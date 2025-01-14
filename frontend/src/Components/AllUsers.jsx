import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/get-all-users/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4">All Users Information</h1>
            {users.length > 0 ? (
                <div>
                    {users.map((user, index) => (
                        <div key={index} className="mb-4">
                            <p><strong>First Name:</strong> {user.first_name}</p>
                            <p><strong>Middle Name:</strong> {user.middle_name}</p>
                            <p><strong>Last Name:</strong> {user.last_name}</p>
                            <p><strong>Gender:</strong> {user.gender}</p>
                            <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
                            <p><strong>State:</strong> {user.state}</p>
                            <p><strong>District:</strong> {user.district}</p>
                            <p><strong>Address:</strong> {user.address}</p>
                            <p><strong>Pincode:</strong> {user.pincode}</p>
                            <p><strong>Preferred Communication Language:</strong> {user.prefCommlangauge}</p>
                            <p><strong>Mobile:</strong> {user.mobile}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Captcha:</strong> {user.captcha}</p>
                            <hr className="my-4" />
                        </div>
                    ))}
                </div>
            ) : (
                <div>No users found</div>
            )}
        </div>
    );
};

export default AllUsers;