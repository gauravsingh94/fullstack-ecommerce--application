import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    };

    const url =
      role === "admin"
        ? "http://localhost:3000/admin/login"
        : "http://localhost:3000/user/login";

    try {
      const response = await axios.post(url, data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        role === "admin"
          ? navigate("/admin/product")
          : navigate("/user/product");
      } else {
        alert("Incorrect username or passoword.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="w-[50%] h-full flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px]">Sign In</h1>
        <h1>Don’t have an account yet? Sign Up</h1>
        <input
          type="email"
          placeholder="Your email address"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={handleRoleChange}
            />
            Admin
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-2 p-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300 ease-in-out"
        >
          Signin
        </button>
      </div>
    </div>
  );
};

export default SigninForm;
