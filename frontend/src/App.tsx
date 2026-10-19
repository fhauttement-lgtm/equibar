import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ClientLayout from './pages/Client/ClientLayout';
import Cart from './pages/Client/Cart';
import Products from './pages/Client/Products';
import AdminDashboard from './pages/Admin/Dashboard';
import CaisseOrders from './pages/Caisse/Orders';
import BuvetteInventory from './pages/Buvette/Inventory';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/client" element={<ClientLayout />}>
            <Route index element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="/caisse" element={<CaisseOrders />} />
          <Route path="/buvette" element={<BuvetteInventory />} />
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;