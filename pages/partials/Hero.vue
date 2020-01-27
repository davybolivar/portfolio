<template>
  <section class="hero">
    <div class="hero__container">
      <h1 class="hero__title base-h1">
        <span :class="[{ wave: !pendingType.length }]">👋</span>
        <div class="tw-text-gray-300 tw-text-base tw-my-1 tw-font-normal">
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

  mounted() {
    this.typingEffect()
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
    @apply tw-w-full;
  }

  &__title {
    @apply tw-leading-tight;
  }

  &__typewriter {
    @apply tw-inline-block;
    font-size: 0;
  }

  &__type {
    @apply tw-text-indigo-400 tw-inline;
  }
}

.wave {
  animation: wave-animation 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(-10deg);
  }

  20% {
    transform: rotate(12deg);
  }

  30% {
    transform: rotate(-10deg);
  }

  40% {
    transform: rotate(9deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.cursor {
  @applytw-text-white tw-inline-block;

  &--blink {
    animation: blink-animation 0.35s alternate infinite;
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
