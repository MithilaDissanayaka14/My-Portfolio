import { useState } from 'react';
import { agileWorkflowSteps } from '../../data/agileWorkflow';
import { FileText, Code2, CheckCircle, Rocket, Sparkles } from 'lucide-react';

export function AgileWorkflowOrbit() {
  const [activeStepId, setActiveStepId] = useState<string>('planning');

  const activeStep =
    agileWorkflowSteps.find((s) => s.id === activeStepId) || agileWorkflowSteps[0];

  const getStepIcon = (icon: string) => {
    switch (icon.toLowerCase()) {
      case 'filetext':
        return <FileText className="w-5 h-5 text-orange-400 stroke-[1.75]" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-orange-400 stroke-[1.75]" />;
      case 'checkcircle':
        return <CheckCircle className="w-5 h-5 text-orange-400 stroke-[1.75]" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-orange-400 stroke-[1.75]" />;
      default:
        return <Sparkles className="w-5 h-5 text-orange-400 stroke-[1.75]" />;
    }
  };

  // Node placement positions around a 300px circle (radius = 120px, center = 150px)
  // Planning (Top: 0 deg) -> (150, 30)
  // Development (Right: 90 deg) -> (270, 150)
  // Testing (Bottom: 180 deg) -> (150, 270)
  // Deploy (Left: 270 deg) -> (30, 150)
  const nodePositions: Record<string, { top: string; left: string }> = {
    planning: { top: '8%', left: '50%' },
    development: { top: '50%', left: '92%' },
    testing: { top: '92%', left: '50%' },
    deploy: { top: '50%', left: '8%' },
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-[420px] mx-auto select-none">
      {/* Outer ambient glow */}
      <div
        className="absolute w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Circular Orbit Area */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-neutral-800 flex items-center justify-center">
        {/* Subtle orange orbit arc line */}
        <div
          className="absolute inset-4 rounded-full border border-dashed border-orange-500/25 pointer-events-none"
          aria-hidden="true"
        />

        {/* Inner secondary orbit ring */}
        <div
          className="absolute inset-16 rounded-full border border-neutral-850 pointer-events-none"
          aria-hidden="true"
        />

        {/* Center Label Area */}
        <div className="text-center z-10 flex flex-col items-center justify-center p-4">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold mb-0.5">
            Agile
          </span>
          <span className="text-sm sm:text-base font-bold text-white tracking-tight">
            Workflow
          </span>
          <div className="mt-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
            {activeStep.name}
          </div>
        </div>

        {/* Interactive Orbit Nodes */}
        {agileWorkflowSteps.map((step) => {
          const isActive = step.id === activeStepId;
          const pos = nodePositions[step.id] || { top: '50%', left: '50%' };

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepId(step.id)}
              onMouseEnter={() => setActiveStepId(step.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-full"
              style={{ top: pos.top, left: pos.left }}
              aria-label={`Agile phase: ${step.name}`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-orange-500/20 border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-110'
                    : 'bg-neutral-900 border border-neutral-750 hover:border-orange-500/50 hover:scale-105'
                }`}
              >
                {getStepIcon(step.icon)}
              </div>
              <span
                className={`mt-1.5 text-[11px] font-mono transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-orange-400 font-semibold'
                    : 'text-neutral-400 group-hover:text-neutral-200'
                }`}
              >
                {step.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Description Note */}
      {activeStep.description && (
        <div className="mt-8 px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center max-w-xs shadow-sm">
          <p className="text-xs text-neutral-400 leading-relaxed font-mono">
            {activeStep.description}
          </p>
        </div>
      )}
    </div>
  );
}

