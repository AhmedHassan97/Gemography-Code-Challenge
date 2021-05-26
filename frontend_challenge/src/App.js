import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from "react-router-dom";

import Main from "./Components/MainComponents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Main />  
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
