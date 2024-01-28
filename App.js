
import './App.css';
import {Routes,Route} from "react-router-dom";
import Base from './components/Base';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Base/>}/>
        <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
