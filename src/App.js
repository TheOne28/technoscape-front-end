import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {SignUp} from "./component/signUpComponent"
import {Login} from "./component/loginComponent"
import { Tujuan } from './component/tujuanComponent';
import { Anggaran } from './component/anggaranComponent';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/tujuan" element={<Tujuan/>} />
            <Route path="/anggaran" element={<Anggaran/>}/>
            <Route/>
            <Route/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
