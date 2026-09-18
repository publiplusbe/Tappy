import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CalendarPlus, ShoppingCart, Share2, CreditCard, PackageCheck, ExternalLink } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import howItWorksImg from '../assets/images/how_it_works_hero_1783525880468.jpg';

export default function HowItWorks() {
  useSEO({
    title: 'Hoe het werkt | Het Online Bestelplatform voor Verenigingen & KMO\'s',
    description: 'Ontdek stap voor stap hoe Tappy jouw zaak of vereniging helpt om bestellingen, betalingen en afhalingen moeiteloos online te organiseren met minimale administratie.',
    keywords: 'hoe werkt tappy, bestelproces, online betalingen vereniging, afhalingen, bestelplatform werking, KMO bestelsysteem'
  });

  const steps = [
    {
      id: 1,
      name: 'Maak je event of zaak aan',
      description: 'Start met het aanmaken van je event of shop in het Tappy dashboard. Vul de basisgegevens in zoals naam, locatie en type bestellingen.',
      icon: CalendarPlus,
    },
    {
      id: 2,
      name: 'Voeg producten toe',
      description: 'Voeg eenvoudig producten toe zoals mosselen, drankkaarten, cadeaubonnen of andere items. Stel prijzen en eventuele opties in.',
      icon: ShoppingCart,
    },
    {
      id: 3,
      name: 'Deel je bestelpagina',
      description: 'Deel de unieke link naar je bestelpagina met klanten, leden of supporters via e-mail, WhatsApp, sociale media of je eigen website.',
      icon: Share2,
    },
    {
      id: 4,
      name: 'Bestellingen en betalingen',
      description: 'Bestellingen en betalingen (via Bancontact of Payconiq) worden automatisch verwerkt via Mollie. Jij behoudt het overzicht en het geld komt direct op jouw eigen rekening.',
      icon: CreditCard,
      action: {
        text: 'Mollie activeren',
        url: 'https://my.mollie.com/dashboard/signup/2873841?lang=be',
      },
    },
    {
      id: 5,
      name: 'Gebruik de afhaalmodus of levering',
      description: 'Scan afhaalcodes van klanten om bestellingen snel mee te geven, of markeer cadeaubonnen als digitaal verzonden.',
      icon: PackageCheck,
    },
  ];

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-16 overflow-hidden">
        <img 
          src={howItWorksImg} 
          alt="Hoe werkt Tappy" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Zo werkt het
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Hoe werkt Tappy</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Online bestelplatform in 5 stappen
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ontdek hoe Tappy jouw vereniging of onderneming helpt om bestellingen en betalingen eenvoudig online te organiseren.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 md:left-1/2 md:-ml-px hidden sm:block" aria-hidden="true" />
            
            <div className="space-y-12 sm:space-y-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 border-4 border-white shadow-sm z-10 shrink-0 mb-4 sm:mb-0 sm:mx-auto">
                    <step.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  
                  <div className={`sm:w-1/2 ${index % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        <span className="text-indigo-600 mr-2">{step.id}.</span>
                        {step.name}
                      </h3>
                      <p className="text-slate-600">{step.description}</p>
                      {step.action && (
                        <div className="mt-4 pt-3 border-t border-slate-200/80">
                          <a
                            href={step.action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700 transition-all group"
                          >
                            <span>{step.action.text}</span>
                            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all"
          >
            Start vandaag nog met Tappy
          </Link>
        </div>
      </div>
    </div>
  );
}
