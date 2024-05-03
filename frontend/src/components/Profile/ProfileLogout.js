import { useAuth } from '../Authorization/AuthContext';
// import Navbar from '../Navigation/Navbar';

const SecurityLogOut = () => {
  const { user, logout } = useAuth();
  return (
    <div className="container mt-4 main-panel">
     
      <div className="row d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 57.05px)' }}>
        <div className="col-md-6">
          <div className="card p-4" style={{ backgroundColor: '#D4A373', boxShadow: '0px 10px 20px gray', color: 'white', fontSize: '3rem' }}>
            <h2 className="card-title mb-4">Profile Dashboard</h2>
            <div className="mb-3">
              <strong>Name:</strong> {user?.firstName} {user?.lastName}
            </div>
            <div className="mb-3">
              <strong>Username:</strong> {user?.userId} 
            </div>
            <div className="mb-3">
              <strong>Email:</strong> &emsp;{user?.email}
            </div>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        </div>
        </div>
  );
};

export default SecurityLogOut;
