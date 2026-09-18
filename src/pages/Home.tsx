import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Smartphone, CreditCard, ListOrdered, QrCode, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import eventHeroImg from '../assets/images/event_gathering_hero_1783525060115.jpg';
import Reviews from '../components/Reviews';

const rotatingWords = [
  'online bestellingen',
  'cadeaubonnen',
  'eetdagen',
  'afhaalacties',
  'voorverkoop',
  'schoolacties',
  'clubverkopen',
  'events',
  'workshops',
  'BBQ’s',
  'ontbijtacties',
  'wafelverkoop',
  'reservaties',
  'betalingen',
  'donaties',
  'seizoensacties',
  'promopakketten',
  'merchandise',
  'ledenbijdragen',
  'tickets',
];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useSEO({
    title: 'Tappy | Online Bestelsysteem voor Salons, Kappers, Horeca & Verenigingen',
    description: 'Eenvoudig online bestellen voor elke zaak en event. Van cadeaubonnen voor salons tot drankkaarten voor festivals. Start vandaag nog zonder opstartkosten en ontdek de slimme manier van verkopen.',
    keywords: 'online bestellen, bestelsysteem, salons, kappers, restaurants, cafés, sportclubs, verenigingen, evenementen, cadeaubonnen'
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 pb-16 pt-14 sm:pb-20">
        <motion.div 
          className="absolute inset-0 -z-20"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img 
            src={eventHeroImg} 
            alt="Samen tafelen op een event" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply" />
        </motion.div>
        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col items-center justify-center min-h-[140px] sm:min-h-[170px]"
            >
              <span className="block">Tappy helpt je met je…</span>
              <span className="relative mt-2 inline-block h-[1.35em] overflow-hidden text-indigo-400">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[currentWordIndex]}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -35, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block whitespace-nowrap drop-shadow-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-white"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-slate-300"
            >
              Tappy helpt starters, kleine KMO's, verenigingen en organisatoren om bestellingen, cadeaubonnen en betalingen moeiteloos online te beheren.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                to="/contact"
                className="rounded-full bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all"
              >
                Start je event
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-indigo-300 transition-colors">
                Vraag een demo <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <Reviews />

      {/* Benefits Section */}
      <div className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Voordelen</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Alles wat je nodig hebt voor een succesvol event
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Met Tappy bespaar je tijd en voorkom je fouten. Ontdek hoe ons platform jouw vereniging helpt.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <ListOrdered className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Eenvoudig online bestellingen verzamelen
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Laat leden en supporters makkelijk online hun bestelling doorgeven. Geen handmatige invoer meer nodig.</p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <CreditCard className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Automatische betalingen
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Ontvang betalingen direct via Bancontact en Payconiq via Mollie. Geen gedoe met overschrijvingen of cash geld op de dag zelf.</p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <a
                      href="https://my.mollie.com/dashboard/signup/2873841?lang=be"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group"
                    >
                      <span>Mollie activeren</span>
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <QrCode className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Afhaalcodes voor snelle afhaling
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Elke bestelling krijgt een unieke code. Scan of controleer de code en geef de juiste bestelling razendsnel mee.</p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <ListOrdered className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Overzicht van alle bestellingen
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Behoud altijd het overzicht in een duidelijk dashboard. Weet precies wat je moet voorbereiden en inkopen.</p>
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Smartphone className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Werkt perfect op smartphone en tablet
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Zowel voor je klanten als voor jouw team tijdens de afhaling. Tappy werkt soepel op elk apparaat.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Voor wie is Tappy?</h2>
            <p className="mt-4 text-lg text-slate-600">Tappy is gebouwd voor iedereen die bestellingen en betalingen eenvoudig wil afhandelen, van evenement tot onderneming.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'Starters & Eenmanszaken',
              'Salons & Kappers',
              'Restaurants & Cafés',
              'Scholen & Oudercomités',
              'Sportclubs & Verenigingen',
              'Festivals & Evenementen',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link
              to="/contact"
              className="rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all"
            >
              Ontdek wat Tappy voor jou kan doen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
