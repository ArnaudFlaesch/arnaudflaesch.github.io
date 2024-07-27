import React from 'react';
import Seo from './Seo';
import { useTranslation } from 'react-i18next';

export function HeadComponent(titleCode: string, descriptionCode: string, namespaceCode: string, location: Location) {
  const { t, i18n } = useTranslation(namespaceCode);
  const translatedTitle = t(titleCode);
  const translatedDescription = t(descriptionCode);
  return (
    <Seo
      translatedTitle={translatedTitle}
      translatedDescription={translatedDescription}
      location={location.pathname}
      language={i18n.language}
    />
  );
}
