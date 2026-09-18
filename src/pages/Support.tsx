import { HelpCircle, Book, MessageCircle, ExternalLink, CreditCard } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import supportHeroImg from '../assets/images/support_hero_1783526014163.jpg';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

export default function Support() {
  useSEO({
    title: 'Support & Veelgestelde Vragen | Hulp bij het Tappy Bestelsysteem',
    description: 'Vind razendsnel antwoorden op veelgestelde vragen (FAQ), ontdek handige tips voor je bestelsysteem of neem direct contact op met het Tappy support team.',
    keywords: 'support, faq, hulp bestelsysteem, tappy klantendienst, veelgestelde vragen online bestellen'
  });

  const faqs: FAQItem[] = [
    {
      question: 'Hoe snel kan ik starten met Tappy?',
      answer: 'Je kan direct starten. Maak een account aan, voeg je event of zaak toe, en je bent klaar om bestellingen te ontvangen. Het duurt slechts enkele minuten.',
    },
    {
      question: 'Welke betaalmethodes worden ondersteund en hoe activeer ik Mollie?',
      answer: (
        <div>
          <span>Tappy ondersteunt betalingen via Bancontact, Payconiq, iDEAL en creditcards via onze partner Mollie. Betalingen worden automatisch verwerkt en direct op jouw eigen bankrekening gestort. Heb je nog geen Mollie-account? Activeer dit eenvoudig binnen enkele minuten via onze partnerlink:</span>
          <div className="mt-3">
            <a
              href="https://my.mollie.com/dashboard/signup/2873841?lang=be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition-colors group"
            >
              <span>Mollie activeren</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      ),
    },
    {
      question: 'Zijn er verborgen kosten of onverwachte kosten?',
      answer: 'Nee, onze prijzen zijn 100% transparant. Je kiest tussen Flex (€149 eenmalige activatiekost + 5% per bestelling, zonder jaarlijkse vaste kost), Plus (€75/jaar + 3% per bestelling) of Pro (op maat). Geen verborgen abonnementskosten of verrassingen achteraf.',
    },
    {
      question: 'Hebben mijn klanten een account nodig om te bestellen?',
      answer: 'Nee, klanten kunnen eenvoudig bestellen zonder een account aan te maken. Ze vullen enkel hun gegevens in tijdens het afrekenen.',
    },
    {
      question: 'Hoe werkt de afhaalmodus?',
      answer: 'Tijdens je event of in je winkel open je de afhaalmodus op een tablet of smartphone. Klanten tonen hun unieke QR-code of afhaalcode. Jij scant deze of typt de code in, en ziet direct welke bestelling je moet meegeven.',
    },
    {
      question: 'Zijn er mogelijkheden voor maatwerk of API koppelingen?',
      answer: 'Jazeker. Voor KMO\'s en grotere organisaties bieden wij add-ons en configuraties op maat aan. Dit gaat van extra functionaliteiten tot API koppelingen met je huidige systemen zoals een kassasysteem (POS) of boekhoudpakket. Neem contact met ons op om de mogelijkheden te bespreken.',
    },
  ];

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-16 overflow-hidden">
        <img 
          src={supportHeroImg} 
          alt="Tappy support en klantenservice" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Support & Help
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">We staan voor je klaar</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Hoe kunnen we je helpen?
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Vind antwoorden op veelgestelde vragen of neem contact op met ons support team.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="flex flex-col bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 mb-6">
                <Book className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Handleidingen</h3>
              <p className="text-slate-600 mb-6 flex-grow">Stap-voor-stap gidsen om het meeste uit Tappy te halen voor jouw vereniging.</p>
              <button className="text-indigo-600 font-semibold hover:text-indigo-500">Bekijk gidsen &rarr;</button>
            </div>
            
            <div className="flex flex-col bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 mb-6">
                <HelpCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Veelgestelde vragen</h3>
              <p className="text-slate-600 mb-6 flex-grow">Vind snel antwoord op de meest gestelde vragen over ons platform.</p>
              <a href="#faq" className="text-indigo-600 font-semibold hover:text-indigo-500">Lees de FAQ &rarr;</a>
            </div>
            
            <div className="flex flex-col bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 mb-6">
                <MessageCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Contacteer support</h3>
              <p className="text-slate-600 mb-6 flex-grow">Kom je er niet uit? Ons team staat klaar om je persoonlijk te helpen.</p>
              <Link to="/contact" className="text-indigo-600 font-semibold hover:text-indigo-500">Stuur een bericht &rarr;</Link>
            </div>
          </div>
        </div>

        {/* Mollie Setup Callout */}
        <div className="mt-16 mx-auto max-w-4xl rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full mb-2">
              <CreditCard className="h-3.5 w-3.5 text-indigo-600" />
              <span>Betaalpartner Mollie</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Hulp nodig bij het opzetten van je Mollie betaalaccount?
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Volg onze partnerlink om direct jouw Mollie-account aan te maken of te koppelen. Zo ben je binnen enkele minuten klaar om online betalingen te ontvangen.
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

        <div id="faq" className="mx-auto mt-24 max-w-3xl divide-y divide-slate-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-slate-900 mb-8">Veelgestelde vragen</h2>
          <dl className="mt-10 space-y-6 divide-y divide-slate-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <span className="text-base font-semibold leading-7 text-slate-900">{faq.question}</span>
                </dt>
                <dd className="mt-2 pr-12">
                  <div className="text-base leading-7 text-slate-600">{faq.answer}</div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
