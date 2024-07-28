import './page-styles/contact.scss';

import { useForm, ValidationError } from '@formspree/react';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { HeadComponent } from '../components/head/head';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';

const titleCode = 'CONTACT.PAGE.TITLE';
const descriptionCode = 'CONTACT.PAGE.DESCRIPTION';
const namespaceCode = 'contact';

export default function Contact(props: Readonly<IPageProps>): React.ReactElement {
  const [state, handleSubmit, reset] = useForm('mkndgrkd');

  const [nameText, setNameText] = React.useState('');
  const [emailText, setEmailText] = React.useState('');
  const [messageText, setMessageText] = React.useState('');

  const { t } = useTranslation(namespaceCode);

  function isFormInvalid(): boolean {
    return state.submitting || !nameText.length || !emailText.length || !messageText.length;
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameText(event.target.value);
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailText(event.target.value);
  }
  function handleMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessageText(event.target.value);
  }

  return (
    <Layout
      titleCode={titleCode}
      descriptionCode={descriptionCode}
      i18nNamespace={namespaceCode}
      location={props.location}
    >
      {state.succeeded ? (
        <div>
          <p>{t('EMAIL.SENT')}</p>
          <Button onClick={reset}>{t('SENT.ANOTHER.MAIL')}</Button>
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
                  label={t('NAME.FIRSTNAME')}
                  variant="outlined"
                  onChange={handleNameChange}
                />
                <ValidationError className="error-message" prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="form-field">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  className="contact-field"
                  label={t('YOUR.EMAIL.ADDRESS')}
                  variant="outlined"
                  onChange={handleEmailChange}
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
                label={t('MESSAGE')}
                multiline
                rows={8}
                onChange={handleMessageChange}
              />
              <ValidationError className="error-message" prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button id="submit-button" type="submit" disabled={isFormInvalid()} variant="contained">
              {t('SEND')}
            </Button>
          </Box>
        </form>
      )}
    </Layout>
  );
}

export const Head = ({ location }: { location: Location }) =>
  HeadComponent(titleCode, descriptionCode, namespaceCode, location);
