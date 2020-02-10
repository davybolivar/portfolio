<template>
  <header ref="header" :class="toggleClass" class="header header--sticky">
    <div class="header__container">
      <a href="#hero" class="logo" aria-label="Website logo">
        <i class="icon icon-logo"></i>
      </a>
      <nav class="nav">
        <div
          v-for="nav in navList"
          class="nav-links nav__container tw-invisible"
        >
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
        <svg
          :class="[showSidebar && 'hamburger--close']"
          class="hamburger"
          viewBox="0 0 100 100"
          width="30"
        >
          <path
            class="hamburger__line hamburger__line--top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path class="hamburger__line" d="m 30,50 h 40" />
          <path
            class="hamburger__line hamburger__line--bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </a>
    </div>
    <div
      :aria-hidden="!showSidebar"
      :class="[{ 'menu--open': showSidebar }]"
      class="menu"
    >
      <aside class="menu__sidebar">
        <ol class="menu__list">
          <li v-for="nav in navList" class="menu__item">
            <a
              :href="nav.url"
              @click="() => (showSidebar = !showSidebar)"
              class="menu__link"
            >
              {{ nav.text.toUpperCase() }}
              <span class="tw-text-purple-500">-></span>
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
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Davy Bolivar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Davy Jones Bolivar portfolio'
        }
      ],
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
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)

    const scrollOptions = {
      duration: 600,
      scale: 1,
      origin: 'top',
      distance: '30px',
      mobile: true,
      reset: false,
      cleanup: true,
      viewFactor: 0.1
    }

    this.$sr.reveal('.nav-links', {
      ...scrollOptions,
      interval: 100
    })
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
  @apply tw-px-5 tw-text-sm tw-z-50 tw-fixed tw-top-0 tw-pointer-events-auto tw-inset-x-0;
  margin-bottom: -5.5em;
  display: flex;
  align-items: center;
  background-color: #17151f;
  transform: translateY(0);
  transition: transform 0.15s ease-in;

  @screen md {
    @apply tw-sticky;
  }

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
  @apply tw-flex tw-fixed tw-inset-0 tw-pl-24 tw-pointer-events-none tw-h-screen tw-w-full tw-invisible tw-overflow-hidden;
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
    @apply tw-p-5 tw-w-full tw-flex tw-justify-center tw-items-center tw-bg-indigo-900 tw-pointer-events-auto;
    transform: translateX(100%);
    transition: all 0.2s ease;
  }

  &__list {
    @apply tw-w-full;
    counter-reset: sidenav;
  }

  &__item {
    @apply tw-relative tw-border-t tw-border-indigo-700;

    &:first-child {
      @apply tw-border-t-0;
    }
  }

  &__link {
    @apply tw-block tw-text-white tw-text-center tw-p-5 tw-flex tw-justify-between tw-items-center tw-text-lg tw-pl-10;
    counter-increment: sidenav;

    &:before {
      @apply tw-text-purple-500 tw-text-sm tw-absolute tw-top-0 tw-left-0 tw-bottom-0 tw-flex tw-items-center;
      content: counter(sidenav, decimal-leading-zero) '.';
    }
  }
}

.hamburger {
  $this: &;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: scale(2);

  &__line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #fff;
    stroke-width: 2;

    &--top {
      stroke-dasharray: 40 139;
    }

    &--bottom {
      stroke-dasharray: 40 180;
    }
  }

  &--close {
    transform: rotate(45deg) scale(2);

    #{$this}__line--top {
      stroke-dashoffset: -98px;
    }

    #{$this}__line--bottom {
      stroke-dashoffset: -138px;
    }
  }
}
</style>
