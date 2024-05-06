import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';

import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import './page-styles/contact.scss';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

const title = 'Contactez-moi';
const description = "Formulaire de contact si vous souhaitez discuter.";

export default function Contact(props: Readonly<IPageProps>): React.ReactElement {
  const [state, handleSubmit, reset] = useForm('mkndgrkd');

  const [nameText, setNameText] = React.useState('');
  const [emailText, setEmailText] = React.useState('');
  const [messageText, setMessageText] = React.useState('');

  const {t} = useTranslation()

  function isFormInvalid(): boolean {
    return state.submitting || !nameText.length || !emailText.length || !messageText.length;
  }

  return (
    <Layout title={title} description={description} location={props.location}>
      {state.succeeded ? (
        <div>
          <p>{t("EMAIL.SENT")}</p>
          <Button onClick={reset}>{t("SENT.ANOTHER.MAIL")}</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box id="contact-form" component={'section'} gap={4}>
            <div id="contact-informations">
              <div className="form-field">
                <TextField
                  id="name"
                  type="text"
                  name="name"
                  className="contact-field"
                  label={t("NAME.FIRSTNAME")}
                  variant="outlined"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNameText(event.target.value);
                  }}
                />
                <ValidationError className="error-message" prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-field">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  className="contact-field"
                  label={t("YOUR.EMAIL.ADDRESS")}
                  variant="outlined"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmailText(event.target.value);
                  }}
                />
                <ValidationError className="error-message" prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="form-field">
              <TextField
                id="message"
                type="message"
                name="message"
                className="contact-field"
                label={t("MESSAGE")}
                multiline
                rows={8}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setMessageText(event.target.value);
                }}
              />
              <ValidationError className="error-message" prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button id="submit-button" type="submit" disabled={isFormInvalid()} variant="contained">
              {t("SEND")}
            </Button>
          </Box>
        </form>
      )}
    </Layout>
  );
}

export const Head = () => <Seo location={'/contact'} title={title} description={description} />;

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
