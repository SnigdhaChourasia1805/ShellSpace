import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./../Login/App.css"

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        occupation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="signup-content">
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Enter your first name'
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Enter your last name'
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}placeholder='Enter your Occupation'
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter your E-mail '
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter your 8 digit password'
                        required
                    />
                </div>
                <div className="input-group">
                    <p>Already have an account?
                        <NavLink to="/login">Login</NavLink>
                    </p>
                </div>


                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
        </div>
    );
};

