import { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/login";
import { useAuth } from "../context/Auth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formInput, setFormInput] = useState<
    Record<string, string | undefined>
  >({
    email: "",
    password: "",
  });

  const loginMutation = useMutation(loginUser, {
    onSuccess: (data) => {
      login(data);
      if (data.data.name && data.data.email) {
        navigate("/");
      }
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formInput.email &&
      formInput.password &&
      formInput.password.length >= 4
    ) {
      loginMutation.mutate(formInput);
    }
  };

  return (
    <div className="w-full h-[90%] flex  justify-center items-center bg-[#fff]">
      <div className="flex flex-col w-[40%] h-[70%] justify-between items-center p-4 border-green-400 border-2 rounded-xl">
        <h4 className="text-xl font-semibold">Login</h4>
        <form
          onSubmit={handleSubmit}
          className="font-normal flex flex-col justify-center items-center gap-[20px]"
        >
          <>
            <label htmlFor="email">Email</label>
            <input
              placeholder="JohnDoe@email.com"
              id="email"
              name="email"
              type="text"
              value={formInput.email}
              onChange={handleChange}
              className="text-center p-1 px-2 rounded bg-green-200 border-none outline-none"
            />
          </>
          <>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Atleast 6 charecters"
              id="password"
              name="password"
              type="password"
              value={formInput.password}
              onChange={handleChange}
              className="text-center p-1 px-2 rounded bg-green-200 border-none outline-none"
            />
          </>
          <button
            type="submit"
            disabled={loginMutation.isLoading}
            className="w-full p-1 rounded-xl border-1 border-green-400 font-semibold text-green-400"
          >
            {loginMutation.isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
        <div>
          <h4>
            New User?{" "}
            <Link to="/signup">
              <span className="text-black font-medium hover:text-green-400 transition-all duration-300 ease-in-out">
                Register
              </span>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
