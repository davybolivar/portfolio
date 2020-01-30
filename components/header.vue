<template>
  <header :class="toggleClass" class="header header--sticky">
    <div class="header__container">
      <a href="#hero" class="logo">
        <i class="icon icon-logo"></i>
      </a>
      <nav class="nav">
        <div class="nav__container">
          <a class="nav__link nav__link--numbered" href="#about">About</a>
        </div>
        <div class="nav__container">
          <a class="nav__link nav__link--numbered" href="#faq">Faq</a>
        </div>
        <div class="nav__container">
          <a class="nav__link nav__link--numbered" href="#skills">Skills</a>
        </div>
        <a class="nav__link nav__link--button" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      prevScrollY: 0,
      toggleClass: ''
    }
  },

  mounted() {
    this.toggleHeader()
    window.addEventListener('scroll', this.throttle(this.toggleHeader, 200))
  },

  methods: {
    toggleHeader(evt) {
      const headerElement = document.querySelector('.header')
      if (!evt && !headerElement) return 0

      const offsetY = 4
      const { offsetHeight } = headerElement
      if (
        (window.scrollY <= 0 || window.scrollY >= offsetHeight) &&
        Math.abs(window.scrollY - this.prevScrollY) >= offsetY
      ) {
        this.toggleClass =
          this.prevScrollY <= window.scrollY ? 'header--hidden' : ''
      }
      this.prevScrollY = window.scrollY
    },

    throttle(func, wait, options) {
      let context, args, result
      let timeout = null
      let previous = 0

      if (!options) options = {}

      const later = function() {
        previous = options.leading === false ? 0 : Date.now()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }

      return function() {
        const now = Date.now()
        if (!previous && options.leading === false) previous = now
        const remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout)
            timeout = null
          }
          previous = now
          result = func.apply(context, args)
          if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining)
        }
        return result
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @apply tw-p-5 tw-text-sm tw-z-50 tw-sticky tw-top-0;
  margin-bottom: -5.5em;
  display: flex;
  align-items: center;
  background-color: #17151f;
  transition: transform 0.15s ease-in;

  &__container {
    @apply tw-w-full tw-mx-auto tw-flex tw-items-center tw-justify-between;
    max-width: 1230px;
  }

  &--hidden {
    transform: translateY(-100%);
  }
}

.logo {
  @apply tw-text-3xl tw-inline-flex tw-text-purple-500;
  transition: color 0.15s ease-in;

  &:hover {
    @apply tw-text-white;
  }
}

.nav {
  @apply tw-flex tw-text-sm tw-hidden;
  counter-reset: nav;

  @screen md {
    @apply tw-flex;
  }

  &__container {
    @apply tw-flex tw-items-center;
  }

  &__link {
    @apply tw-ml-10;
    transition: color 0.2s ease-in;

    &--numbered {
      counter-increment: nav;

      &:before {
        @apply tw-text-purple-500 tw-mr-2;
        content: counter(nav, decimal-leading-zero) '.';
      }

      &:hover {
        @apply tw-text-purple-500;
      }
    }

    &--button {
      @apply tw-bg-indigo-500 tw-rounded-sm tw-px-4 tw-py-2 tw-text-white tw-font-bold;
      transition: 0.1s background-color ease-in;

      &:hover {
        @apply tw-bg-indigo-600;
      }
    }
  }
}
</style>
