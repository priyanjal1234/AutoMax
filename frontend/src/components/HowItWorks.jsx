import { CheckCircle2, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose your trigger',
    description: 'Select from 500+ apps or use webhooks, schedules, or manual triggers',
  },
  {
    number: '02',
    title: 'Add actions',
    description: 'Drag and drop actions to build your workflow visually',
  },
  {
    number: '03',
    title: 'Configure & test',
    description: 'Set parameters, map data, and test your workflow in real-time',
  },
  {
    number: '04',
    title: 'Deploy & monitor',
    description: 'Activate your workflow and track executions with detailed logs',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm text-gray-300">How it works</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, yet powerful
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From idea to automation in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl font-bold text-white/10">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    {step.title}
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <h3 className="text-2xl font-semibold mb-4">Ready to automate?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of teams already using FlowForge to streamline their workflows
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all hover:scale-105 transform">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
