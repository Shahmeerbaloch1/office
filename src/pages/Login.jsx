
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate an asynchronous API call to a backend
    // In a real app, you would use 'fetch' or 'axios' here
    const users = {
      "admin@demo.com": "admin",
      "client@demo.com": "client",
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      if (users[email] && users[email] === password) {
        localStorage.setItem("auth", true);
        navigate("/");
      } else {
        setError("Invalid email or password!");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[350px]">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          materio
        </h1>
        <h1 className="text-xl font-bold text-center text-[#2C3E50] mb-2">
          Welcome to materio! 👋🏻
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Please sign-in to your account and start the adventure
        </p>
        <div className="bg-[#F8F9FA] border rounded-lg p-3 mb-4 text-sm">
          <p className="mb-1 text-gray-400">
            <span className="font-semibold text-gray-400">Admin Email:</span>{" "}
            <code className="bg-[#E9ECEF] text-gray-600 border px-1 rounded">admin@demo.com</code>{" "}
            / <span className="font-semibold text-gray-400">Pass:</span>{" "}
            <code className="bg-[#E9ECEF] text-gray-600 border px-1 rounded">admin</code>
          </p>
          <p className=" text-gray-400">
            <span className="font-semibold">Client Email:</span>{" "}
            <code className=" border bg-[#E9ECEF] text-gray-600 px-1 rounded">client@demo.com</code>{" "}
            / <span className="font-semibold">Pass:</span>{" "}
            <code className="bg-[#E9ECEF] text-gray-600 border px-1 rounded">client</code>
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <p className="text-red-500 text-sm bg-red-100 p-2 rounded">
              {error}
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      <div className="flex items-center gap-2 justify-between">
      <div className="flex items-center gap-2">
      <input type="checkbox" id="remember" />
      <label htmlFor="remember" className="text-sm font-medium ">Remember me</label>
      </div>
      <div>
        <h2 className="text-sm font-medium text-[#965ae6] hover:underline cursor-pointer">Forget password?</h2>
      </div>
      </div>
          <button
            type="submit"
            className="w-full bg-[#965ae6] text-white p-2 rounded hover:bg-[#b75af4] transition"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="flex items-center ">
            <h2 className="text-sm font-medium">New on our platform?</h2>
            <h2 className="text-sm font-medium text-[#965ae6] hover:underline cursor-pointer ml-2">Create an account</h2>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;