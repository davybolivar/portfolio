<template>
  <button
    @click="onClick"
    :class="[{ 'button--disabled': loading || disabled }]"
    :disabled="disabled"
    class="button"
  >
    <span v-if="loading" class="button__spinner icon-spinner"></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss">
.button {
  @apply tw-bg-indigo-500 tw-py-4 tw-px-6 tw-text-sm tw-leading-none tw-rounded-sm tw-flex tw-justify-center tw-items-center tw-font-bold tw-outline-none;
  transition: 0.1s color ease-in, 0.1s background-color ease-in;

  @screen md {
    @apply tw-py-3;
  }

  &:hover {
    @apply tw-bg-indigo-600;
  }

  &--disabled {
    @apply tw-bg-gray-500 tw-cursor-not-allowed tw-text-gray-200;

    &:hover {
      @apply tw-bg-gray-600;
    }
  }

  &--error {
    @apply tw-bg-red-600 tw-text-white;

    &:hover {
      @apply tw-bg-red-500;
    }
  }

  &--success {
    @apply tw-bg-green-500 tw-text-white;

    &:hover {
      @apply tw-bg-green-600;
    }
  }

  &__spinner {
    @apply tw-mr-2;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    80%,
    100% {
      transform: rotate(180deg);
    }
  }
}
</style>
