import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { mapImageSrc, slugify } from '../utils/helpers.js';

const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a || []), 'target', 'rel'],
    img: [...(defaultSchema.attributes?.img || []), 'alt', 'src'],
  },
};

export default function MarkdownBody({ markdown, sectionId, isDark }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[[rehypeSanitize, sanitizeSchema]]}
      components={{
        h3: ({ children }) => {
          const text = String(children);
          const id = `${sectionId}-${slugify(text)}`;
          return (
            <h3 id={id} className={`markdown-h3 ${isDark ? 'is-dark' : ''}`}>
              {children}
            </h3>
          );
        },
        strong: ({ children }) => (
          <strong className={isDark ? 'is-dark' : ''}>{children}</strong>
        ),
        em: ({ children }) => <em className="markdown-em">{children}</em>,
        img: ({ src, alt }) => (
          <img
            src={mapImageSrc(src)}
            alt={alt || ''}
            className="markdown-img"
            loading="lazy"
          />
        ),
        ol: ({ children }) => (
          <ol className={`markdown-ol ${isDark ? 'is-dark' : ''}`}>{children}</ol>
        ),
        ul: ({ children }) => (
          <ul className={`markdown-ul ${isDark ? 'is-dark' : ''}`}>{children}</ul>
        ),
        li: ({ children }) => <li className="markdown-li">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className={`markdown-blockquote ${isDark ? 'is-dark' : ''}`}>
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => {
          const isExternal =
            href?.startsWith('http') || href?.startsWith('//');
          const isMailto = href?.startsWith('mailto:');
          return (
            <a
              href={href}
              className={`markdown-link ${isDark ? 'is-dark' : ''}`}
              {...(isExternal && !isMailto
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {children}
            </a>
          );
        },
        p: ({ children }) => <p className="markdown-p">{children}</p>,
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
