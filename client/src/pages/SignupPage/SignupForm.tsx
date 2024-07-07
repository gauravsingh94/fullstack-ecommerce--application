import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      image,
      password,
    };
    console.log(data);

    const url =
      role === "admin"
        ? "http://localhost:3000/admin/signup"
        : "http://localhost:3000/user/signup";

    try {
      const response = await axios.post(url, data);
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      role === "admin" ? navigate("/admin/product") : navigate("/user/product");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="w-[50%] h-full flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px]">Sign Up</h1>
        <h1>Already have an account? Sign in</h1>
        <input
          type="text"
          placeholder="Your Name"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Paste Profile Image link"
          className="mt-2 p-2 border-b border-gray-500 placeholder-slate-500"
          onChange={(e) => setImage(e.target.value)}
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
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
