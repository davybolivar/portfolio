<template>
  <div>
    <headerComponent />
    <div class="tw-px-5">
      <nuxt />
    </div>
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
  font-family: 'JetbrainsMono', Cascadia, Monaco, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  font-display: swap;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #17151f;

  @apply tw-text-base tw-text-white;
  counter-reset: header;
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

mark {
  @apply tw-text-purple-500;
  background: none;
}

address {
  @apply tw-not-italic tw-inline-block;
}

p {
  @apply tw-mt-5 tw-leading-loose tw-text-base tw-text-gray-200;
}

.base-h1 {
  @apply tw-text-4xl tw-font-bold tw-tracking-wide tw-leading-tight;
  @screen md {
    @apply tw-text-6xl;
  }
}

.base-h2 {
  @apply tw-text-2xl tw-font-bold tw-tracking-wide tw-flex tw-items-center;
  line-height: 0;
  counter-increment: header;

  &:before {
    content: counter(header, decimal-leading-zero);
    @apply tw-text-base tw-mr-2 tw-text-purple-500 tw-border-b-2 tw-border-purple-500 tw-leading-none tw-pb-px;
  }
}

.base-h3 {
  @apply tw-text-2xl tw-tracking-wide;
}

.base-list {
  @apply tw-list-none;

  @screen md {
    @apply tw-flex tw-flex-wrap;
  }

  &--small {
    @apply tw-text-gray-200 tw-text-sm tw-flex tw-flex-wrap;

    @screen lg {
      @apply tw-block tw-flex-no-wrap;
    }
  }

  &--ordered {
    counter-reset: li;
  }

  &__item {
    @apply tw-text-white tw-text-base;
    counter-increment: li;
  }

  &__item--numbered {
    &:before {
      content: counter(li, decimal-leading-zero) '. ';
      display: inline-block;
      @apply tw-mr-1 tw-text-purple-600;
    }
  }

  &__item--purple {
    @apply tw-text-purple-600;

    &:before {
      @apply tw-text-white;
    }
  }

  &__item-arrow {
    @apply tw-mt-1 tw-w-1/2 tw-px-3 tw-text-base;

    @screen lg {
      @apply tw-w-auto;
    }

    &:before {
      content: '▹';
      @apply tw-mr-2 tw-text-purple-500;
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

.call-gesture {
  animation: wave-animation 1.5s infinite;
  transform-origin: 25% 55%;
  display: inline-block;
}

.wave {
  animation: wave-animation 1.5s infinite;
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

.glitch {
  @apply tw-inline-block;
  position: relative;

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -1px;
    text-shadow: 2px 0 blue;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    background: #17151f;
    overflow: hidden;
    animation: noise-anim 2s infinite steps(1) linear alternate;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    left: 1px;
    text-shadow: -1px 0 red;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    background: #17151f;
    overflow: hidden;
    animation: noise-anim 1s infinite steps(2) alternate-reverse;
  }

  @keyframes noise-anim {
    $steps: 20;
    @for $i from 1 through $steps {
      #{percentage($i*(1/$steps))} {
        $top: random(100);
        $bottom: random(101 - $top);
        clip-path: inset(#{$top}% 0 #{$bottom}% 0);
      }
    }
  }
}
</style>
