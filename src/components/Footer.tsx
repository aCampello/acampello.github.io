export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Antonio Campello. All rights reserved.</p>
        <p>Built with React, Vite &amp; Tailwind.</p>
      </div>
    </footer>
  );
}
