import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'; // Import useHistory and useParams for navigation and URL params

const AdoptionForm = () => {
  const { petName } = useParams(); // Get petName from URL params
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    adoptionReason: '',
    petsOwned: '',
    hoursAlone: '',
    petCare: '',
    landlordApproval: ''
  });

  const history = useHistory(); // UseHistory hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);
    // Redirect to a confirmation page or another route after submission
    history.push('/adoption/confirmation'); // Replace with your confirmation page route
  };

  return (
    <div>
      <h2>Adopt {petName}</h2>
      <p>
        Thank you for your interest in adopting {petName}. Please fill out the adoption form below to start the process:
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Your Full Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Why do you want to adopt {petName}?
          <textarea
            name="adoptionReason"
            value={formData.adoptionReason}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number and type of pets currently owned:
          <textarea
            name="petsOwned"
            value={formData.petsOwned}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          How many hours per day will {petName} be alone?
          <input
            type="text"
            name="hoursAlone"
            value={formData.hoursAlone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Describe your pet care plan (e.g., feeding, exercise):
          <textarea
            name="petCare"
            value={formData.petCare}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Have you received approval from your landlord or condo board for a pet?
          <select
            name="landlordApproval"
            value={formData.landlordApproval}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <button type="submit">Submit Adoption Form</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
