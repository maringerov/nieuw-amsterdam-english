export default function Ornament({ isDark }) {
  return (
    <div className={`ornament ${isDark ? 'is-dark' : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
