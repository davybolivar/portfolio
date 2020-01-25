<template>
  <section id="contact">
    <h2 class="base-h2">CONTACT</h2>
    <div class="tw-mt-6">
      <form @submit.prevent="submit">
        <v-button :loading="loading" class="tw-w-full">
          <transition name="fade-up" mode="out-in">
            <span :key="loading">
              {{ loading ? 'SENDING...' : 'SEND MESSAGE ->' }}
            </span>
          </transition>
        </v-button>
      </form>
    </div>
  </section>
</template>

<script>
import Button from '~/components/button'

export default {
  name: 'Contact',

  components: {
    'v-button': Button
  },

  data() {
    return {
      loading: false
    }
  },

  methods: {
    submit() {
      this.loading = true
      console.log('SUBMIT MESSAGE BRO!')
    }
  }
}
</script>
