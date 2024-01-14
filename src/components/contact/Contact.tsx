import { useForm, ValidationError } from '@formspree/react';
import * as React from 'react';

import './Contact.scss';

export default function Contact(): React.ReactElement {
  const [state, handleSubmit] = useForm('mkndgrkd');

  return (
    <div>
      {state.succeeded && <p>Votre email a bien été envoyé !</p>}
      {!state.succeeded && (
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Votre adresse mail</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}
