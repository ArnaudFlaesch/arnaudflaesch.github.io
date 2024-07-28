export function getUrlPath(path: string, language: string): string {
  const DEFAULT_LANGUAGE = 'fr';
  return language === DEFAULT_LANGUAGE ? path : `/${language}${path}`;
}

export function getAlternativePathFromCurrentPath(locale: string, currentLanguage: string, path: string): string {
  const DEFAULT_LANGUAGE = 'fr';

  if (locale === DEFAULT_LANGUAGE) {
    return path.replace(`/${currentLanguage}`, '');
  } else {
    return `/${locale}${path}`;
  }
}
