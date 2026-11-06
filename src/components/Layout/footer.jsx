import { Link } from 'react-router';
import { Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-8 py-14 md:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link to="/" className="mb-3 font-semibold uppercase tracking-[0.3em] text-gray-300">
              Masterwork Music
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
                Discover your sound with quality musical instruments.
                Everything you need to create beautiful music.
            </p>
          </div>

          <div>
            <p className="max-w-xs text-sm leading-7 text-gray-400">
                Whether you're just starting your musical journey or are an experienced musician,
                Masterwork Music brings together a collection of instruments designed 
                to inspire, perform, and make every moment of music unforgettable.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/category/guitar" className="transition hover:text-white">Guitars</Link></li>
              <li><Link to="/category/bass" className="transition hover:text-white">Bass</Link></li>
              <li><Link to="/category/keyboard" className="transition hover:text-white">Keyboards</Link></li>
              <li><Link to="/category/drums" className="transition hover:text-white">Drums</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 inline-flex gap-2 font-semibold text-white"><Mail />Support</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/contact" className="transition hover:text-white underline">Contact Us</Link></li>
              <li><Link to="/contact" className="transition hover:text-white underline">Message Us</Link></li>
              <li><Link to="/contact" className="transition hover:text-white underline">Suggestions</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-800 px-8 py-6 md:px-16">
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row">
          <p>© 2026 Masterwork Music. All rights reserved.</p>
          <p>Made by Guitarist</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
