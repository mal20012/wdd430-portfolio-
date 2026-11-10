import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 py-4 text-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-4"
      >
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
