import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, CreditCard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Hoe werkt het', href: '/hoe-werkt-tappy' },
    { name: 'Prijzen', href: '/prijzen' },
    { name: 'Toepassingen', href: '/toepassingen' },
    { name: 'Over Tappy', href: '/over-tappy' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <motion.div 
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0, 0, 0, 0, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1.1, 1, 1, 1, 1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white"
                >
                  <span className="text-xl font-bold">T</span>
                </motion.div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  Tappy
                </span>
              </Link>
            </div>
            <div className="hidden lg:flex ml-10 space-x-8 items-center">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    isActive(link.href) ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative inline-flex overflow-hidden rounded-full p-[2px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#4f46e5_50%,#e2e8f0_100%)]"
                />
                <Link
                  to="/contact"
                  className="relative inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 hover:text-indigo-600 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start je event
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-100">
              <div className="flex flex-col space-y-4">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-base font-medium ${
                      isActive(link.href) ? 'text-indigo-600' : 'text-slate-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <div className="relative flex overflow-hidden rounded-full p-[2px]">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                      className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#4f46e5_50%,#e2e8f0_100%)]"
                    />
                    <Link
                      to="/contact"
                      className="relative flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-base font-medium text-slate-900 shadow-sm hover:bg-slate-50 hover:text-indigo-600 transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Start je event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Prominent Mollie Activation Card for Clients & Partners */}
          <div className="mb-12 rounded-3xl bg-gradient-to-r from-slate-800 via-indigo-950/80 to-slate-800 p-6 sm:p-8 border border-indigo-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
                <CreditCard className="h-3.5 w-3.5 text-indigo-400" />
                <span>Online Betalingen &middot; Mollie</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Wil je online betalingen ontvangen via Tappy?
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Koppel eenvoudig Bancontact, Payconiq en creditcards rechtstreeks aan je eigen bankrekening. Maak snel en zonder opstartkosten je account aan via onze partnerlink.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href="https://my.mollie.com/dashboard/signup/2873841?lang=be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 hover:shadow-indigo-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all group"
              >
                <span>Mollie activeren</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            <div className="sm:col-span-2">
              <span className="text-2xl font-bold tracking-tight text-white mb-4 block">
                Tappy
              </span>
              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                Eenvoudig online bestellen voor verenigingen, starters en KMO's.
              </p>
              <div className="text-sm text-slate-400 space-y-1">
                <p>BTW: BE 0885.464.696</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/hoe-werkt-tappy" className="hover:text-white transition-colors">Hoe het werkt</Link></li>
                <li><Link to="/prijzen" className="hover:text-white transition-colors">Prijzen</Link></li>
                <li><Link to="/toepassingen" className="hover:text-white transition-colors">Toepassingen</Link></li>
                <li>
                  <a 
                    href="https://my.mollie.com/dashboard/signup/2873841?lang=be" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    <span>Mollie activeren</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Bedrijf</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/over-tappy" className="hover:text-white transition-colors">Over ons</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Support & Help</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Juridisch</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy beleid</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie beleid</Link></li>
                <li><Link to="/voorwaarden" className="hover:text-white transition-colors">Algemene voorwaarden</Link></li>
                <li><button type="button" onClick={() => window.dispatchEvent(new Event('tappy:cookie-preferences'))} className="hover:text-white transition-colors text-left">Cookievoorkeuren</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
              <div className="text-sm text-slate-400 space-y-2">
                <p className="text-slate-200 font-medium">David Jacobs</p>
                <p><a href="tel:+32473410063" className="hover:text-white transition-colors">+32 473 41 00 63</a></p>
                <p><a href="mailto:info@tappy.be" className="hover:text-white transition-colors">info@tappy.be</a></p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Tappy. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-400">
              <span>Betaalmethodes:</span>
              <span className="font-medium text-slate-300">Bancontact</span>
              <span className="font-medium text-slate-300">Payconiq</span>
              <a
                href="https://my.mollie.com/dashboard/signup/2873841?lang=be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 hover:bg-indigo-600 text-indigo-300 hover:text-white px-3 py-1 text-xs font-semibold border border-slate-700 hover:border-indigo-500 transition-all shadow-sm"
              >
                <span>Mollie activeren</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
