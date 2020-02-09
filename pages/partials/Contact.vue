<template>
  <section id="contact" v-scroll-reveal class="contact">
    <h2 v-scroll-reveal class="base-h2">CONTACT</h2>
    <div v-scroll-reveal class="contact__container">
      <div class="contact__statement">
        <h2
          class="contact__title tw-text-white tw-font-bold tw-text-3xl md:tw-text-5xl glitch"
          data-text="Get in touch?"
        >
          Get in touch?
        </h2>
        <span class="call-gesture tw-text-3xl md:tw-text-5xl">🤙</span>
        <p>
          I'll try my best to get back to you as soon as possible! You may reach
          out to me via my phone or email.
        </p>
        <div class="tw-my-8">
          <div class="tw-py-1">
            <i class="icon icon-pin tw-text-purple-500"></i>
            <address>Cebu, Philippines</address>
          </div>
          <div class="tw-py-1">
            <i class="icon icon-phone tw-text-purple-500"></i>
            <a href="tel:+639177700058">+63 917 770 0058</a>
          </div>
          <div class="tw-py-1">
            <i class="icon icon-mail tw-text-purple-500"></i>
            <a href="mailto:davy.bolivar@gmail.com">davy.bolivar@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="contact__form">
        <form @submit.prevent="submit" class="tw-mt-6 md:tw-mt-0 tw-w-full">
          <v-input
            v-model="form.name"
            :disabled="loading"
            @focus="setFormStatus(0)"
            type="text"
            label="FULL NAME"
            placeholder="John Doe"
          />
          <v-input
            v-model="form.email"
            :disabled="loading"
            @focus="setFormStatus(0)"
            type="email"
            label="EMAIL"
            placeholder="john.doe@gmail.com"
            class="tw-mt-6"
          />
          <v-input
            v-model="form.message"
            :disabled="loading"
            @focus="setFormStatus(0)"
            type="textarea"
            label="MESSAGE"
            placeholder="Hello world!"
            class="tw-mt-6"
          />
          <v-button
            :loading="loading"
            :class="buttonState.className"
            class="tw-w-full tw-mt-16"
          >
            <transition name="fade-up" mode="out-in">
              <span :key="status">
                {{ buttonState.text }}
              </span>
            </transition>
          </v-button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
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
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      loading: 'mailer/getLoading',
      status: 'mailer/getStatus'
    }),

    buttonState() {
      const state = { className: '', text: '' }

      if (!this.loading && this.status === -1) {
        state.className = 'button--error'
        state.text = 'ERROR!'
      } else if (!this.loading && this.status === 1) {
        state.className = 'button--success'
        state.text = 'MESSAGE SENT!'
      } else if (this.loading) {
        state.text = '...SENDING'
      } else {
        state.text = 'SEND MESSAGE ->'
      }

      return state
    }
  },

  methods: {
    ...mapActions({
      sendEmail: 'mailer/sendEmail'
    }),

    ...mapMutations({
      setFormStatus: 'mailer/SET_STATUS'
    }),

    submit() {
      this.sendEmail(this.form)
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

  &__title {
    @apply tw-relative;
    z-index: 0;
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
