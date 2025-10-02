import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/splashPage/Splash";
import RoleSelection from "./pages/RolePage/RoleSelection";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import ProviderLogin from "./pages/Provider/ProviderLogin";
import ProviderSignup from "./pages/Provider/ProviderSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Splash />} />
        <Route path="/roleselection" element={<RoleSelection />} />

        {/* User pages */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />

        {/* Provider pages */}
        <Route path="/provider/login" element={<ProviderLogin />} />
        <Route path="/provider/signup" element={<ProviderSignup />} />

        {/* Fallback */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
