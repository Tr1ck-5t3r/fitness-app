import { useState } from 'react';
import "./Workouts.css"

const Workouts = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Push-ups', description: 'Do 3 sets of 10 push-ups.' },
    { id: 2, name: 'Squats', description: 'Do 3 sets of 15 squats.' },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newWorkout, setNewWorkout] = useState({ name: '', description: '' });

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const workout = {
      id: workouts.length + 1,
      ...newWorkout
    };
    setWorkouts([...workouts, workout]);
    setNewWorkout({ name: '', description: '' });
    setIsAdding(false);
  };

  return (
    <div className="workouts-container">
      <h1 className="text-center">Workouts</h1>
      {isAdding && (
        <div className="add-workout-form card bg-dark text-light">
          <div className="card-body">
            <h5 className="card-title">Add New Workout</h5>
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Workout Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name" 
                  value={newWorkout.name} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea 
                  className="form-control" 
                  id="description" 
                  name="description" 
                  rows="3" 
                  value={newWorkout.description} 
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsAdding(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      <div className="workout-list">
        {workouts.map(workout => (
          <div key={workout.id} className="card bg-dark text-light mb-3">
            <div className="card-body">
              <h5 className="card-title">{workout.name}</h5>
              <p className="card-text">{workout.description}</p>
            </div>
          </div>
        ))}
      </div>
      {!isAdding && (
        <button 
          className="btn btn-primary add-workout-btn" 
          onClick={handleAddClick}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Workouts;
