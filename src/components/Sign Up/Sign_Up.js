import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign_Up.css';
import { API_URL } from '../../config';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'phone') {
      if (value.length !== 10 || !/^\d+$/.test(value)) {
        setErrors({
          ...errors,
          phone: 'Phone number must be 10 digits',
        });
      } else {
        setErrors({
          ...errors,
          phone: '',
        });
      }
    }
  };

  const navigate = useNavigate(); // Navigation hook from react-router

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errors.phone) {
      try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
          }),
        });

        const json = await response.json();

        if (json.authtoken) {
          sessionStorage.setItem("auth-token", json.authtoken);
          sessionStorage.setItem("name", formData.name);
          sessionStorage.setItem("phone", formData.phone);
          sessionStorage.setItem("email", formData.email);

          navigate("/");
          window.location.reload();
        } else {
          if (json.errors) {
            setErrors({
              ...errors,
              phone: json.errors.map(error => error.msg).join(', '),
            });
          } else {
            setErrors({
              ...errors,
              phone: json.error,
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch:', error);
        setErrors({
          ...errors,
          phone: 'Failed to submit. Please try again later.',
        });
      }
    } else {
      console.log('Form contains errors:', errors);
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}>Login</Link></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} /> <br/>
              {errors.phone && <small className="error-text text-danger">{errors.phone}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setFormData({ name: '', phone: '', email: '', password: '' })}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
