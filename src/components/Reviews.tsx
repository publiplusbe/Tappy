import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  title: string;
  content: string;
  rating: number;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Cathy',
      role: 'Vzw / eventorganisatie',
      initials: 'C',
      avatarBg: 'bg-amber-600',
      rating: 5,
      title: 'Ideaal voor onze vzw en events.',
      content:
        'We gebruiken Tappy al een tijdje voor onze events en dat werkt echt heel vlot. Het grootste voordeel voor ons is dat betalingen meteen binnenkomen. Voor een vzw is dat natuurlijk superhandig, want je hebt sneller zicht op je inkomsten en minder administratie achteraf. Bovendien betaal je enkel wanneer we Tappy effectief gebruiken. Dat maakt het voor ons heel toegankelijk.',
    },
    {
      id: 2,
      name: 'Martine',
      role: 'Lokale ondernemer',
      initials: 'M',
      avatarBg: 'bg-indigo-600',
      rating: 5,
      title: 'Superhandig voor mijn cadeaubonnen.',
      content:
        'Voor mijn cadeaubonnen is Tappy echt een handige oplossing. Ik hang niet vast aan een zware maandelijkse of jaarlijkse kost en betaal enkel een kleine fee wanneer ik zelf iets verkoop. Alles verloopt duidelijk en professioneel, ook voor mijn klanten. En als ik een vraag heb, word ik snel en goed geholpen.',
    },
    {
      id: 3,
      name: 'Wesley',
      role: 'Zaakvoerder',
      initials: 'W',
      avatarBg: 'bg-emerald-600',
      rating: 5,
      title: 'Onze klanten vinden het makkelijk en wij winnen tijd.',
      content:
        'Voor ons én voor ons cliënteel is Tappy bijzonder handig. We krijgen leuke feedback van klanten omdat bestellen en betalen zo eenvoudig gaat. Intern bespaart het ons ook veel tijd, omdat alles veel efficiënter verloopt en we minder manueel moeten opvolgen. Een fijne tool die echt doet wat ze moet doen.',
    },
    {
      id: 4,
      name: 'Matti',
      role: 'Zaakvoerder - KMO',
      initials: 'M',
      avatarBg: 'bg-blue-600',
      rating: 5,
      title: 'Eenvoudig opgestart en meteen bruikbaar.',
      content:
        'Tappy was snel opgezet en meteen duidelijk in gebruik. We hadden geen ingewikkeld systeem nodig, maar gewoon een makkelijke manier om bestellingen en betalingen online te verzamelen. Dat is exact wat Tappy doet. Simpel voor ons, duidelijk voor onze klanten en handig in de opvolging.',
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/70 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>5.0 gemiddelde score</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Wat onze gebruikers zeggen
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Echte ervaringen van organisatoren, lokale ondernemers en verenigingen die dagelijks met Tappy werken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Geverifieerde ervaring
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
                  “{review.title}”
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {review.content}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
