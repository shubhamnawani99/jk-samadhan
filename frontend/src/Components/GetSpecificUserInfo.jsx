import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetSpecificUserInfo = () => {
    const { user_id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/user/${user_id}/`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access')}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [user_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4">User Information</h1>
            {user ? (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Is Citizen:</strong> {user.is_citizen ? 'Yes' : 'No'}</p>
                    <p><strong>Is Admin:</strong> {user.is_admin ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <div>No user information available</div>
            )}
        </div>
    );
};

export default GetSpecificUserInfo;