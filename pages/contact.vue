<template>
  <div class="layout-container">
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div v-if="isMailSent">
        <p>{{ $t("EMAIL.SENT") }}</p>
      </div>

      <v-form id="contact-form" ref="contactForm" v-model="isValid" @submit.prevent="handleSubmit">
        <div id="contact-informations">
          <v-text-field
            id="name"
            v-model="name"
            class="form-field"
            :rules="[rules.required]"
            :label="$t('NAME.FIRSTNAME')"
            hide-details="auto"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            id="email"
            v-model="email"
            type="email"
            class="form-field"
            :rules="[rules.email]"
            :label="$t('YOUR.EMAIL.ADDRESS')"
            hide-details="auto"
            variant="outlined"
          ></v-text-field>
        </div>

        <v-textarea
          id="message"
          v-model="message"
          class="form-field"
          rows="10"
          :rules="[rules.required]"
          :label="$t('MESSAGE')"
          hide-details="auto"
          variant="outlined"
        ></v-textarea>

        <v-btn id="submit-button" type="submit" variant="flat" :disabled="!isValid">
          {{ $t("SEND") }}
        </v-btn>
      </v-form>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const { t } = useI18n();
const titleCode = "CONTACT.PAGE.TITLE";
const descriptionCode = "CONTACT.PAGE.DESCRIPTION";
const isMailSent = ref(false);
const isValid = ref(false);
const name = ref("");
const email = ref("");
const message = ref("");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
  email: (value: string) => !!(value || "").match(emailRegex) || t("EMAIL.NOT.VALID.MESSAGE"),
  required: (value: string) => (value || "").length >= 1 || `${t("REQUIRED.FIELD.MESSAGE")}`
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleSubmit(e: any) {
  e.preventDefault();
  const data = new FormData(e.target);
  data.append("name", name.value);
  data.append("email", email.value);
  data.append("message", message.value);

  fetch("https://formspree.io/f/mkndgrkd", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
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
#contact-form {
  display: flex;
  flex-direction: column;
  gap: 2em;

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
