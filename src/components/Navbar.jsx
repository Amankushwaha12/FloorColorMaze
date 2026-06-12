import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-purple-500"
        >
          Cupid Games Studio
        </Link>

        <nav className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;