<template>
  <section id="about" v-scroll-reveal class="about">
    <h2 v-scroll-reveal class="base-h2">ABOUT</h2>
    <div v-scroll-reveal>
      <p>
        Hello! My name is <mark>Davy Jones Bolivar</mark>, and I'm currently
        working as a <strong>Software Front-end Engineer</strong> at
        <a href="https://wavecell.com/" target="_">Wavecell, an 8x8 company</a>.
      </p>
      <p>
        I mostly worked on web applications that are built with
        <strong>React</strong> and <strong>Vue</strong>. I occasionally enjoy
        designing web applications, videogame assets (pixel art) and logos.
      </p>
      <p>
        I'm currently based in Cebu, Philippines.
      </p>
      <div class="socials">
        <a
          :href="githubUrl"
          class="socials__item"
          target="_"
          aria-label="Github"
        >
          <i class="socials__icon icon icon-github"></i>
        </a>
        <a
          :href="linkedinUrl"
          class="socials__item"
          target="_"
          aria-label="LinkedIn"
        >
          <i class="socials__icon icon icon-linkedin"></i>
        </a>
        <a
          :href="angellistUrl"
          class="socials__item"
          target="_"
          aria-label="AngelList"
        >
          <i class="socials__icon icon icon-angellist"></i>
        </a>
        <a :href="itchUrl" class="socials__item" target="_" aria-label="ItchIO">
          <i class="socials__icon icon icon-itch"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  data() {
    const githubUrl = process.env.githubUrl
    const linkedinUrl = process.env.linkedinUrl
    const angellistUrl = process.env.angellistUrl
    const itchUrl = process.env.itchUrl

    return {
      githubUrl,
      linkedinUrl,
      angellistUrl,
      itchUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.socials {
  @apply tw-mt-10;

  &__icon {
    @apply tw-text-3xl;
  }

  &__item {
    @apply tw-mr-4 tw-inline-block tw-text-purple-500 tw-cursor-pointer;
    transition: color 0.1s ease;

    @screen md {
      &:hover {
        @apply tw-text-white;
      }
    }
  }
}
</style>
