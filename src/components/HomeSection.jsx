import { splitBlocks } from '../utils/helpers.js';

export default function HomeSection({ section, meta }) {
  const blocks = splitBlocks(section.bodyMarkdown);
  const ribbon = blocks[0] || '';
  const visionBlock = blocks.find(
    (b) =>
      !b.startsWith('#') &&
      !b.startsWith('*') &&
      b !== ribbon &&
      !b.startsWith('Written by') &&
      !b.startsWith('Developed') &&
      !b.startsWith('**Ruben') &&
      !b.startsWith('With contributions') &&
      !b.startsWith('Version'),
  );
  const creditsStart = blocks.findIndex((b) => b.startsWith('Written by'));
  const creditsMarkdown =
    creditsStart >= 0 ? blocks.slice(creditsStart).join('\n\n') : '';

  const titleParts = section.title.split(/\s+/);

  return (
    <section
      id="home"
      className="section section-home"
      aria-labelledby="home-title"
    >
      <div className="section-inner home-inner">
        <div className="home-ribbon">
          <span className="home-ribbon-line" />
          <span className="home-ribbon-text">{ribbon}</span>
        </div>

        <h1 id="home-title" className="home-title">
          {titleParts.map((word, i) => (
            <span key={i} className="home-title-line">{word}</span>
          ))}
        </h1>

        {section.subtitle && (
          <p className="home-tagline">{section.subtitle}</p>
        )}

        {visionBlock && <p className="home-vision">{visionBlock}</p>}

        <div className="home-logo-wrap">
          <img
            src="/assets/nieuwamsterdam.png"
            alt="New Amsterdam Agenda crest"
            className="home-logo"
          />
        </div>

        {creditsMarkdown && (
          <div className="home-credits markdown-body">
            <HomeCredits markdown={creditsMarkdown} />
          </div>
        )}

        <p className="home-version">{meta.version}</p>
      </div>
    </section>
  );
}

function HomeCredits({ markdown }) {
  const blocks = splitBlocks(markdown);

  return blocks.map((block, i) => {
    if (block.startsWith('**Ruben')) {
      return (
        <div key={i} className="home-authors">
          <AuthorsBlock text={block} />
        </div>
      );
    }

    if (block.startsWith('With contributions')) {
      return (
        <p key={i} className="home-contributions">{block}</p>
      );
    }

    if (block.startsWith('Version')) {
      return null;
    }

    return (
      <p key={i} className="home-credit-line">{block}</p>
    );
  });
}

function AuthorsBlock({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <p>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}
