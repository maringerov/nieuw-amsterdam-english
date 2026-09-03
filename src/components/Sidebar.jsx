import { assetUrl } from '../utils/assets.js';
import { extractSubsections, slugify } from '../utils/helpers.js';

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Sidebar({
  navItems,
  sectionsById,
  activeId,
  menuOpen,
  onMenuToggle,
  onNavigate,
  sidebarDark,
}) {
  return (
    <>
      <div
        className={`mobile-header ${sidebarDark ? 'is-dark' : ''}`}
        role="banner"
      >
        <button
          type="button"
          className="mobile-brand"
          onClick={() => onNavigate('home')}
        >
          <img
            src={assetUrl('assets/nieuwamsterdam.png')}
            alt=""
            className="mobile-brand-logo"
          />
          <span className="mobile-brand-text">New Amsterdam</span>
        </button>
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-controls="site-sidebar"
        >
          <span className="visually-hidden">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          aria-label="Close menu"
          onClick={() => onMenuToggle(false)}
        />
      )}

      <aside
        id="site-sidebar"
        className={`sidebar ${sidebarDark ? 'is-dark' : ''} ${menuOpen ? 'is-open' : ''}`}
        aria-label="Table of contents"
      >
        <div className="sidebar-inner">
          <button
            type="button"
            className="sidebar-logo-btn"
            onClick={() => onNavigate('home')}
          >
            <img
              src={assetUrl('assets/nieuwamsterdam.png')}
              alt="New Amsterdam Agenda"
              className="sidebar-logo"
            />
          </button>

          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              const section = sectionsById[item.id];
              const subsections =
                section && item.id !== 'home'
                  ? extractSubsections(section.bodyMarkdown)
                  : [];

              return (
                <div key={item.id || 'home-title'} className="nav-group">
                  <button
                    type="button"
                    className={`nav-link ${item.isTitle ? 'nav-title' : ''} ${isActive ? 'is-active' : ''}`}
                    onClick={() => item.id && onNavigate(item.id)}
                  >
                    {item.navLabel}
                  </button>

                  {isActive && subsections.length > 0 && (
                    <ul className="nav-subsections">
                      {subsections.map((title) => {
                        const subId = `${item.id}-${slugify(title)}`;
                        return (
                          <li key={subId}>
                            <button
                              type="button"
                              className="nav-sublink"
                              onClick={() => onNavigate(subId)}
                            >
                              {title}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>

          <p className="sidebar-footer">New Amsterdam Agenda / May 2026</p>
        </div>
      </aside>
    </>
  );
}
