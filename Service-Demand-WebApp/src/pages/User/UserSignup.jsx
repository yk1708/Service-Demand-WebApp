import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!form.name || !form.phone || !form.password) return "All fields are required";
    if (!/^[0-9]{10}$/.test(form.phone)) return "Phone number must be 10 digits";
    if (form.password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (validation) return setError(validation);

    // ✅ For now, save to localStorage (later connect to DB)
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Signup
          </button>
        </form>
        <p className="mt-2 text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
