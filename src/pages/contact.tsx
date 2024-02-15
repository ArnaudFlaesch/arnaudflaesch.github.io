import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';

import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import './page-styles/contact.scss';

const title = 'Contactez-moi';
const description = "Formulaire de contact si vous souhaitez me proposer une offre d'emploi ou juste discuter.";

export default function Contact(props: Readonly<IPageProps>): React.ReactElement {
  const [state, handleSubmit, reset] = useForm('mkndgrkd');

  const [nameText, setNameText] = React.useState('');
  const [emailText, setEmailText] = React.useState('');
  const [messageText, setMessageText] = React.useState('');

  function isFormInvalid(): boolean {
    return state.submitting || !nameText.length || !emailText.length || !messageText.length;
  }

  return (
    <Layout title={title} description={description} location={props.location}>
      {state.succeeded ? (
        <div>
          <p>Votre email a bien été envoyé !</p>
          <Button onClick={reset}>Envoyer un nouveau mail</Button>
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
                  label="Votre nom et prénom"
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
                  label="Votre adresse mail"
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
                label="Message"
                multiline
                rows={8}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setMessageText(event.target.value);
                }}
              />
              <ValidationError className="error-message" prefix="Message" field="message" errors={state.errors} />
            </div>

            <Button id="submit-button" type="submit" disabled={isFormInvalid()} variant="contained">
              Envoyer
            </Button>
          </Box>
        </form>
      )}
    </Layout>
  );
}

export const Head = () => <Seo location={'/contact'} title={title} description={description} />;
