import { Utensils, Fish, Cookie, Coffee, GraduationCap, Users, Scissors, Gift, Beer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import useCasesHeroImg from '../assets/images/usecases_hero_1783525909613.jpg';

export default function UseCases() {
  useSEO({
    title: 'Toepassingen & Use Cases | Tappy voor Jouw Zaak, Fundraiser of Event',
    description: 'Ontdek eindeloze mogelijkheden met Tappy: van cadeaubonnen, webshops en drankkaarten tot pasta-avonden en wafelverkopen. Perfect voor salons, cafés en verenigingen.',
    keywords: 'use cases, webshop vereniging, cadeaubonnen verkopen, pasta avond organiseren, wafelverkoop, drankkaarten, ticketing'
  });

  const useCases = [
    {
      name: 'Schoonheidssalons & Kappers',
      description: 'Verkoop eenvoudig online cadeaubonnen. Klanten rekenen direct af en ontvangen de bon in hun mailbox.',
      icon: Scissors,
    },
    {
      name: 'Drankkaarten & Cafés',
      description: 'Verkoop drankkaarten vooraf online. Minder cash op het event of in de zaak en snellere bediening aan de toog.',
      icon: Beer,
    },
    {
      name: 'Wafelverkoop & Schoolacties',
      description: 'Van ontbijtmanden tot pannenkoekenbak. Laat leerlingen of leden bestellingen verzamelen via hun eigen unieke link.',
      icon: Cookie,
    },
    {
      name: 'Eetdagen & Pasta-avonden',
      description: 'Verzamel bestellingen voor spaghetti of mosselfeesten. Voorkom lange wachtrijen met tijdsloten voor afhaling.',
      icon: Utensils,
    },
    {
      name: 'Club fundraisers & Benefiets',
      description: 'Haal geld op voor je sportclub of jeugdbeweging. Een eenvoudig bestel- en betaalproces voor je supporters.',
      icon: Users,
    },
    {
      name: 'Cadeaubonnen voor KMO\'s',
      description: 'Of je nu een bloemenzaak of lokale boetiek hebt, verkoop 24/7 online cadeaubonnen met automatische afhandeling.',
      icon: Gift,
    },
  ];

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-16 overflow-hidden">
        <img 
          src={useCasesHeroImg} 
          alt="Diverse toepassingen van Tappy" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Eén platform, eindeloze mogelijkheden
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Toepassingen</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tappy voor ondernemers en verenigingen
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Van cadeaubonnen voor salons tot eetdagen voor scholen. Ontdek hoe veelzijdig Tappy ingezet kan worden.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.name} className="flex flex-col bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-md">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                    <useCase.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  {useCase.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{useCase.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mt-20 flex justify-center">
          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all"
          >
            Start jouw event met Tappy
          </Link>
        </div>
      </div>
    </div>
  );
}
