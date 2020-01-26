<template>
  <section id="contact" class="contact">
    <h2 class="base-h2">CONTACT</h2>
    <div class="contact__container">
      <div class="contact__statement">
        <h2 class="tw-text-purple-500 tw-font-bold tw-text-3xl md:tw-text-5xl">
          Get in touch?
        </h2>
        <p class="tw-text-md md:tw-text-2xl">
          I'll try my best to get back to you as soon as possible!
        </p>
        <img
          src="~static/images/contact-illustration.png"
          alt="contact-illustration"
          class="contact__illustration"
        />
      </div>
      <div class="contact__form">
        <form @submit.prevent="submit" class="tw-mt-6 md:tw-mt-0 tw-w-full">
          <v-input
            v-model="form.name"
            :disabled="loading"
            type="text"
            label="FULL NAME"
            placeholder="John Doe"
          />
          <v-input
            v-model="form.email"
            :disabled="loading"
            type="email"
            label="EMAIL"
            placeholder="john.doe@gmail.com"
            class="tw-mt-6"
          />
          <v-input
            v-model="form.message"
            :disabled="loading"
            type="textarea"
            label="MESSAGE"
            placeholder="Hello world..."
            class="tw-mt-6"
          />
          <v-button :loading="loading" class="tw-w-full tw-mt-16">
            <transition name="fade-up" mode="out-in">
              <span :key="loading">
                {{ loading ? 'SENDING...' : 'SEND MESSAGE ->' }}
              </span>
            </transition>
          </v-button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/button'
import Input from '~/components/input'

export default {
  name: 'Contact',

  components: {
    'v-button': Button,
    'v-input': Input
  },

  data() {
    return {
      loading: false,

      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    submit() {
      this.loading = true
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  &__container {
    @apply tw-block tw-mt-6;

    @screen md {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 'statement form';
      grid-gap: 20px;
    }
  }

  &__statement {
    @screen md {
      @apply tw-mt-10;
      grid-area: statement;
    }
  }

  &__illustration {
    max-width: 300px;
    @apply tw-w-full tw-px-10 tw-mx-auto;

    @screen md {
      max-width: 400px;
    }
  }

  &__form {
    @apply tw-flex tw-items-center;

    @screen md {
      grid-area: form;
    }
  }
}
</style>
