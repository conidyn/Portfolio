import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/#about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="/cv.pdf" target="_blank" rel="noreferrer">
            CV
          </a>
          <button type="button" aria-label="Toggle theme">
            Theme
          </button>
        </div>
      </nav>
    </header>
  );
}