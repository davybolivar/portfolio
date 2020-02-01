<template>
  <header ref="header" :class="toggleClass" class="header header--sticky">
    <div class="header__container">
      <a href="#hero" class="logo">
        <i class="icon icon-logo"></i>
      </a>
      <nav class="nav">
        <div v-for="nav in navList" class="nav__container">
          <a
            :href="nav.url"
            :class="[nav.button ? 'nav__link--button' : 'nav__link--numbered']"
            class="nav__link"
          >
            {{ nav.text }}
          </a>
        </div>
      </nav>
      <a
        @click.prevent="() => (showSidebar = !showSidebar)"
        :class="[{ 'burger--open': showSidebar }]"
        class="burger"
      >
        {{ showSidebar }}
      </a>
    </div>
    <div
      :aria-hidden="!showSidebar"
      :class="[{ 'menu--open': showSidebar }]"
      class="menu"
    >
      <aside class="menu__sidebar">
        <ol>
          <li v-for="nav in navList">
            <a :href="nav.url" @click="() => (showSidebar = !showSidebar)">
              {{ nav.text }}
            </a>
          </li>
        </ol>
      </aside>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  head() {
    return {
      bodyAttrs: {
        class: this.showSidebar ? 'blur' : ''
      }
    }
  },

  data() {
    return {
      prevScrollY: 0,
      toggleClass: '',
      showSidebar: false,
      navList: [
        { button: false, url: '#about', text: 'About' },
        { button: false, url: '#faq', text: 'Faq' },
        { button: false, url: '#skills', text: 'Skills' },
        { button: true, url: '#contact', text: 'Contact' }
      ]
    }
  },

  created() {
    this.handleScroll = this.throttle(this.toggleHeader, 200)
    this.handleResize = () => {
      this.showSidebar = false
      this.toggleHeader()
    }
  },

  mounted() {
    this.toggleHeader()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    toggleHeader() {
      const headerElement = this.$refs.header
      if (!headerElement) return 0
      const offsetY = 4
      const { offsetHeight } = headerElement
      if (
        (window.scrollY <= 0 || window.scrollY >= offsetHeight + 20) &&
        Math.abs(window.scrollY - this.prevScrollY) >= offsetY
      ) {
        this.toggleClass =
          !this.showSidebar &&
          this.prevScrollY <= window.scrollY &&
          window.scrollY > 0
            ? 'header--hidden'
            : ''
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

<style lang="scss">
body {
  @apply tw-relative;

  &.blur {
    @apply tw-overflow-hidden;
  }
}
</style>

<style lang="scss" scoped>
.header {
  $this: &;
  @apply tw-px-5 tw-text-sm tw-z-50 tw-sticky tw-top-0 tw-pointer-events-auto;
  margin-bottom: -5.5em;
  display: flex;
  align-items: center;
  background-color: #17151f;
  transform: translateY(0);
  transition: transform 0.15s ease-in;

  &__container {
    @apply tw-py-5 tw-w-full tw-mx-auto tw-flex tw-items-center tw-justify-between;
    max-width: 1230px;
    z-index: 1;
  }

  &--hidden {
    transform: translateY(-100%);
  }
}

.logo {
  @apply tw-text-3xl tw-inline-flex tw-text-purple-500;
  transition: color 0.15s ease-in;

  &:active {
    @apply tw-text-white;
  }

  @screen md {
    @apply tw-flex;

    &:hover {
      @apply tw-text-white;
    }
  }
}

.nav {
  @apply tw-hidden tw-text-sm tw-hidden;
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

.burger {
  @screen md {
    @apply tw-hidden;
  }
}

.menu {
  $this: &;
  @apply tw-flex tw-fixed tw-inset-0 tw-pl-24 tw-pointer-events-none tw-h-screen tw-w-full tw-invisible;
  -webkit-overflow-scrolling: touch;

  @screen md {
    @apply tw-hidden;
  }

  &--open {
    @apply tw-pointer-events-auto tw-visible;

    #{$this}__sidebar {
      transform: translateX(0);
      transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
    }
  }

  &__sidebar {
    @apply tw-p-5 tw-w-full tw-flex tw-justify-center tw-items-center tw-bg-purple-900 tw-pointer-events-auto;
    transform: translateX(100%);
    transition: all 0.2s ease;
  }
}
</style>
