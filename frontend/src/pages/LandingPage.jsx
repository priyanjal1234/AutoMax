import React from "react";
import { Workflow } from "lucide-react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-90 -z-10"></div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Workflow className="w-8 h-8" />
            <span className="text-xl font-bold">AutoMax</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#cta"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Call to Action
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/login")} className="text-sm text-gray-400 hover:text-white transition-colors">
              Sign in
            </button>
            <button onClick={() => navigate("/register")} className="px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105 transform">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
