import React, { useEffect, useState } from 'react';

export default function Registration() {
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        state: '',
        district: '',
        address: '',
        pincode: '',
        prefCommlangauge: '',
        mobile: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle successful registration
                alert('Registration successful!');
            } else {
                // Handle errors
                // 
                alert('Registration failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 mx-auto" id="formRegister">
            <div className="mb-4">
                <h1 tabIndex="0" className="text-xl font-semibold" id="formRegisterLabel">Sign Up to Your Account</h1>
                <button type="button" className="text-gray-500 hover:text-gray-700" aria-label="Close Modal">&times;</button>
            </div>
            <div>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="First name*" aria-label="First name" required maxLength="50" id="fn" name="first_name" value={formData.first_name} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Middle name" maxLength="50" aria-label="Middle name" id="mn" name="middle_name" value={formData.middle_name} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Last name*" aria-label="Last name" maxLength="50" required id="ln" name="last_name" value={formData.last_name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <select tabIndex="0" id="inputGender" className="w-full p-2 border border-gray-300 rounded" name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="0">--Select Gender--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="flex-shrink-0 font-semibold" tabIndex="0">DOB:</label>
                            <input type="date" className="w-full p-2 border border-gray-300 rounded" id="dob" placeholder="Date of Birth" aria-label="Date of Birth" required name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} max="2024-01-10" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <select id="inputRegion" className="w-full p-2 border border-gray-300 rounded" tabIndex="0" name="state" value={formData.state} onChange={handleChange}>
                                <option value="0">--Select State--</option>
                                <option value="1">JAMMU AND KASHMIR</option>                         
                            </select>
                        </div>
                        <div>
                            <select id="inputDistrict" className="w-full p-2 border border-gray-300 rounded" tabIndex="0" name="district" value={formData.district} onChange={handleChange} disabled>
                                <option value="0">--Select District--</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <textarea maxLength="255" className="w-full p-2 border border-gray-300 rounded" tabIndex="0" placeholder="Address*" aria-label="Address" required id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" id="pin" placeholder="Enter Pincode*" maxLength="6" aria-label="Enter Pincode" required name="pincode" value={formData.pincode} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">Select Preferred Communication Language:</label>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <input type="radio" id="eng" name="prefCommlangauge" value="eng" checked={formData.prefCommlangauge === 'eng'} onChange={handleChange} className="mr-2" />
                                <label htmlFor="eng">Eng</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="hin" name="prefCommlangauge" value="hindi" checked={formData.prefCommlangauge === 'hindi'} onChange={handleChange} className="mr-2" />
                                <label htmlFor="hin">Hindi (हिन्दी)</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="urdu" name="prefCommlangauge" value="urdu" checked={formData.prefCommlangauge === 'urdu'} onChange={handleChange} className="mr-2" />
                                <label htmlFor="urdu">Urdu (اردو)</label>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <div className="flex items-center">
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" id="mobile" placeholder="Mobile no*" required name="mobile" maxLength="10" value={formData.mobile} onChange={handleChange} />
                                        </div>
                            <span id="lblErroremail" className="text-red-500" tabIndex="0"></span>
                        </div>
                       

                        <div>
                            <div className="flex items-center">
                                <input type="search" className="w-full p-2 border border-gray-300 rounded" id="email" placeholder="Email ID*" required maxLength="50" name="email" value={formData.email} onChange={handleChange} />
                                      </div>
                            <span id="lblErroremailE" className="text-red-500" tabIndex="0"></span>
                        </div>
                    </div>
                    <div>
                            <div className="flex items-center">
                                <input type="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Password*" required name="password" value={formData.password} onChange={handleChange} />
                            </div>
                        </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" id="registerB">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}