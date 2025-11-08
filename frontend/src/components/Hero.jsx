import { ArrowRight, Play, Sparkles } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm text-gray-300">Automate anything, connect everything</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Build powerful
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              workflows
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect your apps and automate workflows. No code required.
            Visual workflow builder that scales with your business.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="group px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105 transform flex items-center gap-2">
              Start building free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-gray-500">Integrations</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl font-bold mb-1">1M+</div>
              <div className="text-sm text-gray-500">Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div className="text-sm font-medium mb-2">Trigger</div>
                <div className="text-xs text-gray-500">When this happens...</div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-white to-gray-400 rounded-sm"></div>
                </div>
                <div className="text-sm font-medium mb-2">Action</div>
                <div className="text-xs text-gray-500">Do this automatically...</div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-sm"></div>
                </div>
                <div className="text-sm font-medium mb-2">Result</div>
                <div className="text-xs text-gray-500">Get the outcome...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero