import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAdmin } from '../../context/AdminContext';
import styles from './EditProfile.module.css';

const EditProfile = () => {
  const router = useRouter();
  const { currentAdminIndex, updateAdmin, admins } = useAdmin();
  const [admin, setAdmin] = useState({ ...admins[currentAdminIndex] });

  useEffect(() => {
    if (admins[currentAdminIndex]) {
      setAdmin({ ...admins[currentAdminIndex] });
    }
  }, [currentAdminIndex, admins]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAdmin({ ...admin, picture: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAdmin(currentAdminIndex, admin);
    router.push('/admin/dashboard');
  };

  const handleChangePassword = () => {
    const newPassword = prompt('Enter new password:');
    if (newPassword) {
      setAdmin({ ...admin, password: newPassword });
      updateAdmin(currentAdminIndex, { ...admin, password: newPassword });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={admin.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.inputField}
            required
          />
          <input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.inputField}
            required
          />
          <input type="file" onChange={handleFileChange} className={styles.inputField} />
          {admin.picture && <img src={admin.picture} alt="Admin" className={styles.imagePreview} />}
          <button type="submit" className={styles.submitButton}>Save</button>
          <button type="button" className={styles.cancelButton} onClick={() => router.push('/admin/dashboard')}>
            Cancel
          </button>
        </form>
        <button onClick={handleChangePassword} className={styles.changePasswordButton}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
