import type { ProjectItem } from '../../types/portfolio.types';
import {
  MapPin,
  Bus,
  QrCode,
  Building2,
  Key,
  CheckCircle2,
  HeartPulse,
  Pill,
  Activity,
  Dumbbell,
  Flame,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  Clock,
  Layers
} from 'lucide-react';

interface ProjectPreviewGraphicProps {
  project: ProjectItem;
  isActive: boolean;
}

export function ProjectPreviewGraphic({ project, isActive }: ProjectPreviewGraphicProps) {
  const isFeatured = project.isFeatured;
  const isInProgress = project.status?.toLowerCase() === 'in progress';

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#111114] via-[#15151a] to-[#0d0d10] flex flex-col justify-between p-4 sm:p-6 select-none">
      {/* Background Ambient Glow */}
      <div
        className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isActive ? 'bg-orange-500/15 opacity-100' : 'bg-orange-500/5 opacity-40'
        }`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Bar: Window Controls & Badges */}
      <div className="relative z-10 flex items-center justify-between gap-3 border-b border-neutral-800/80 pb-3">
        {/* Window dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500/70" />
          <span className="ml-2 text-[10px] sm:text-xs font-mono text-neutral-400 truncate max-w-[140px] sm:max-w-[220px]">
            {project.type}
          </span>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-1.5 shrink-0">
          {isFeatured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[10px] font-mono font-medium shadow-[0_0_10px_rgba(249,115,22,0.15)]">
              <Sparkles className="w-3 h-3 text-orange-400" />
              Featured
            </span>
          )}
          {isInProgress && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-medium">
              <Clock className="w-3 h-3 text-amber-400" />
              In Progress
            </span>
          )}
        </div>
      </div>

      {/* Center: Thematic Visual Canvas */}
      <div className="relative z-10 flex-1 my-3 sm:my-4 flex items-center justify-center">
        {renderProjectCanvas(project.schematic || 'generic')}
      </div>

      {/* Bottom Bar: Title & Primary Stack summary */}
      <div className="relative z-10 flex items-end justify-between gap-4 pt-3 border-t border-neutral-800/80 bg-gradient-to-t from-black/40 to-transparent">
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-0.5">
            Architecture Preview
          </span>
          <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white truncate">
            {project.title}
          </h4>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono text-neutral-400 bg-neutral-900/90 border border-neutral-800 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono text-neutral-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function renderProjectCanvas(schematic: string) {
  switch (schematic) {
    case 'transit':
      return (
        <div className="w-full max-w-lg h-full flex items-center justify-center">
          <div className="w-full bg-[#121215]/90 border border-neutral-800/80 rounded-xl p-3.5 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 border-b border-neutral-800/60 pb-2">
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <Bus className="w-4 h-4 text-orange-500" />
                <span>WAYPOINT ROUTE #401</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                LIVE GPS
              </span>
            </div>

            {/* Simulated Route Line */}
            <div className="relative my-4">
              <div className="h-1.5 w-full bg-neutral-800 rounded-full relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
              </div>
              <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-neutral-400 mt-2">
                <span className="text-white font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-500" /> Station A
                </span>
                <span className="text-orange-400 font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                  Seat 14A Booked
                </span>
                <span className="text-neutral-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-600" /> Destination
                </span>
              </div>
            </div>

            {/* Telemetry pill & QR verification */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-orange-400" />
                <span className="text-neutral-300">QR Ticket Verified</span>
              </div>
              <span className="text-[10px] text-orange-400/90 font-medium bg-orange-500/10 px-2 py-0.5 rounded">
                FastAPI + LangGraph
              </span>
            </div>
          </div>
        </div>
      );

    case 'accommodation':
      return (
        <div className="w-full max-w-lg h-full flex items-center justify-center">
          <div className="w-full bg-[#121215]/90 border border-neutral-800/80 rounded-xl p-3.5 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 border-b border-neutral-800/60 pb-2">
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span>PROPERTY PORTAL // MERN</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px]">
                SHARED ROOMS
              </span>
            </div>

            {/* Floorplan & Room Grid */}
            <div className="grid grid-cols-3 gap-2 my-2 text-center">
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 block">Unit 101</span>
                <span className="text-xs font-semibold text-emerald-400">Available</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-orange-500/30 bg-orange-500/5">
                <span className="text-[10px] font-mono text-orange-400 block">Unit 102</span>
                <span className="text-xs font-semibold text-white">Selected</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 block">Unit 103</span>
                <span className="text-xs font-semibold text-neutral-500">Occupied</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Key className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-neutral-300">JWT Role-Based Auth</span>
              </div>
              <span className="text-[10px] text-neutral-400">Rent Invoicing OK</span>
            </div>
          </div>
        </div>
      );

    case 'healthcare':
      return (
        <div className="w-full max-w-lg h-full flex items-center justify-center">
          <div className="w-full bg-[#121215]/90 border border-neutral-800/80 rounded-xl p-3.5 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 border-b border-neutral-800/60 pb-2">
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <HeartPulse className="w-4 h-4 text-orange-500" />
                <span>ADHERENCE MONITORING</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                100% ADHERENCE
              </span>
            </div>

            {/* Pulse Waveform / Weekly Adherence */}
            <div className="flex items-center justify-between gap-1 sm:gap-2 my-2 py-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <div key={day} className="flex-1 text-center">
                  <div
                    className={`h-9 sm:h-11 rounded flex items-center justify-center border ${
                      idx < 6
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                        : 'bg-orange-500/15 border-orange-500/30 text-orange-400 font-bold'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500 mt-1 block">{day}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Pill className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-neutral-300">Missed Dose Alert: Active</span>
              </div>
              <span className="text-[10px] text-neutral-400">Automated Notification</span>
            </div>
          </div>
        </div>
      );

    case 'fitness':
      return (
        <div className="w-full max-w-lg h-full flex items-center justify-center">
          <div className="w-full bg-[#121215]/90 border border-neutral-800/80 rounded-xl p-3.5 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 border-b border-neutral-800/60 pb-2">
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <Dumbbell className="w-4 h-4 text-orange-500" />
                <span>CROSS-PLATFORM MOBILE</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px]">
                REACT NATIVE // EXPO
              </span>
            </div>

            {/* Activity Streak and Stats */}
            <div className="grid grid-cols-3 gap-2 my-2 text-center">
              <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 block">Workouts</span>
                <span className="text-sm sm:text-base font-bold text-white">24 Sessions</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 block">Streak</span>
                <span className="text-sm sm:text-base font-bold text-orange-400 flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-500" /> 12 Days
                </span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 block">Goal</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400">88% Done</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-neutral-300">Daily Log & Analytics</span>
              </div>
              <span className="text-[10px] text-neutral-400">iOS & Android Ready</span>
            </div>
          </div>
        </div>
      );

    case 'pharmacy':
      return (
        <div className="w-full max-w-lg h-full flex items-center justify-center">
          <div className="w-full bg-[#121215]/90 border border-neutral-800/80 rounded-xl p-3.5 sm:p-5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 border-b border-neutral-800/60 pb-2">
              <div className="flex items-center gap-1.5 text-orange-400 font-semibold">
                <ClipboardList className="w-4 h-4 text-orange-500" />
                <span>DISPENSARY PORTAL</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                SPRING BOOT + JPA
              </span>
            </div>

            {/* Inventory table simulation */}
            <div className="space-y-1.5 my-2">
              <div className="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-neutral-800 text-xs font-mono">
                <span className="text-neutral-200">Amoxicillin 500mg</span>
                <span className="text-emerald-400 text-[11px]">In Stock (320)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-neutral-800 text-xs font-mono">
                <span className="text-neutral-200">Paracetamol 500mg</span>
                <span className="text-emerald-400 text-[11px]">In Stock (840)</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-800/60 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-neutral-300">Digital Prescription Stamp</span>
              </div>
              <span className="text-[10px] text-neutral-400">Spring Security RBAC</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center text-neutral-500 font-mono text-sm">
          <Layers className="w-8 h-8 text-orange-500/50" />
        </div>
      );
  }
}

