<template>
  <header class="header">
    <a href="#hero" class="logo">
      <i class="icon icon-logo"></i>
    </a>
    <nav class="nav">
      <a class="nav__link nav__link--numbered" href="#about">ABOUT</a>
      <a class="nav__link nav__link--numbered" href="#faq">FAQ</a>
      <a class="nav__link nav__link--numbered" href="#skills">SKILLS</a>
      <a class="nav__link" href="#contact">CONTACT</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  @apply tw-py-5 tw-flex tw-items-center tw-justify-between;
  margin-bottom: -5em;
  position: relative;
  max-width: 1230px;
  display: flex;
  align-items: center;

  @apply tw-w-full tw-mx-auto tw-text-sm tw-z-50;
}

.logo {
  @apply tw-text-3xl tw-text-purple-500 tw-inline-flex;
  transition: color 0.5s ease;

  @screen md {
    &:hover {
      @apply tw-text-white;
    }
  }
}

.nav {
  @apply tw-flex tw-text-sm tw-hidden;
  counter-reset: nav;

  @screen lg {
    @apply tw-flex;
  }

  &__link {
    @apply tw-ml-8;

    &--numbered {
      counter-increment: nav;

      &:before {
        @apply tw-text-purple-500 tw-mr-1;
        content: counter(nav, decimal-leading-zero) '.';
      }
    }
  }
}
</style>
