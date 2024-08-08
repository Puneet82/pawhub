import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AddAdmin.module.css';

const AddAdmin = () => {
  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    image: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAdmin({ ...admin, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add admin to the system (backend integration required)
    console.log('Admin added', admin);
    // Redirect to admin dashboard after adding the admin
    router.push('/admin/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Add New Admin</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={admin.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.inputField}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.inputField}
            required
          />
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className={styles.inputField}
          />
          {admin.image && (
            <img src={admin.image} alt={admin.name} className={styles.picturePreview} />
          )}
          <button type="submit" className={styles.submitButton}>
            Add Admin
          </button>
          <button type="button" className={styles.cancelButton} onClick={() => router.push('/admin/dashboard')}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
