import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';

import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
import './page-styles/contact.scss';
import Seo from '../components/Seo';
import { IPageProps } from '../model/IPageProps';
import Layout from '../layout/layout';

export default function Contact(props: Readonly<IPageProps>): React.ReactElement {
  const [state, handleSubmit, reset] = useForm('mkndgrkd');

  function isFormInvalid(): boolean {
    return state.submitting;
  }

  return (
    <Layout location={props.location}>
      <h2>Contactez-moi</h2>

      {state.succeeded ? (
        <div>
          <p>Votre email a bien été envoyé !</p>
          <Button onClick={reset}>Envoyer un nouveau mail</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Box id="contact-form" component={'section'} gap={4}>
            <div id="contact-informations">
              <TextField
                id="name"
                type="text"
                name="name"
                className="contact-field"
                label="Votre nom et prénom"
                variant="outlined"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <TextField
                id="email"
                type="email"
                name="email"
                className="contact-field"
                label="Votre adresse mail"
                variant="outlined"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <TextField
              id="message"
              type="message"
              name="message"
              className="contact-field"
              label="Message"
              multiline
              rows={8}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <Button id="submit-button" type="submit" disabled={isFormInvalid()} variant="contained">
              Envoyer
            </Button>
          </Box>
        </form>
      )}
    </Layout>
  );
}

export const Head = () => <Seo location={'/contact'} title="Contactez-moi" />;
