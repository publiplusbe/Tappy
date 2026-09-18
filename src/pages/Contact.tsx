import { Mail, Phone, User, Zap, ShieldCheck, ExternalLink, PlayCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'motion/react';
import contactHeroImg from '../assets/images/contact_hero_1783525934639.jpg';

export default function Contact() {
  useSEO({
    title: 'Contact | Start met Tappy voor Jouw Zaak of Vereniging',
    description: 'Neem vandaag nog contact op en ontdek hoe Tappy jouw vereniging, event of zaak (zoals een salon of horecazaak) kan helpen bij het automatiseren van bestellingen en het besparen van kostbare tijd.',
    keywords: 'contact tappy, klantenservice tappy, start met bestellen, online bestelsysteem contact, verenigingen support'
  });

  return (
    <div className="bg-white pb-24 sm:pb-32">
      {/* Hero Image Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-16 overflow-hidden">
        <img 
          src={contactHeroImg} 
          alt="Contacteer het Tappy team" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md text-center px-4">
            Contact
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Kom in contact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Start met Tappy
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Benieuwd hoe Tappy jouw vereniging of zaak kan helpen groeien? Of je nu een grootschalig evenement plant, wekelijks bestellingen wil stroomlijnen of simpelweg de administratie wil verlichten: wij denken graag met je mee. Neem vandaag nog contact op en ontdek de mogelijkheden voor een oplossing op maat!
          </p>
        </div>

        {/* Interactive Demo Showcase Callout */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 border border-indigo-500/30 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 mb-3">
                <PlayCircle className="h-4 w-4 text-indigo-400" />
                <span>Interactieve Live Demo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Bekijk een Tappy-demo
              </h3>
              <p className="mt-3 text-base text-slate-200 leading-relaxed">
                Wil je zien hoe een Tappy-pagina eruitziet in de praktijk? Neem gerust een kijkje in onze demo-omgeving.
              </p>
              <div className="mt-4 inline-flex items-start gap-2 text-xs text-slate-300/90 bg-slate-800/80 rounded-xl p-3 border border-slate-700/70">
                <span className="font-semibold text-amber-300 flex-shrink-0">Let op:</span>
                <span>Dit is een demo. De inhoud kan regelmatig wijzigen omdat we deze gebruiken om voorbeelden en nieuwe mogelijkheden te tonen.</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://demo-events.tappy.be"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-indigo-600 px-7 py-4 text-base font-bold text-white shadow-lg hover:bg-indigo-500 hover:shadow-indigo-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all group"
              >
                <span>Bekijk demo</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-8 sm:p-10 rounded-3xl border border-indigo-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Waarom kiezen voor Tappy?</h3>
            
            <div className="space-y-8 relative z-10">
              {[
                {
                  icon: <User className="h-6 w-6 text-indigo-600" />,
                  title: 'Persoonlijke begeleiding',
                  desc: 'We luisteren naar jouw specifieke noden en denken actief mee voor de beste aanpak.',
                },
                {
                  icon: <Zap className="h-6 w-6 text-indigo-600" />,
                  title: 'Snel en eenvoudig',
                  desc: 'Je kan meteen van start gaan zonder ingewikkelde technische kennis.',
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
                  title: 'Transparant & betrouwbaar',
                  desc: 'Geen verborgen kosten, duidelijke afspraken en een rotsvast bestelsysteem.',
                },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 mt-1 bg-white p-2.5 rounded-xl shadow-sm border border-slate-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10 pt-8 border-t border-indigo-100/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="mailto:info@tappy.be"
                className="group relative flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-md hover:bg-indigo-500 transition-all hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:-200%_0,0_0] hover:duration-[1500ms]" />
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                Mail ons direct
              </a>
            </motion.div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">Contactgegevens</h2>
            <dl className="space-y-6 text-base leading-7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">E-mail</span>
                  <Mail className="h-7 w-6 text-indigo-600" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="mailto:info@tappy.be">
                    info@tappy.be
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefoon</span>
                  <Phone className="h-7 w-6 text-indigo-600" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="tel:+32473410063">
                    +32 473 41 00 63
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Contactpersoon</span>
                  <User className="h-7 w-6 text-indigo-600" aria-hidden="true" />
                </dt>
                <dd>
                  Contactpersoon Sales en communicatie:<br />
                  <span className="font-semibold text-slate-900">David Jacobs</span>
                </dd>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Bedrijfsgegevens</p>
                <p>Tappy is een onderdeel van Publiplus</p>
                <p>BTW: BE 0885.464.696</p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
