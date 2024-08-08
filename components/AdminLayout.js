// components/AdminLayout.js
import Header from './Header';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="admin-layout">
        <main className="admin-content">
          {children}
        </main>
        <style jsx>{`
          .admin-layout {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          .admin-content {
            flex: 1;
            padding: 1rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default AdminLayout;
