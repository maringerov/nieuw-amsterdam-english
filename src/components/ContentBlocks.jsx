import { splitBlocks } from '../utils/helpers.js';
import MarkdownBody from './MarkdownBody.jsx';
import Ornament from './Ornament.jsx';

export default function ContentBlocks({ bodyMarkdown, sectionId, isDark }) {
  const blocks = splitBlocks(bodyMarkdown);

  return blocks.map((block, index) => {
    if (block.trim() === '• • •') {
      return <Ornament key={index} isDark={isDark} />;
    }

    return (
      <div key={index} className="markdown-body">
        <MarkdownBody markdown={block} sectionId={sectionId} isDark={isDark} />
      </div>
    );
  });
}
