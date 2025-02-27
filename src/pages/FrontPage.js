import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Frontpage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  
  const [errors, setErrors] = useState({});

 
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!validatePhone(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number must be 10 digits';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    alert('Login successful!');
   
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
    });
    setErrors({});
  };

  return (
    <div style={{ padding: '20px 50px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login Page</h1>

      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
          />
          {errors.name && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.name}</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
          />
          {errors.email && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.email}</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
          />
          {errors.phoneNumber && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.phoneNumber}</span>}
        </div>
        <Link to='/task'>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            width: '50%',
            cursor: 'pointer',
            margin: '10px',
            
            
          
          }}
        >
          Login
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Frontpage;