<template>
  <section id="hero" class="hero">
    <div class="hero__container">
      <h1 class="hero__title base-h1">
        <span :class="[{ wave: !pendingType.length }]">👋</span>
        <div class="tw-text-purple-500 tw-text-base tw-my-1 tw-font-normal">
          Hello, My name is
        </div>
        Davy Bolivar
        <br />
        <span class="hero__typewriter">
          <span v-html="sanitizeHtml(typed)" class="hero__type base-h1"></span>
          <span
            :class="[{ 'cursor--blink': !pendingType.length || !typed.length }]"
            class="cursor base-h1"
            >_</span
          >
        </span>
      </h1>
      <p class="tw-pt-5">
        Lorem ipsum lorel the quick brown fox jumped voer the lazy moon
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',

  data() {
    return {
      typed: '',
      pendingType: `I'm a software/front-end engineer.`
    }
  },

  async mounted() {
    await new Promise(() => setTimeout(this.typingEffect, 800))
  },

  methods: {
    typingEffect(speed = 50) {
      const str = this.pendingType
      if (str.length) {
        this.typed += !str.charAt(0).match(/\//) ? str.charAt(0) : '</br>'
        this.pendingType = str.substring(1)
        setTimeout(this.typingEffect, speed)
      }
    },

    sanitizeHtml(str) {
      return this.$sanitize(str)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  &__container {
    @apply tw-w-full tw-my-20;
  }

  &__title {
    @apply tw-leading-tight;
  }

  &__typewriter {
    @apply tw-inline-block;
    font-size: 0;
  }

  &__type {
    @apply tw-inline tw-text-gray-400;
  }
}

.cursor {
  @apply tw-text-white tw-inline-block;

  &--blink {
    animation: blink-animation 0.35s alternate infinite 0.1s;
  }
}

@keyframes blink-animation {
  0% {
    opacity: 0;
  }

  90%,
  100% {
    opacity: 1;
  }
}
</style>
