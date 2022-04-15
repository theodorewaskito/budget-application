// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddIncome from './pages/AddIncome';
import AddExpense from './pages/AddExpense';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/add-income"  element={
            <AddIncome/>
          }/>
          <Route path="/add-expense"  element={
            <AddExpense/>
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
