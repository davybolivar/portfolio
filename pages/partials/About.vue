<template>
  <section>
    <h2 class="base-h2">ABOUT</h2>
    <p>
      My name is Davy Jones Bolivar, and I'm currently working as a Software
      Front-end Engineer at
      <a href="https://wavecell.com/" target="_">Wavecell, an 8x8 company</a>.
    </p>
    <p>I love developing web applications using Vue, and React!</p>
    <p>I'm currently residing in Cebu, Philippines.</p>
    <div class="socials">
      <a :href="githubUrl" class="socials__item" target="_">
        <i class="icon icon-github-alt"></i>
      </a>
      <a :href="linkedinUrl" class="socials__item" target="_">
        <i class="icon icon-linkedin"></i>
      </a>
      <a :href="dribbbleUrl" class="socials__item" target="_">
        <i class="icon icon-dribbble"></i>
      </a>
      <a :href="itchUrl" class="socials__item" target="_">
        <i class="icon icon-itch"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  data() {
    const githubUrl = process.env.githubUrl
    const linkedinUrl = process.env.linkedinUrl
    const dribbbleUrl = process.env.dribbbleUrl
    const itchUrl = process.env.itchUrl

    return {
      githubUrl,
      linkedinUrl,
      dribbbleUrl,
      itchUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.socials {
  @apply tw-mt-10;

  &__item {
    @apply tw-mr-4 tw-inline-block tw-text-purple-500 tw-cursor-pointer;

    @screen md {
      &:hover {
        @apply tw-text-white;
      }
    }
  }
}
</style>
