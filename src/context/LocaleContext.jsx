'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, LOCALES, dictionaries } from '@/i18n/dictionaries';

const LocaleContext = createContext(null);

function getFromPath(obj, path){
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LocaleProvider({ initialLocale, children }){
  const [locale, setLocaleState] = useState(
    LOCALES.includes(initialLocale) ? initialLocale : DEFAULT_LOCALE
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next) => {
    if(!LOCALES.includes(next)) return;
    setLocaleState(next);
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
  }, []);

  const t = useCallback((key, ...args) => {
    const entry = getFromPath(dictionaries[locale], key) ?? getFromPath(dictionaries[DEFAULT_LOCALE], key);
    return typeof entry === 'function' ? entry(...args) : entry ?? key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(){
  const ctx = useContext(LocaleContext);
  if(!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
