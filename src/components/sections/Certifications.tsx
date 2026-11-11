import { certifications } from '../../data/certifications';
import { SectionHeading } from '../common/SectionHeading';
import { CertificationCard } from './CertificationCard';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background glow accent with viewport containment */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [clip-path:inset(0)]"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Diplomas"
          subtitle="Formal accreditations and technical certificates completed across artificial intelligence, full-stack programming, cybersecurity, and embedded systems."
        />

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

