<template>
  <main class="container tw-w-full tw-mx-auto">
    <HeroSection class="container__hero" />
    <AboutSection class="container__content container__about" />
    <FaqSection class="container__content container__faq" />
    <SkillsSection
      :skills="SkillsData"
      class="container__content container__skills"
    />
    <ContactSection class="container__content container__contact" />
  </main>
</template>

<script>
import AboutSection from '~/pages/partials/About'
import ContactSection from '~/pages/partials/Contact'
import HeroSection from '~/pages/partials/Hero'
import SkillsSection from '~/pages/partials/Skills'
import FaqSection from '~/pages/partials/Faq'

import SkillsData from '~/static/json/skills'

export default {
  components: {
    AboutSection,
    HeroSection,
    FaqSection,
    ContactSection,
    SkillsSection
  },

  data() {
    return {
      SkillsData
    }
  }
}
</script>

<style lang="scss">
.container {
  @apply tw-relative;
  max-width: 1230px;

  @screen md {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 'hero hero' 'about faq' 'skills skills' 'contact contact';
  }

  &__hero {
    min-height: 100vh;
    display: flex;
    align-items: center;

    @screen md {
      height: 100vh;
      min-height: 700px;
      grid-area: hero;
    }
  }

  &__content {
    @apply tw-border-t tw-border-purple-900 tw-py-20;

    @screen md {
      @apply tw-py-20;
      width: 100%;
      grid-area: about;
    }
  }

  &__about {
    @screen md {
      @apply tw-pr-8;
      grid-area: about;
    }
  }

  &__faq {
    @screen md {
      @apply tw-border-l tw-pl-8;
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
