import { useLocation } from 'react-router-dom';

const Authentication = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle authentication logic here
    setIsAuthenticated(true);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" required />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Authentication;
