import { Users, Lightbulb, Target, CheckCircle2, Wallet, Zap, Receipt, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import aboutHeroImg from '../assets/images/about_hero_1783525922051.jpg';
import Reviews from '../components/Reviews';

export default function About() {
  useSEO({
    title: 'Over Tappy | Het Verhaal en de Missie Achter Ons Slimme Bestelplatform',
    description: 'Ontdek het verhaal achter Tappy. Ontstaan uit persoonlijke frustratie bij verenigingen, gebouwd voor ultieme eenvoud voor ondernemers. Eerlijke prijzen en direct je geld op je eigen rekening.',
    keywords: 'over tappy, bestelplatform missie, ondernemers, verenigingen, david jacobs, eerlijk bestelsysteem, online verkoop'
  });

  const values = [
    {
      name: 'Zeker je geld direct op je rekening',
      description: 'Geen wachttijden of tussenrekeningen. Transacties gaan rechtstreeks naar jouw eigen Bancontact of Payconiq account.',
      icon: Wallet,
    },
    {
      name: 'Geen gedoe en eenvoudig',
      description: 'Een platform dat iedereen kan gebruiken. Zonder technische kennis zet je in no-time een online bestelpagina op.',
      icon: Zap,
    },
    {
      name: 'Enkel betalen voor wat besteld is',
      description: 'Bij onze Flex formule betaal je enkel een klein percentage op effectieve bestellingen. Geen verkoop = geen kosten.',
      icon: Receipt,
    },
    {
      name: 'Geen dure kosten of onderhoudsfees',
      description: 'Eerlijke en transparante prijzen. We rekenen geen verborgen kosten aan voor onderhoud of opstart.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-16 overflow-hidden">
        <img 
          src={aboutHeroImg} 
          alt="Het team achter Tappy" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Het verhaal achter Tappy
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Onze Missie</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ontstaan vanuit de praktijk
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col gap-y-6">
              <p className="text-lg leading-8 text-slate-600 font-medium">
                Tappy is het geesteskind van drie oprichters: Indy, David & Noah.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                Alle drie kwamen we met een andere invalshoek, maar we deelden dezelfde frustratie. Als we iets wilden aankopen, tickets bestellen of een cadeaubon regelen bij lokale verenigingen of kleine zaken, botsten we vaak op omslachtige systemen. Excel-lijstjes, papieren bonnetjes, manuele overschrijvingen en onduidelijke communicatie.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                Vanuit oplossend denken hebben we onze ervaringen gebundeld. Het resultaat? Tappy. Een doordacht, maar vooral <strong>eenvoudig systeem</strong> dat zeer toegankelijk is voor iedereen. Of je nu een startende kapper bent, een oudercomité of een festival organiseert.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8">
              {values.map((value) => (
                <div key={value.name} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 mb-4">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.name}</h3>
                  <p className="text-slate-600 text-sm leading-6">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 sm:mt-32">
        <Reviews />
      </div>
    </div>
  );
}
