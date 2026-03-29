import React from 'react';
import '../styles/SectionTabs.css';

type Section = 'popular' | 'now_playing' | 'top_rated' | 'upcoming';

interface SectionTabsProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const SECTIONS: { id: Section; label: string; icon: string }[] = [
  { id: 'popular', label: 'Popular', icon: '🔥' },
  { id: 'now_playing', label: 'Now Playing', icon: '🎬' },
  { id: 'top_rated', label: 'Top Rated', icon: '⭐' },
  { id: 'upcoming', label: 'Upcoming', icon: '🗓️' },
];

const SectionTabs: React.FC<SectionTabsProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="section-tabs">
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          className={`section-tab${activeSection === section.id ? ' active' : ''}`}
          onClick={() => onSectionChange(section.id)}
        >
          <span className="tab-icon">{section.icon}</span>
          <span className="tab-label">{section.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SectionTabs;
