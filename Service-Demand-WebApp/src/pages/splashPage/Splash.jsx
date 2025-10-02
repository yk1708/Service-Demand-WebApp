import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("./RoleSelection");
    }, 2500);

    return () =>clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">Service Demand</h1>
      <p className="mt-2 text-lg">Connecting Users & Providers</p>
    </div>
  );
}

export default Splash;
