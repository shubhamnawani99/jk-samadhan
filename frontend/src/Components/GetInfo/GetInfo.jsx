import React, { useEffect, useState } from 'react';

const GetInfo = () => {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/get-info/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInfo(data);
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
            <h1 className="text-xl font-semibold mb-4">Submitted Information</h1>
            {info ? (
                <div>
                    <p><strong>First Name:</strong> {info.first_name}</p>
                    <p><strong>Middle Name:</strong> {info.middle_name}</p>
                    <p><strong>Last Name:</strong> {info.last_name}</p>
                    <p><strong>Gender:</strong> {info.gender}</p>
                    <p><strong>Date of Birth:</strong> {info.date_of_birth}</p>
                    <p><strong>State:</strong> {info.state}</p>
                    <p><strong>District:</strong> {info.district}</p>
                    <p><strong>Address:</strong> {info.address}</p>
                    <p><strong>Pincode:</strong> {info.pincode}</p>
                    <p><strong>Preferred Communication Language:</strong> {info.prefCommlangauge}</p>
                    <p><strong>Mobile:</strong> {info.mobile}</p>
                    <p><strong>Email:</strong> {info.email}</p>
                    <p><strong>Captcha:</strong> {info.captcha}</p>
                </div>
            ) : (
                <div>No information available</div>
            )}
        </div>
    );
};

export default GetInfo;