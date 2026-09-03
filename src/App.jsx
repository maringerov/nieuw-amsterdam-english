import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import content from '../content-en.json';
import HomeSection from './components/HomeSection.jsx';
import ContentSection from './components/ContentSection.jsx';
import Sidebar from './components/Sidebar.jsx';
import { assetUrl } from './utils/assets.js';
import { scrollToId, isDarkSection } from './utils/helpers.js';

export default function App() {
  const { meta, sections } = content;
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingFocusRef = useRef(null);

  const sectionsById = useMemo(
    () => Object.fromEntries(sections.map((s) => [s.id, s])),
    [sections],
  );

  const navItems = useMemo(() => {
    const order = meta.navOrder;
    return order.map((id) => {
      const section = sectionsById[id];
      return {
        id,
        navLabel: section.navLabel,
        isTitle: id === 'home',
      };
    });
  }, [meta.navOrder, sectionsById]);

  const contentSections = sections.filter((s) => s.id !== 'home');
  const sidebarDark = isDarkSection(activeId);

  useEffect(() => {
    document.title = meta.documentTitle;
  }, [meta.documentTitle]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-10% 0px -80% 0px', threshold: 0 },
    );

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));

    const subObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    document.querySelectorAll('h3[id]').forEach((el) => subObserver.observe(el));

    return () => {
      observer.disconnect();
      subObserver.disconnect();
    };
  }, []);

  const handleNavigate = useCallback((id) => {
    setMenuOpen(false);
    pendingFocusRef.current = id;
    setTimeout(() => {
      scrollToId(id);
      const el = document.getElementById(id);
      if (el) {
        if (!el.hasAttribute('tabindex')) {
          el.setAttribute('tabindex', '-1');
        }
        el.focus({ preventScroll: true });
      }
    }, 100);
  }, []);

  return (
    <div className="app">
      <Sidebar
        navItems={navItems}
        sectionsById={sectionsById}
        activeId={activeId}
        menuOpen={menuOpen}
        onMenuToggle={(open) => setMenuOpen(typeof open === 'boolean' ? open : !menuOpen)}
        onNavigate={handleNavigate}
        sidebarDark={sidebarDark}
      />

      <main className="main" id="main-content">
        <HomeSection
          section={sectionsById.home}
          meta={meta}
        />

        {contentSections.map((section) => (
          <ContentSection key={section.id} section={section} />
        ))}

        <footer className="site-footer">
          <div className="site-footer-inner">
            <img
              src={assetUrl('assets/nieuwamsterdam.png')}
              alt=""
              className="site-footer-logo"
            />
            <p className="site-footer-text">
              {meta.title} — {meta.tagline}
            </p>
            <p className="site-footer-version">{meta.version}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
