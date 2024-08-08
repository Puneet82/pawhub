// pages/admin/users.js
import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <h1>Manage Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ManageUsers;
