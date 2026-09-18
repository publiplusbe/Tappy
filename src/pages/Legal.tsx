import { useSEO } from '../hooks/useSEO';
import legalHeroImg from '../assets/images/legal_hero_1783526026504.jpg';

interface LegalProps {
  type: 'privacy' | 'cookies' | 'terms';
}

export default function Legal({ type }: LegalProps) {
  const content = {
    privacy: {
      title: 'Privacy beleid',
      description: 'Hoe wij omgaan met jouw gegevens.',
      text: `Dit is een placeholder voor het privacy beleid van Tappy. 
      
Wij hechten veel waarde aan de bescherming van jouw persoonsgegevens. In deze privacyverklaring leggen we uit hoe we gegevens verzamelen, gebruiken en beveiligen.
      
1. Gegevensverzameling
We verzamelen gegevens die nodig zijn voor het verwerken van bestellingen en betalingen voor jouw vereniging of zaak.
      
2. Gebruik van gegevens
Gegevens worden uitsluitend gebruikt voor het faciliteren van het Tappy platform en de communicatie rondom events en bestellingen.
      
3. Delen van gegevens
We delen geen gegevens met derden, tenzij dit noodzakelijk is voor de uitvoering van onze diensten (bijv. betaalproviders zoals Mollie).`
    },
    cookies: {
      title: 'Cookie beleid',
      description: 'Informatie over ons gebruik van cookies.',
      text: `Dit is een placeholder voor het cookie beleid van Tappy.
      
Tappy maakt gebruik van cookies om de website goed te laten functioneren en het gebruiksgemak te verbeteren.
      
1. Functionele cookies
Deze zijn noodzakelijk voor de werking van het platform, zoals het onthouden van je sessie.
      
2. Analytische cookies
We gebruiken deze om inzicht te krijgen in hoe ons platform wordt gebruikt, zodat we het kunnen verbeteren.
      
3. Tracking cookies
Tappy gebruikt geen tracking cookies voor advertentiedoeleinden.`
    },
    terms: {
      title: 'Algemene voorwaarden',
      description: 'De regels voor het gebruik van Tappy.',
      text: `Dit is een placeholder voor de algemene voorwaarden van Tappy.
      
1. Toepasselijkheid
Deze voorwaarden zijn van toepassing op alle diensten van Tappy, aangeboden door Publiplus.
      
2. Gebruik van het platform
Verenigingen, ondernemers en KMO's zijn zelf verantwoordelijk voor de inhoud van hun webshop en de correcte afhandeling van bestellingen.
      
3. Betalingen en kosten
Tappy rekent een percentage per transactie of een vaste kost, afhankelijk van het gekozen plan. Betalingskosten van providers (Mollie, Bancontact, Payconiq) worden apart verrekend. Tappy zorgt voor een directe uitbetaling zonder het geld vast te houden op een tussenrekening.
      
4. Aansprakelijkheid
Tappy is niet aansprakelijk voor fouten in bestellingen, geschillen tussen consument en verkoper, of problemen tijdens de afhaling.`
    }
  };

  const currentContent = content[type];

  useSEO({
    title: `${currentContent.title} | Tappy Juridisch & Voorwaarden`,
    description: currentContent.description,
    keywords: 'algemene voorwaarden, privacybeleid, gdpr, tappy legal, cookiebeleid, juridisch'
  });

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-48 sm:h-64 lg:h-80 w-full mb-16 overflow-hidden">
        <img 
          src={legalHeroImg} 
          alt="Tappy juridische informatie" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Juridisch
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {currentContent.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {currentContent.description}
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none prose prose-slate prose-indigo">
          {currentContent.text.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-500">
          Laatst gewijzigd: {new Date().toLocaleDateString('nl-BE')}
        </div>
      </div>
    </div>
  );
}
