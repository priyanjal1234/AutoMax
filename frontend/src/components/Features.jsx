import React from 'react'
import { Zap, Code2, GitBranch, Sparkles, Lock, Gauge } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute workflows in milliseconds with our optimized engine',
  },
  {
    icon: Code2,
    title: 'No Code Required',
    description: 'Visual builder makes automation accessible to everyone',
  },
  {
    icon: GitBranch,
    title: 'Complex Logic',
    description: 'Build sophisticated workflows with conditional paths',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Smart suggestions and auto-completion for faster building',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance certifications',
  },
  {
    icon: Gauge,
    title: 'Real-time Monitoring',
    description: 'Track execution, debug issues, and optimize performance',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm text-gray-300">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features to build, deploy, and scale your automations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features