import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="jumbotron text-center">
        <h1 className="display-4">Welcome to FitnessApp</h1>
        <p className="lead">Track your fitness journey, monitor your progress, and achieve your goals with FitnessApp.</p>
        <hr className="my-4" />
        <p>Join us today to start your fitness journey!</p>
        <Link className="btn btn-primary btn-lg" to="/signup" role="button">Sign Up</Link>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Track Workouts</h2>
            <p>Log your workouts, track your progress, and achieve your fitness goals.</p>
            <Link className="btn btn-secondary" to="/workouts">Learn More</Link>
          </div>
          <div className="col-md-4">
            <h2>Monitor Nutrition</h2>
            <p>Keep track of your diet and nutrition to ensure you are fueling your body properly.</p>
            <Link className="btn btn-secondary" to="/nutrition">Learn More</Link>
          </div>
          <div className="col-md-4">
            <h2>Set Goals</h2>
            <p>Set personalized fitness goals and track your progress towards achieving them.</p>
            <Link className="btn btn-secondary" to="/goals">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
