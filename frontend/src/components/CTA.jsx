import { ArrowRight } from 'lucide-react'
import React from 'react'

const CTA = () => {
  return (
    <section id='cta' className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start automating today
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            No credit card required. Build unlimited workflows on our free plan.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <button className="group px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105 transform flex items-center gap-2">
              Get started free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
              Talk to sales
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Free forever plan
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA