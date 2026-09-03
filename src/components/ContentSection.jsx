import { isDarkSection, sectionLabel } from '../utils/helpers.js';
import ContentBlocks from './ContentBlocks.jsx';

export default function ContentSection({ section }) {
  const isDark = isDarkSection(section.id);

  return (
    <section
      id={section.id}
      className={`section section-content ${isDark ? 'is-dark' : ''}`}
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="section-inner content-inner">
        <p className="section-context">New Amsterdam Agenda</p>

        <div className={`section-label ${isDark ? 'is-dark' : ''}`}>
          <span className="section-label-line" />
          <span className="section-label-text">{sectionLabel(section.id)}</span>
        </div>

        <h2 id={`${section.id}-heading`} className={`section-title ${isDark ? 'is-dark' : ''}`}>
          {section.title}
        </h2>

        {section.subtitle && (
          <p className={`section-subtitle ${isDark ? 'is-dark' : ''}`}>
            {section.subtitle}
          </p>
        )}

        {section.quote && (
          <blockquote className={`section-quote ${isDark ? 'is-dark' : ''}`}>
            <p className="section-quote-text">&ldquo;{section.quote.text}&rdquo;</p>
            <cite className="section-quote-cite">— {section.quote.author}</cite>
          </blockquote>
        )}

        <div className={`section-body ${isDark ? 'is-dark' : ''}`}>
          <ContentBlocks
            bodyMarkdown={section.bodyMarkdown}
            sectionId={section.id}
            isDark={isDark}
          />
        </div>
      </div>
    </section>
  );
}
