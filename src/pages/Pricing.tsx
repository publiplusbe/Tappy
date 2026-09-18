import { Check, ExternalLink, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import pricingHeroImg from '../assets/images/pricing_hero_1783525894417.jpg';

export default function Pricing() {
  useSEO({
    title: 'Tarieven & Prijzen | Eerlijke Kosten voor Jouw Bestelsysteem',
    description: 'Start vandaag nog zonder financieel risico met Tappy. Ontdek onze transparante Flex, Plus en Pro pakketten, perfect afgestemd op verenigingen, starters en KMO\'s.',
    keywords: 'tappy prijzen, tarieven bestelsysteem, kosten online bestellen, flex plus pro, abonnementen, transactiekosten'
  });

  const tiers = [
    {
      name: 'Tappy Flex',
      id: 'tier-flex',
      tagline: 'Voor wie eenvoudig wil starten zonder jaarlijkse vaste kost.',
      summary: 'Met Tappy Flex betaal je geen activatiekost en geen jaarlijkse vaste kost. Je betaalt 5% per bestelling. Flex is ideaal voor één event, een tijdelijke actie, eetdag, cadeaubonactie of occasioneel verkoopmoment.',
      priceMain: '€0',
      priceLabel: 'activatiekost'
      commission: '5% per bestelling',
      noSub: 'Geen activatiekost · Geen jaarlijkse kost',
      includedTitle: 'Inbegrepen:',
      features: [
        'Eén standaard bestelpagina',
        'Voeg ook je eigen logo toe',
        'Online betalingen (Bancontact, Payconiq, etc.)',
        'Automatische bevestiging naar klant',
        'Duidelijk besteloverzicht',
      ],
      footnote: 'Minimumomzet: €3.000 per jaar per Tappy. Haal je die omzet niet, dan wordt jaarlijks 5% berekend op de minimale omzet van €3.000. Eén Tappy staat voor één event. Wil je meerdere events tegelijk laten lopen, dan heb je meerdere Tappy’s nodig.'
      featured: false,
      ctaText: 'Start met Tappy Flex',
      href: '/contact',
    },
    {
      name: 'Tappy Plus',
      id: 'tier-plus',
      tagline: 'Voor wie Tappy regelmatig wil gebruiken.',
      summary: 'Tappy Plus is ideaal voor zaken, verenigingen en organisatoren die één event of verkoopmoment uitgebreider in hun eigen branding willen uitwerken, met extra mogelijkheden en add-ons.'
      priceMain: '€75',
      priceLabel: 'per jaar',
      commission: '3% per bestelling',
      noSub: 'Geen activatiekost',
      includedTitle: 'Inbegrepen:',
      features: [
        'Alles van Tappy Flex',
        'Meer brandingmogelijkheden op je landingspagina (op jouw naam in plaats van enkel Tappy)',
        'Add-ons mogelijk voor gepersonaliseerde mails met jouw logo & branding',
        'Actieve Tappy-pagina het hele jaar door',
        'Duidelijk dashboard met realtime inzichten',
        'Online betalingen via Mollie',
        'Automatische orderbevestigingen',
        'Ondersteuning voor kleine aanpassingen',
      ],
      footnote: 'Minimumomzet: €1.500 per jaar per Tappy. Haal je die omzet niet, dan wordt jaarlijks 3% berekend op de minimale omzet van €1.500. Eén Tappy staat voor één event. Meerdere events tegelijk betekent meerdere Tappy’s.'
      featured: true,
      ctaText: 'Kies Tappy Plus',
      href: '/contact',
    },
    {
      name: 'Tappy Pro',
      id: 'tier-pro',
      tagline: 'Voor wie meer nodig heeft dan een standaard bestelpagina.',
      summary: 'Tappy Pro stemmen we af op jouw specifieke werking. Denk aan meerdere verkoopmomenten, verschillende afhaallocaties, uitgebreide productstructuren, gepersonaliseerde e-mails, cadeaubonnen in eigen stijl, extra rapportage of specifieke automatisaties.',
      priceMain: 'Op maat',
      priceLabel: 'afgestemd op jouw noden',
      commission: 'Commissie op maat volgens gebruik en volume',
      noSub: null,
      includedTitle: 'Mogelijkheden & opties:',
      features: [
        'Meerdere verkoopmomenten & afhaallocaties',
        'Uitgebreide product- en menustructuren',
        'Gepersonaliseerde e-mails & cadeaubonnen in eigen stijl',
        'Geavanceerde rapportage & exports',
        'Specifieke automatisaties & integraties',
        'Eigen domein mogelijk',
        'Commissie wordt automatisch verrekend',
      ],
      footnote: 'We bekijken samen wat je nodig hebt en bouwen een Tappy-oplossing die past bij jouw organisatie, jouw klanten en jouw manier van werken.',
      featured: false,
      ctaText: 'Vraag Tappy Pro aan',
      href: '/contact',
    },
  ];

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-16 overflow-hidden">
        <img 
          src={pricingHeroImg} 
          alt="Transparante prijzen bij Tappy" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Prijzen
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Transparante kosten</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Eerlijke prijzen voor elke zaak
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
          Kies Flex, Plus of Pro volgens jouw event en gewenste mogelijkheden. Eén Tappy staat voor één event. Wil je meerdere events tegelijk organiseren, dan heb je meerdere Tappy’s nodig.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 flex flex-col justify-between relative ${
                tier.featured 
                  ? 'bg-slate-900 ring-slate-900 text-white shadow-xl shadow-indigo-950/20 lg:-translate-y-2' 
                  : 'ring-slate-200 bg-white shadow-sm'
              } xl:p-10`}
            >
              <div>
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-sm tracking-wide uppercase">
                    Meest gekozen
                  </div>
                )}

                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-2xl font-bold tracking-tight ${
                      tier.featured ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>

                <p className={`mt-2 text-sm font-medium ${tier.featured ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  {tier.tagline}
                </p>

                <p className={`mt-4 text-sm leading-relaxed ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.summary}
                </p>

                {/* Price block */}
                <div className={`mt-6 pt-6 border-t ${tier.featured ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="flex items-baseline gap-x-2">
                    <span className={`text-4xl font-extrabold tracking-tight ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                      {tier.priceMain}
                    </span>
                    <span className={`text-sm font-medium ${tier.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tier.priceLabel}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col gap-1.5">
                    <div className="inline-flex items-center gap-2">
                      <span className={`inline-block h-2 w-2 rounded-full ${tier.featured ? 'bg-indigo-400' : 'bg-indigo-600'}`} />
                      <span className={`text-sm font-semibold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                        {tier.commission}
                      </span>
                    </div>
                    {tier.noSub && (
                      <div className="inline-flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                        <span className={`text-xs font-medium ${tier.featured ? 'text-emerald-300' : 'text-emerald-700'}`}>
                          {tier.noSub}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={tier.href}
                  aria-describedby={tier.id}
                  className={`mt-6 block rounded-full px-4 py-3 text-center text-sm font-semibold leading-6 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.featured
                      ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500 shadow-indigo-500/25'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                  }`}
                >
                  {tier.ctaText}
                </Link>

                {/* Feature List */}
                <div className="mt-8">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.includedTitle}
                  </p>
                  <ul
                    role="list"
                    className={`mt-4 space-y-3 text-sm leading-6 ${
                      tier.featured ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 items-start">
                        <Check
                          className={`h-5 w-5 flex-none mt-0.5 ${tier.featured ? 'text-indigo-400' : 'text-indigo-600'}`}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footnote */}
              {tier.footnote && (
                <div className={`mt-8 pt-4 border-t text-xs leading-relaxed ${tier.featured ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                  {tier.footnote}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mollie Payment Partner Section */}
        <div className="mt-16 mx-auto max-w-4xl rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full mb-2">
              <CreditCard className="h-3.5 w-3.5 text-indigo-600" />
              <span>Betaalprovider Mollie</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Online betalingen ontvangen via Mollie?
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Koppel eenvoudig Bancontact en Payconiq aan Tappy. Betalingen komen direct op jouw eigen bankrekening binnen. Start eenvoudig via onze officiële partnerlink.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href="https://my.mollie.com/dashboard/signup/2873841?lang=be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all group"
            >
              <span>Mollie activeren</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Custom Configurations & Add-ons */}
        <div className="mx-auto mt-24 max-w-4xl bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Maatwerk, Add-ons & API Koppelingen
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Heb je specifieke wensen of een complexer proces? Wij bieden configuraties op maat, slimme add-ons en naadloze koppelingen met andere systemen (zoals je kassa, boekhouding of CRM).
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Add-ons & Maatwerk</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Extra functies op maat van jouw flow</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Specifieke rapportages of exports</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Custom branding en white-label opties</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Je eigen domein mogelijk</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">API & Integraties</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Koppelingen met kassasystemen (POS)</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Automatische synchronisatie met boekhoudsoftware</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <Check className="h-5 w-5 flex-none text-indigo-600 mt-0.5" />
                  <span>Webhook support voor custom applicaties</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all"
            >
              Contacteer ons voor de mogelijkheden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
