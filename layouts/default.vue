<template>
  <div>
    <headerComponent />
    <nuxt />
    <footerComponent />
  </div>
</template>

<script>
import headerComponent from '~/components/header.vue'
import footerComponent from '~/components/footer.vue'

export default {
  components: {
    headerComponent,
    footerComponent
  }
}
</script>

<style lang="scss">
html {
  font-family: 'JetbrainsMono', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #1a1b1e;

  @apply tw-text-base tw-text-white tw-px-5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p > a {
  @apply tw-text-purple-500 tw-no-underline tw-cursor-pointer;
  @screen md {
    &:hover {
      @apply tw-underline tw-text-purple-600;
    }
  }
}

p {
  @apply tw-mt-5 tw-leading-loose tw-text-base;
}

.icon {
  @apply tw-text-3xl;
}

.base-h1 {
  @apply tw-text-4xl tw-font-bold tw-tracking-wide tw-leading-tight;
  @screen md {
    @apply tw-text-5xl;
  }
}

.base-h2 {
  @apply tw-text-3xl tw-font-bold tw-tracking-wide;
}

.base-h3 {
  @apply tw-text-2xl tw-tracking-wide;
}

.base-list {
  @apply tw-list-none;

  @screen md {
    @apply tw-flex tw-flex-wrap;
  }

  &--ordered {
    @apply tw--my-2;
    counter-reset: li;

    & > li {
      @apply tw-py-2 tw-text-purple-600 tw-text-lg tw-w-full;
      counter-increment: li;

      &:before {
        content: counter(li) '. ';
        display: inline-block;
        @apply tw-mr-3;
      }

      @screen md {
        @apply tw-w-1/2;
      }

      @screen lg {
        @apply tw-w-auto tw-mr-12;
      }
    }

    & ul {
      @apply tw-text-white tw-text-base tw-mt-3 tw-flex tw-flex-wrap tw--mx-3;

      @screen lg {
        @apply tw-block tw-flex-no-wrap;
      }

      li {
        @apply tw-mt-1 tw-w-1/2 tw-px-3;

        @screen lg {
          @apply tw-w-auto;
        }
      }
    }
  }
}

.fade-up-enter-active {
  transition: all 0.2s ease;
}

.fade-up-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-up-enter,
.fade-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
