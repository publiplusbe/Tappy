import { useSEO } from '../hooks/useSEO';
import legalHeroImg from '../assets/images/legal_hero_1783526026504.jpg';

interface LegalProps {
  type: 'privacy' | 'cookies' | 'terms';
}

export default function Legal({ type }: LegalProps) {
  const content = {
    privacy: {
      title: 'Privacybeleid',
      description: 'Hoe Tappy persoonsgegevens verwerkt en beschermt.',
      text: `1. Wie is verantwoordelijk?
Tappy is een dienst van Publiplus, BTW BE 0885.464.696, Heike 29, 2811 Hombeek, België. Voor vragen over privacy kan je contact opnemen via info@tappy.be.

2. Welke persoonsgegevens kunnen we verwerken?
Afhankelijk van hoe je Tappy gebruikt, kunnen we onder meer identificatie- en contactgegevens, bestelgegevens, technische gegevens, communicatie met onze support en gegevens die nodig zijn om een Tappy-pagina of account te beheren verwerken. Betaalgegevens worden in hoofdzaak verwerkt door de gekozen betaalprovider en worden niet als volledige kaart- of bankgegevens door Tappy opgeslagen.

3. Waarom verwerken we persoonsgegevens?
We verwerken persoonsgegevens voor het aanbieden, beveiligen en ondersteunen van Tappy, het beheren van accounts en bestelprocessen, het beantwoorden van vragen, het uitvoeren van overeenkomsten, facturatie en administratie, het verbeteren van onze diensten en het naleven van wettelijke verplichtingen.

4. Rechtsgronden
Afhankelijk van de verwerking baseren we ons op de uitvoering van een overeenkomst, een wettelijke verplichting, ons gerechtvaardigd belang om Tappy veilig en efficiënt aan te bieden, of toestemming wanneer die wettelijk vereist is.

5. Organisatoren en verkopers
Wanneer een vereniging, onderneming of organisator Tappy gebruikt om bestellingen van eigen klanten te ontvangen, bepaalt die organisator voor een belangrijk deel welke klantgegevens nodig zijn en waarvoor die worden gebruikt. De organisator blijft verantwoordelijk voor zijn eigen wettelijke verplichtingen tegenover zijn klanten. Tappy verwerkt gegevens binnen de rol die voor de concrete dienstverlening van toepassing is.

6. Dienstverleners en ontvangers
We kunnen persoonsgegevens delen met dienstverleners die noodzakelijk zijn voor de werking van Tappy, zoals hosting-, IT-, e-mail- en betaalproviders. Voor online betalingen kan onder meer Mollie worden gebruikt. Gegevens worden alleen gedeeld voor zover dat nodig is voor de betreffende dienst of wanneer de wet dit vereist.

7. Bewaartermijnen
We bewaren persoonsgegevens niet langer dan nodig voor het doel waarvoor ze zijn verzameld, rekening houdend met wettelijke bewaartermijnen, boekhoudkundige verplichtingen, beveiliging en de afhandeling van mogelijke geschillen.

8. Beveiliging
We nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies, misbruik of wijziging. Geen enkel digitaal systeem kan echter absolute veiligheid garanderen.

9. Jouw rechten
Binnen de voorwaarden van de AVG/GDPR kan je onder meer vragen om inzage, correctie, verwijdering, beperking van verwerking, overdraagbaarheid of bezwaar. Wanneer verwerking op toestemming is gebaseerd, kan je die toestemming intrekken. Een verzoek kan je sturen naar info@tappy.be. We kunnen bijkomende informatie vragen om je identiteit te controleren.

10. Klacht indienen
Je hebt het recht om een klacht in te dienen bij de bevoegde toezichthoudende autoriteit. In België is dat de Gegevensbeschermingsautoriteit.

11. Wijzigingen
We kunnen dit privacybeleid aanpassen wanneer onze dienstverlening, gebruikte technologie of wettelijke verplichtingen wijzigen. De meest recente versie wordt op deze website gepubliceerd.`
    },
    cookies: {
      title: 'Cookiebeleid',
      description: 'Welke cookies en vergelijkbare technologieën op Tappy kunnen worden gebruikt.',
      text: `1. Wat zijn cookies?
Cookies en vergelijkbare technologieën zijn kleine gegevensbestanden of technieken waarmee een website informatie op je toestel kan opslaan of uitlezen. Ze kunnen noodzakelijk zijn voor de werking van een website of worden gebruikt voor analyse en andere doeleinden.

2. Noodzakelijke technologie
Tappy kan strikt noodzakelijke cookies of lokale opslag gebruiken om de website, beveiliging, sessies en essentiële functionaliteit correct te laten werken. Voor strikt noodzakelijke technologie is doorgaans geen voorafgaande toestemming vereist.

3. Analyse en Google Tag Manager
Op tappy.be is Google Tag Manager geïntegreerd. Google Tag Manager is een systeem waarmee tags centraal kunnen worden beheerd. Welke cookies of andere technologieën uiteindelijk worden gebruikt, hangt af van de tags die via de container worden geactiveerd. Niet-noodzakelijke analytische of marketingtechnologie mag alleen worden geactiveerd wanneer daarvoor volgens de toepasselijke regels een geldige rechtsgrond of toestemming bestaat.

4. Derde partijen
Diensten van derden, bijvoorbeeld een betaalprovider of externe link, kunnen op hun eigen website cookies plaatsen en hebben daarvoor hun eigen privacy- en cookiebeleid. Wanneer je naar zo'n externe dienst gaat, zijn de voorwaarden van die partij van toepassing.

5. Cookies beheren
Je kan cookies via de instellingen van je browser verwijderen of blokkeren. Het uitschakelen van noodzakelijke cookies of opslag kan ervoor zorgen dat bepaalde onderdelen van een website niet correct functioneren. Wanneer op Tappy een toestemmingsmechanisme wordt aangeboden, kan je je niet-noodzakelijke keuzes daar beheren.

6. Wijzigingen
De gebruikte tools en tags kunnen wijzigen. Daarom kan ook dit cookiebeleid worden aangepast. De meest recente versie staat steeds op deze website.

7. Contact
Heb je vragen over het gebruik van cookies of vergelijkbare technologieën? Contacteer ons via info@tappy.be.`
    },
    terms: {
      title: 'Algemene voorwaarden',
      description: 'De basisvoorwaarden voor het gebruik van Tappy.',
      text: `1. Toepasselijkheid
Deze voorwaarden zijn van toepassing op het gebruik van Tappy, een dienst van Publiplus, BTW BE 0885.464.696, Heike 29, 2811 Hombeek, België. Afwijkingen zijn alleen geldig wanneer ze schriftelijk zijn overeengekomen.

2. De Tappy-dienst
Tappy biedt een online platform waarmee verenigingen, organisatoren, ondernemers en KMO's onder meer bestelpagina's, verkoopacties, cadeaubonnen, reservaties en gerelateerde processen kunnen organiseren. De concrete functionaliteiten hangen af van de gekozen formule en eventuele maatwerkafspraken.

3. Account en correct gebruik
De klant staat in voor correcte account- en bedrijfsgegevens, het vertrouwelijk houden van toegangsgegevens en het rechtmatige gebruik van het platform. Tappy mag maatregelen nemen wanneer gebruik de veiligheid, werking of rechten van derden in gevaar brengt.

4. Verantwoordelijkheid van de organisator of verkoper
De organisator of verkoper die via Tappy producten, diensten, tickets, cadeaubonnen of andere aanbiedingen verkoopt, blijft verantwoordelijk voor zijn aanbod, prijzen, productinformatie, wettelijke informatieplichten, uitvoering, levering of afhaling, retour- en consumentenverplichtingen en communicatie met zijn eigen klanten.

5. Prijzen en formules
De actuele prijzen en kenmerken van Tappy Flex, Tappy Plus en Tappy Pro staan op de prijzenpagina of in een individuele offerte. Tappy Flex omvat volgens de actuele prijspagina een eenmalige activatiekost en een commissie per bestelling. Tappy Plus omvat een jaarlijkse kost en een lagere commissie per bestelling. Tappy Pro wordt op maat bepaald. Bij tegenstrijdigheid tussen algemene website-informatie en een individueel aanvaarde offerte of overeenkomst, heeft die individuele afspraak voorrang.

6. Betalingen
Online betalingen kunnen via een externe betaalprovider zoals Mollie verlopen. De organisator of verkoper koppelt daarvoor zijn eigen betaalaccount waar van toepassing. Kosten en voorwaarden van de betaalprovider kunnen afzonderlijk van de Tappy-kosten gelden. Tappy is geen bank en houdt klantgelden niet als eigen betaalinstelling aan.

7. Beschikbaarheid en onderhoud
We streven naar een betrouwbare dienstverlening, maar garanderen geen ononderbroken of foutloze beschikbaarheid. Onderhoud, updates, beveiligingsmaatregelen, storingen bij leveranciers of omstandigheden buiten onze redelijke controle kunnen de beschikbaarheid tijdelijk beïnvloeden.

8. Intellectuele eigendom
De software, vormgeving, naam, documentatie en andere door Tappy of Publiplus ontwikkelde onderdelen blijven beschermd door de toepasselijke intellectuele-eigendomsrechten. De klant behoudt de rechten op eigen content die hij rechtmatig in het platform invoert en verleent de noodzakelijke gebruiksrechten om die content binnen de dienst te verwerken en tonen.

9. Verboden gebruik
Het is niet toegestaan Tappy te gebruiken voor onwettige activiteiten, misleiding, inbreuken op rechten van derden, schadelijke code, ongeoorloofde toegang of activiteiten die de werking of reputatie van het platform kunnen schaden.

10. Aansprakelijkheid
Elke partij blijft verantwoordelijk voor haar eigen verplichtingen. Voor zover wettelijk toegestaan is Tappy niet verantwoordelijk voor de inhoud of uitvoering van aanbiedingen van organisatoren of verkopers, geschillen tussen een verkoper en zijn klant, of storingen die uitsluitend veroorzaakt worden door externe diensten. Niets in deze voorwaarden beperkt aansprakelijkheid die volgens dwingend recht niet kan worden uitgesloten of beperkt.

11. Duur en beëindiging
De duur en eventuele verlenging hangen af van de gekozen formule of offerte. Bij ernstige of herhaalde schending van deze voorwaarden kan toegang worden opgeschort of beëindigd, met inachtneming van toepasselijke wettelijke en contractuele verplichtingen.

12. Persoonsgegevens
De verwerking van persoonsgegevens wordt verder toegelicht in het privacybeleid. Organisatoren en verkopers blijven verantwoordelijk voor hun eigen verplichtingen tegenover de personen van wie zij gegevens via Tappy verwerken.

13. Wijzigingen
Tappy kan de dienst en deze voorwaarden aanpassen wanneer dat redelijkerwijs nodig is, bijvoorbeeld door productwijzigingen, veiligheidsvereisten of gewijzigde regelgeving. Voor lopende overeenkomsten worden wezenlijke wijzigingen toegepast volgens de toepasselijke afspraken en wetgeving.

14. Toepasselijk recht
Op deze voorwaarden is Belgisch recht van toepassing. Geschillen worden behandeld door de bevoegde rechtbanken volgens de toepasselijke wettelijke bevoegdheidsregels, tenzij dwingend recht anders bepaalt.

15. Contact
Vragen over deze voorwaarden kan je sturen naar info@tappy.be.`
    }
  };

  const currentContent = content[type];

  useSEO({
    title: `${currentContent.title} | Tappy`,
    description: currentContent.description,
    keywords: 'algemene voorwaarden, privacybeleid, gdpr, tappy legal, cookiebeleid, juridisch'
  });

  return (
    <div className="bg-white pb-24 sm:pb-32">
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
            <p key={index} className="mb-4 text-slate-700 leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-500">
          Laatst gewijzigd: 18 september 2026
        </div>
      </div>
    </div>
  );
}
