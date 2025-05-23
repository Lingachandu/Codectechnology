import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products'; // import Products page here
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />  {/* Add this line */}
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;


