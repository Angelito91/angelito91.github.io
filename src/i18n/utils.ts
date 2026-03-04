import { ui, defaultLang, type Language } from "./translations";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternateLanguages(
  currentPath: string,
  currentLang: Language,
): { lang: Language; href: string }[] {
  const languages: Language[] = ["es", "en"];
  const pathWithoutLang = currentPath.replace(/^\/(en)/, "") || "/";

  return languages
    .filter((lang) => lang !== currentLang)
    .map((lang) => ({
      lang,
      href: getLocalizedPath(pathWithoutLang, lang),
    }));
}
