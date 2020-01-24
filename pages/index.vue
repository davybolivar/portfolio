<template>
  <main class="container tw-w-full tw-mx-auto">
    <section class="container__hero">HERO</section>
    <section class="container__content container__about">ABOUT</section>
    <section class="container__content container__faq">FAQ</section>
    <section class="container__content container__skills">SKILLS</section>
    <section class="container__content container__contact">CONTACT</section>
  </main>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1230px;
  @screen md {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 'hero hero' 'about faq' 'skills skills' 'contact contact';
  }

  &__hero {
    min-height: 100vh;

    @screen md {
      height: 100vh;
      min-height: 700px;
      grid-area: hero;
    }
  }

  &__content {
    @apply tw-border-t tw-border-gray-500 tw-py-5;

    @screen md {
      width: 100%;
      grid-area: about;
    }
  }

  &__about {
    @screen md {
      grid-area: about;
    }
  }

  &__faq {
    @screen md {
      @apply tw-border-l tw-pl-5;
      grid-area: faq;
    }
  }

  &__skills {
    @screen md {
      grid-area: skills;
    }
  }

  &__contact {
    @screen md {
      grid-area: contact;
    }
  }
}
</style>
