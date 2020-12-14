import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
    <h1 className= "store">Welcome to CupCake Store</h1>
        <label className="cupcakeName">CupCakeName:
        <input type="text" placeholder= "enter cupcake name" />
        <label className="date">Date created<input type="date"  id="store" name="cupdate" /></label>
        <input type="submit" value="Delete" />
        
        </label>
    </div>
    </div>
  );
}

export default App;
