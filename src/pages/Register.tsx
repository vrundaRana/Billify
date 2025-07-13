import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, User, Mail, Lock, Building, Receipt } from "lucide-react";
import { useState } from "react";
import Popup from "../components/Popup";
import axios from "axios";
import { useNavigate } from "react-router";
const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  confirmPassword: z.string(),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  businessType: z.string().min(1, "Please select a business type"),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type RegisterForm = z.infer<typeof registerSchema>;
const API=import.meta.env.VITE_API_URL
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [popup, setPopup] = useState<{ isVisible: boolean; type: 'success' | 'error'; message: string }>({ isVisible: false, type: 'success', message: '' });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
  });
  const navigate = useNavigate();
  const onSubmit = async (data: RegisterForm) => {
    try {
      await axios.post(`${API}/api/auth/register`, {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        businessName: data.businessName,
        businessType: data.businessType
      })
      setPopup({ isVisible: true, type: 'success', message: 'Account created successfully! Welcome to Billify.' });
      navigate("/dashboard");
    } catch (error: unknown) {
      let errorMessage = 'Registration failed. Please try again.';
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setPopup({ isVisible: true, type: 'error', message: errorMessage });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200 flex items-center justify-center flex-col py-12 px-4 mt-8 gap-3">
      <h1 className="text-4xl font-extrabold m-4"><Receipt className="inline-block" size={42} />Billify</h1>
      <div className="max-w-md w-full bg-[#f4f4f2] rounded-xl shadow-lg p-8 border-2">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Join Billify and start creating professional receipts</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg"
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg "
                />
              </div>
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg  "
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-500 rounded-lg  "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-500 rounded-lg "
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Business Info */}
          <div>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                {...register("businessName")}
                type="text"
                placeholder="Business Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg "
              />
            </div>
            {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>}
          </div>

          <div>
            <select
              {...register("businessType")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg "
            >
              <option value="">Select Business Type</option>
              <option value="retail">Retail</option>
              <option value="restaurant">Restaurant</option>
              <option value="service">Service</option>
              <option value="freelance">Freelance</option>
              <option value="other">Other</option>
            </select>
            {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>}
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              {...register("terms")}
              type="checkbox"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-semibold">
            Sign in
          </a>
        </p>
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

export default Register;