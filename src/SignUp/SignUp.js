import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tombol} from '../Komponen/try';

function SignUp() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Cool <code>src/App.js</code> and save to reload.
        </p>
        <Tombol/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default SignUp;
