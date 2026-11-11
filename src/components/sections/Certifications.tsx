import { useState } from 'react';
import { certifications } from '../../data/certifications';
import type { CertificationItem } from '../../types/portfolio.types';
import { SectionHeading } from '../common/SectionHeading';
import { CertificationCard } from './CertificationCard';
import { CertificateModal } from './CertificateModal';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectCert = (cert: CertificationItem) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        {/* Section Heading: "Verified Credentials" label removed as requested */}
        <SectionHeading
          title="Certifications & Diplomas"
          subtitle="Formal accreditations and technical certificates completed across artificial intelligence, full-stack programming, cybersecurity, and embedded systems."
        />

        {/* Balanced Responsive Grid of Compact Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              onSelect={handleSelectCert}
            />
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <CertificateModal
        certification={selectedCert}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
