import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RolePage/RoleSelection";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import ProviderLogin from "./pages/Provider/ProviderLogin";
import ProviderSignup from "./pages/Provider/ProviderSignup";
import Dashboard from "./pages/MainDashboard/Dashboard";
import Navbar from "./component/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>

        <Route path="/" element={<RoleSelection />} />

        {/* User pages */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />

        {/* Provider pages */}
        <Route path="/provider/login" element={<ProviderLogin />} />
        <Route path="/provider/signup" element={<ProviderSignup />} />

         <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
