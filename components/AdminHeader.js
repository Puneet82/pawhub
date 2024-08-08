import { useState, useEffect } from "react";
// import Link from "next/link";
import styles from "./AdminHeader.module.css";
import { useRouter } from "next/router";
import API from "../api_endpoints";
// import { useAdmin } from "../context/AdminContext"; // Corrected path

const AdminHeader = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  // const { admins, currentAdminIndex, setCurrentAdminIndex } = useAdmin();
  // const currentAdmin = admins[currentAdminIndex];

  const handleEditProfile = () => {
    router.push(`/edit-profile`);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  const handleSwitchProfile = (index) => {
    // setCurrentAdminIndex(index);
  };
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("profile"));
    setUser(session?.data?.result);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        {/* <img src={user?.image} alt={`${user?.name}'s profile`} className={styles.adminImage} /> */}
        <span className={styles.adminName}>{user?.name}</span>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>▼</button>
          <div className={styles.dropdownContent}>
            <button onClick={handleEditProfile}>Edit Profile</button>
            {/* {admins.map((admin, index) => (
              <button key={index} onClick={() => handleSwitchProfile(index)} className={styles.switchProfileButton}>
                {admin.name}
              </button>
            ))} */}
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
            {/* <Link href="/admin/add-admin">Add Admin</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
