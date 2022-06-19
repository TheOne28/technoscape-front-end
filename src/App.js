import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {SignUp} from "./component/signUpComponent"
import {Login} from "./component/loginComponent"
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
