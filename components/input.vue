<template>
  <div class="input">
    <span v-if="label" class="input__label">
      {{ label }}
    </span>
    <textarea
      v-if="type.match(/textarea/i)"
      rows="9"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{ 'input__field--disabled': disabled }"
      @input="handleChange"
      class="input__field input__field--textarea"
    >
    </textarea>
    <input
      v-else
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{ 'input__field--disabled': disabled }"
      @input="handleChange"
      class="input__field"
    />
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

  &__field {
    @apply tw-w-full tw-outline-none tw-bg-purple-800 tw-p-2 tw-text-sm tw-rounded-sm tw-border tw-border-purple-500;
    transition: 0.1s border-color ease-in, 0.1s background-color ease-in,
      0.1s color ease-in;

    &:focus {
      @apply tw-border-white;
    }

    &--disabled {
      @apply tw-text-white tw-border-white tw-bg-gray-500;
    }

    &--textarea {
      min-height: 100px;
      max-height: 600px;
    }
  }
}
</style>
