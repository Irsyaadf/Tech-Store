import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGoogle, FaApple, FaRocket, FaShieldAlt, FaGift, FaStar, FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  return (
    <div className="min-h-screen flex font-sans bg-gradient-to-r from-blue-400 to-purple-500">
      {/* Left: Benefits Showcase */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center z-20 p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white w-full max-w-lg"
          >
            {/* SVG Illustration */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <svg width="100%" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="100" width="300" height="180" rx="20" fill="url(#paint0_linear)" fillOpacity="0.2" stroke="white" strokeWidth="2"/>
                <circle cx="150" cy="150" r="40" fill="white" fillOpacity="0.8"/>
                <rect x="210" cy="140" width="160" height="20" rx="10" fill="white" fillOpacity="0.6"/>
                <rect x="210" cy="170" width="120" height="20" rx="10" fill="white" fillOpacity="0.4"/>
                <path d="M120 230H380" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="120" cy="230" r="10" fill="white"/>
                <circle cx="150" cy="230" r="10" fill="white" fillOpacity="0.5"/>
                <circle cx="180" cy="230" r="10" fill="white" fillOpacity="0.3"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="100" y1="100" x2="400" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF"/>
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <h1 className="text-4xl font-bold mb-4 text-white">
              Welcome to TechShop
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Your favorite tech marketplace
            </p>
            
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-300 text-xl" />
              ))}
            </div>
            <p className="mt-4 text-blue-100">
              Rated 4.9/5 by 10,000+ tech enthusiasts
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 py-12 bg-white">
        <div className="max-w-md w-full mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold  bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 bg-clip-text text-transparent">Welcome Back!</h2>
            <p className="text-gray-500 mt-2">Sign in to access member-exclusive deals</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white py-8 px-8 rounded-xl shadow-xl border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                      <span className="ml-2 text-gray-600">Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 hover:underline transition">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white py-3 rounded-lg font-medium transition-all shadow-md"
                >
                  Sign In
                </motion.button>

                <div className="flex items-center my-5">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="mx-3 text-gray-400 text-sm">OR CONTINUE WITH</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    <FaGoogle />
                    Google
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    <FaApple className="text-black" />
                    Apple
                  </motion.button>
                </div>
              </form>

              <div className="mt-8 text-center text-sm text-gray-600">
                New to TechShop?{' '}
                <Link 
                  to="/register" 
                  className="text-blue-500 hover:text-blue-600 hover:underline font-medium transition"
                >
                  Create an account
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-400">
              By continuing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Login;