import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <div className="App">
            <h2>Data Entry Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Province:
                    <input type="text" name="province" value={formData.province} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Postal Code:
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <div className="output">
                <h3>Entered Information:</h3>
                <p><strong>Full Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Address:</strong> {formData.address}</p>
                <p><strong>City:</strong> {formData.city}</p>
                <p><strong>Province:</strong> {formData.province}</p>
                <p><strong>Postal Code:</strong> {formData.postalCode}</p>
            </div>
        </div>
    );
}

export default App;
