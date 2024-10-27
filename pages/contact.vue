<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div v-if="isMailSent">
        <p>{{ $t('EMAIL.SENT') }}</p>
      </div>

      <v-form id="contact-form" ref="contactForm" v-model="isValid" @submit.prevent="handleSubmit">
        <div id="contact-informations">
          <v-text-field
            id="name"
            class="form-field"
            v-model="name"
            :rules="[rules.length(5)]"
            :label="$t('NAME.FIRSTNAME')"
            hideDetails="auto"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            id="email"
            type="email"
            class="form-field"
            v-model="email"
            :rules="[rules.email]"
            :label="$t('YOUR.EMAIL.ADDRESS')"
            hideDetails="auto"
            variant="outlined"
          ></v-text-field>
        </div>

        <v-textarea
          id="message"
          class="form-field"
          v-model="message"
          rows="8"
          :rules="[rules.length(10)]"
          :label="$t('MESSAGE')"
          hideDetails="auto"
          variant="outlined"
        ></v-textarea>

        <v-btn id="submit-button" type="submit" variant="flat" :disabled="!isValid">
          {{ $t('SEND') }}
        </v-btn>
      </v-form>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const titleCode = 'CONTACT.PAGE.TITLE';
const descriptionCode = 'CONTACT.PAGE.DESCRIPTION';
const isMailSent = ref(false);
const isValid = ref(false);
const name = ref('');
const email = ref('');
const message = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
  email: (value: string) => !!(value || '').match(emailRegex) || 'Please enter a valid email',
  length: (len: number) => (value: string) => (value || '').length >= len || `Invalid character length, required ${len}`
};

function handleSubmit(e: any) {
  e.preventDefault();
  const data = new FormData(e.target);
  data.append('name', name.value);
  data.append('email', email.value);
  data.append('message', message.value);

  fetch('https://formspree.io/f/mkndgrkd', {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' }
  })
    .then((response) => {
      if (response.ok) {
        isMailSent.value = true;
        e.target.reset();
        setTimeout(() => {
          isMailSent.value = false;
        }, 5000);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

#contact-form {
  display: flex;
  flex-direction: column;
  gap: 3em;

  .v-field {
    background-color: #fff;
  }

  #contact-informations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 3em;
  }

  .form-field {
    flex: 1;
  }

  #submit-button {
    margin: 0 auto;
  }
}

@media (width <= 700px) {
  #contact-form {
    width: 100%;

    #contact-informations {
      flex-direction: column;
      row-gap: 1em;
    }
  }
}
</style>
