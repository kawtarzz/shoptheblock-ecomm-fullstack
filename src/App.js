import './App.css';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { onLoginStatusChange } from './modules/authManager';
import ApplicationViews from './components/ApplicationViews';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { getUserDetails } from './modules/authManager';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({ id: 0, fullName: "", email: "", password: "", profilePic: "" });
  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUserDetails(firebase.auth().currentUser.uid).then(user => setUser(user));
    }
  }, [isLoggedIn])

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <div id="root">
      <Router>
        <ApplicationViews isLoggedIn={isLoggedIn} user={user} />
      </Router>
    </div>
  );
}

export default App;


