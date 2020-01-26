<template>
  <div class="switcher">
    <div class="switcher__container">
      <button
        v-for="option in options"
        @click="handleClick(option)"
        :class="[
          `switcher__button--${option}`,
          { 'switcher__button--active': option === value }
        ]"
        class="switcher__button"
      >
        {{ option.toUpperCase() }}
      </button>
    </div>
    <span class="switcher__border"></span>
  </div>
</template>

<script>
export default {
  name: 'Switcher',

  props: {
    value: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      required: true
    }
  },

  watch: {
    value() {
      this.setBorder()
    }
  },

  mounted() {
    this.setBorder()
    window.addEventListener('resize', this.setBorder)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setBorder)
  },

  methods: {
    setBorder() {
      const borderElement = document.querySelector('.switcher__border')
      const activeButton = document.querySelector(
        `.switcher__button--${this.value}`
      )
      const { offsetLeft, offsetWidth } = activeButton
      borderElement.style.width = `${offsetWidth + 2}px`
      borderElement.style.transform = `translateX(${offsetLeft - 1}px)`
      borderElement.style.opacity = 1
    },

    handleClick(option) {
      this.$emit('input', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher {
  @apply tw-relative;

  &__container {
    @apply tw-rounded-sm tw-border tw-border-gray-500;
  }

  &__button {
    @apply tw-outline-none tw-py-2 tw-px-4 tw-text-gray-300 tw-rounded-sm tw-text-sm;

    @screen md {
      @apply tw-py-1;

      &:hover {
        @apply tw-text-white tw-bg-gray-700;
      }
    }

    &:active {
      @apply tw-bg-purple-800;
    }

    &--active {
      @apply tw-text-white tw-bg-purple-900;
      @screen md {
        &:hover {
          @apply tw-bg-purple-900;
        }
      }
    }
  }

  &__border {
    @apply tw-absolute tw-h-full tw-border tw-border-indigo-500 tw-rounded-sm tw-border-2 tw-pointer-events-none;
    transition: 0.2s width cubic-bezier(1, 0.5, 0.8, 1),
      0.2s transform cubic-bezier(1, 0.5, 0.8, 1);
    top: 0;
    left: 0;
    opacity: 0;
  }
}
</style>
