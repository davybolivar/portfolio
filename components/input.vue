<template>
  <div class="input">
    <span v-if="label" class="input__label">
      {{ label }}
    </span>
    <textarea
      v-if="type.match(/textarea/i)"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{ 'input__field--disabled': disabled }"
      @input="handleChange"
      rows="9"
      class="input__field input__field--textarea"
    >
    </textarea>
    <div v-else class="input__container">
      <i v-if="$slots.prefix" class="input__prefix">
        <slot name="prefix"></slot>
      </i>
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{
          'input__field--disabled': disabled,
          'input__field--prefix': $slots.prefix
        }"
        @input="handleChange"
        class="input__field"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    value: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.input {
  @apply tw-w-full;

  &__label {
    @apply tw-mb-2 tw-w-full tw-block;
  }

  &__container {
    @apply tw-relative;
  }

  &__prefix {
    @apply tw-text-sm tw-absolute tw-h-full tw-px-2 tw-flex tw-items-center tw-pointer-events-none;
  }

  &__field {
    @apply tw-w-full tw-outline-none tw-bg-purple-900 tw-p-2 tw-text-base tw-rounded-sm tw-border tw-border-indigo-500;
    transition: 0.1s border-color ease-in, 0.1s background-color ease-in,
      0.1s color ease-in;

    @screen md {
      @apply tw-text-sm tw-py-1 tw-px-2;
    }

    &:focus {
      @apply tw-border-white;
    }

    &--disabled {
      @apply tw-text-white tw-border-white tw-bg-gray-500;
    }

    &--prefix {
      @apply tw-pl-8;
    }

    &--textarea {
      min-height: 100px;
      max-height: 600px;
    }
  }
}
</style>
