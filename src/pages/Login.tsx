import { Lock, Mail, EyeOff, Eye, Receipt } from "lucide-react";
import { useState } from "react";
import {  z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import Popup from "../components/Popup";
import axios from "axios";
const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof LoginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setPopup] = useState<{ isVisible: boolean; type: 'success' | 'error'; message: string }>({ isVisible: false, type: 'success', message: '' });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login",{
        email: data.email,
        password: data.password
      });
      
      localStorage.setItem('token', response.data.token);
      setPopup({ isVisible: true, type: 'success', message: 'Login successful! Redirecting...' });
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } catch (error: unknown) {
      let errorMessage = 'Login failed. Please try again.';
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setPopup({ isVisible: true, type: 'error', message: errorMessage });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center flex-col py-12 px-4 mt-8 gap-3">
      <h1 className="text-4xl font-extrabold m-4 font-['DynaPuff']">
        <Receipt className="inline-block" size={42} /> Billify
      </h1>
      <div className="max-w-md w-full bg-[#f4f4f2] rounded-xl shadow-lg p-8 border-2">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-['Poppins']">Login</h1>
          <p className="text-gray-600">Join Billify and start creating professional receipts</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full pl-10 pr-10 py-3 border border-gray-500 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            <p className="text-center text-gray-600 mt-6">
              Don&apos;t have an Account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline font-semibold">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      
      <Popup
        message={popup.message}
        type={popup.type}
        isVisible={popup.isVisible}
        onClose={() => setPopup({ ...popup, isVisible: false })}
      />
    </div>
  );
};
export default Login;
