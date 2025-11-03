import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import languages from './languages.json';

const LanguageContext = createContext({
  lang: 'ENG',
  setLang: () => {},
  strings: languages.ENG.strings
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children, defaultLang = 'ENG' }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem('app_lang');
      return stored || defaultLang;
    } catch {
      return defaultLang;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('app_lang', lang);
    } catch {}
  }, [lang]);

  const setLang = (next) => {
    if (!languages[next]) return;
    setLangState(next);
  };

  const strings = useMemo(() => {
    return (languages[lang] && languages[lang].strings) || {};
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, strings, allLanguages: languages }), [lang, setLang, strings]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
