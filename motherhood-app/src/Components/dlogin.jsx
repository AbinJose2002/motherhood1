import React, { useState } from 'react';

const DoctorLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    // Handle input change
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        // Handle the login functionality here (e.g., send data to an API)
        console.log('Doctor Login Data:', formData);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <h2 className="text-center mb-4">Doctor Login</h2>
                <form onSubmit={onSubmit} className="col-12 col-sm-8 col-md-6 col-lg-5 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success">Log In</button>
                    </div>
                </form>
                <div className="col-12 text-center mt-4">
                    <h6>Don't have an account?</h6>
                    <a href="/dSignup" className="btn btn-primary">Create an Account</a>
                </div>
            </div>
        </div>
    );
};

export default DoctorLogin;
