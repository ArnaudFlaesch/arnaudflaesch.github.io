import React from 'react';
import { getTranslation } from '../../utils/TranslationUtils';
import Seo from './Seo';

export const HeadComponent = (
  location,
  data,
  pageContext,
  titleCode: string,
  descriptionCode: string,
  namespaceCode: string
) => {
  const translatedTitle = getTranslation(titleCode, pageContext.language, namespaceCode, data.locales.edges);
  const translatedDescription = getTranslation(
    descriptionCode,
    pageContext.language,
    namespaceCode,
    data.locales.edges
  );

  return (
    <Seo
      location={location.pathname}
      translatedTitle={translatedTitle}
      translatedDescription={translatedDescription}
      language={pageContext.language}
    />
  );
};
