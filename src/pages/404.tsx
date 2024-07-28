import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/head/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';

export default function NotFoundPage(props: Readonly<IPageProps>): React.ReactElement {
  const { t } = useTranslation();
  return (
    <Layout titleCode="404" location={props.location} i18nNamespace={'common'}>
      <p>{t('PAGE.NOT.FOUND.MESSAGE')}</p>
    </Layout>
  );
}

export const Head = ({ location }: { location: Location }) => {
  const { i18n } = useTranslation();
  return <Seo location={location.pathname} translatedTitle="404: Not found" language={i18n.language} />;
};
