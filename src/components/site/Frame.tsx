export default function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-bone/15 ${className}`}>
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-signal" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-signal" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-signal" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-signal" />
      {children}
    </div>
  );
}
