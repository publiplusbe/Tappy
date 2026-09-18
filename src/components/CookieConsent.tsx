import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ConsentChoice = {
  analytics: boolean;
};

const STORAGE_KEY = 'tappy_cookie_consent_v1';

function updateGoogleConsent(analytics: boolean) {
  const win = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  win.dataLayer = win.dataLayer || [];
  win.gtag = win.gtag || function (...args: unknown[]) {
    win.dataLayer?.push(args);
  };

  win.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  win.dataLayer.push({
    event: 'tappy_consent_update',
    analytics_consent: analytics ? 'granted' : 'denied',
  });
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setOpen(true);
    } else {
      try {
        const choice = JSON.parse(stored) as ConsentChoice;
        setAnalytics(Boolean(choice.analytics));
        updateGoogleConsent(Boolean(choice.analytics));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setOpen(true);
      }
    }

    const reopen = () => {
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener('tappy:cookie-preferences', reopen);
    return () => window.removeEventListener('tappy:cookie-preferences', reopen);
  }, []);

  const save = (choice: ConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
    setAnalytics(choice.analytics);
    updateGoogleConsent(choice.analytics);
    setOpen(false);
    setDetails(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-7">
        <div className="flex flex-col gap-5">
          <div>
            <h2 id="cookie-title" className="text-xl font-bold text-slate-900">Jouw privacy, jouw keuze</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tappy gebruikt noodzakelijke technologie om de website goed te laten werken. Met jouw toestemming gebruiken we ook analytische cookies om te begrijpen hoe de website wordt gebruikt en om Tappy te verbeteren. Marketingcookies staan standaard uit.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Lees meer in ons <Link to="/cookies" className="font-semibold text-indigo-600 hover:text-indigo-500">cookiebeleid</Link>.
            </p>
          </div>

          {details && (
            <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">Noodzakelijk</p>
                  <p className="mt-1 text-sm text-slate-600">Nodig voor basisfunctionaliteit en beveiliging. Altijd actief.</p>
                </div>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">Altijd aan</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-slate-200 pt-3">
                <div>
                  <p className="font-semibold text-slate-900">Analytisch</p>
                  <p className="mt-1 text-sm text-slate-600">Helpt ons het gebruik van Tappy te meten via tags die daarvoor zijn ingesteld.</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analytics}
                  onClick={() => setAnalytics(!analytics)}
                  className={`relative h-7 w-12 flex-shrink-0 rounded-full transition-colors ${analytics ? 'bg-indigo-600' : 'bg-slate-300'}`}
                >
                  <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${analytics ? 'translate-x-6' : 'translate-x-1'}`} />
                  <span className="sr-only">Analytische cookies</span>
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            {!details && (
              <button type="button" onClick={() => setDetails(true)} className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                Voorkeuren
              </button>
            )}
            {details && (
              <button type="button" onClick={() => save({ analytics })} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Keuze opslaan
              </button>
            )}
            <button type="button" onClick={() => save({ analytics: false })} className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Alleen noodzakelijk
            </button>
            <button type="button" onClick={() => save({ analytics: true })} className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Alles accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
