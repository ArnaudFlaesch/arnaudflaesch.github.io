import React, { ReactElement } from 'react';
import Seo from '../components/Seo';
import { IPageProps } from '../model/IPageProps';
import './page-styles/presentation.scss';
import Layout from '../layout/Layout';

export default function Presentation(props: Readonly<IPageProps>): ReactElement {
  function calculateAge(): number {
    const birthDate = new Date(1993, 5, 1);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <Layout title="Présentation" location={props.location}>
      <p>Je m'appelle Arnaud, j'ai {calculateAge()} ans et je travaille en tant que développeur en CDI depuis 2017.</p>
    </Layout>
  );
}

export const Head = () => <Seo location={'/presentation'} title="Présentation" />;
