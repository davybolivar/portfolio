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

<style>
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
  @apply tw-mt-5 tw-leading-loose;
}

.icon {
  @apply tw-text-3xl;
}

.base-h1 {
  @apply tw-text-4xl tw-font-bold tw-tracking-wide;
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
</style>
