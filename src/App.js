// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/add-transaction"  element={
            <AddTransaction/>
          }/>
          <Route path="/edit-transaction"  element={
            <EditTransaction/>
          }/>
          <Route path="/" element={
            <HomePage/>
          }/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
