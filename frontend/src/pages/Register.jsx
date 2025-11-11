import {
  AlertCircle,
  ArrowRight,
  Lock,
  Mail,
  User,
  Workflow,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import registerSchema from "../schemas/registerSchema";

const Register = () => {
  const [register, setregister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    let { name, value } = e.target;
    setregister((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let result = registerSchema.safeParse(register);

    if (!result.success) {
      const fieldErrors = result.error.issues.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(fieldErrors);
    }

    else {
        setErrors({})
        // Register Logic here
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-90 -z-10"></div>

      <div className="flex items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Workflow className="w-8 h-8" />
            <span className="text-2xl font-bold">AutoMax</span>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-gray-400 mb-8">
              Start automating your workflows today
            </p>

            {/* {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )} */}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={register.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    name="fullName"
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={register.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    name="email"
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    value={register.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    name="password"
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    value={register.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    name="confirmPassword"
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 bg-black/50 border border-white/10 rounded cursor-pointer mt-1"
                />
                <span className="text-sm text-gray-400">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? "Creating account..." : "Create account"}
                {!loading && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-gray-400 mb-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-white hover:text-gray-300 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 mt-8">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
