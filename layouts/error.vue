<template>
  <section
    class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-auto tw-p-5 tw-py-20 md:tw-h-screen md:tw-py-0 tw-text-center"
  >
    <h1 :data-text="statusCode" class="mega-h1 glitch">{{ statusCode }}</h1>
    <p
      :data-text="message"
      class="glitch tw-text-purple-500 tw-text-xl tw-mt-0"
    >
      {{ message }}
    </p>
    <nuxt-link to="/" class="button tw-mt-10">&lt;- Home</nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Error',

  layout: 'empty',

  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    }
  },

  head() {
    return {
      title: this.statusCode,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>
