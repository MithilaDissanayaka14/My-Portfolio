import { useState } from 'react';
import { skillCategoryGroups, allSkills } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { TechIcon } from '../common/TechIcon';
import { Sparkles, Users, Brain, Target, MessageSquare, Briefcase } from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases & ORM' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'embedded', label: 'Embedded' },
    { id: 'tools', label: 'Tools' },
  ];

  // Soft skills group
  const softSkillsGroup = skillCategoryGroups.find((g) => g.id === 'soft-skills');

  // Determine which skills to display based on active tab
  const displayedSkills =
    activeTab === 'all'
      ? allSkills.filter((s) => s.category !== 'soft-skills')
      : allSkills.filter((s) => s.category === activeTab);

  // Helper for soft skill icons
  const getSoftSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'problem solving':
        return <Target className="w-4 h-4 text-orange-400" />;
      case 'teamwork':
        return <Users className="w-4 h-4 text-orange-400" />;
      case 'leadership':
        return <Sparkles className="w-4 h-4 text-orange-400" />;
      case 'analytical thinking':
        return <Brain className="w-4 h-4 text-orange-400" />;
      case 'communication':
        return <MessageSquare className="w-4 h-4 text-orange-400" />;
      case 'project management':
        return <Briefcase className="w-4 h-4 text-orange-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Heading */}
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit developed through academic training, hands-on full-stack development, and hardware-software integration."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                activeTab === cat.id
                  ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/20 border border-orange-400/40'
                  : 'bg-neutral-900/80 text-neutral-400 border border-neutral-800/80 hover:text-white hover:bg-neutral-850 hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-[#141416]/90 border border-neutral-800/80 hover:border-orange-500/50 hover:bg-neutral-900/90 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.12)] hover:-translate-y-0.5"
            >
              {/* Tech Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-orange-500/30 group-hover:scale-105 transition-all duration-200">
                <TechIcon name={skill.name} className="w-5 h-5" />
              </div>

              {/* Skill Info */}
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white truncate transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] text-neutral-500 font-mono capitalize">
                  {skill.category.replace('-', ' ')}
                </span>
              </div>

              {/* Subtle hover accent light */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Soft Skills & Professional Strengths Compact Strip */}
        {softSkillsGroup && softSkillsGroup.skills.length > 0 && (
          <div className="mt-16 pt-10 border-t border-neutral-800/70">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Professional & Collaborative Strengths
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {softSkillsGroup.skills.map((softSkill) => (
                <div
                  key={softSkill.id}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/90 hover:border-orange-500/40 text-neutral-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-medium shadow-sm hover:shadow-orange-500/5"
                >
                  {getSoftSkillIcon(softSkill.name)}
                  <span>{softSkill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
