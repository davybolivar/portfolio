<template>
  <footer class="footer">
    <div class="footer__container">
      <span>Handcrafted by Davy Bolivar 🍰</span>
      <div class="socials">
        <a :href="githubUrl" class="socials__item" target="_">
          <i class="socials__icon icon icon-github"></i>
        </a>
        <a :href="linkedinUrl" class="socials__item" target="_">
          <i class="socials__icon icon icon-linkedin"></i>
        </a>
        <a :href="angellistUrl" class="socials__item" target="_">
          <i class="socials__icon icon icon-angellist"></i>
        </a>
        <a :href="itchUrl" class="socials__item" target="_">
          <i class="socials__icon icon icon-itch"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

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
.footer {
  @apply tw-px-5 tw-text-purple-600 tw-text-xs;
  position: relative;
  background: #100e15;

  @screen md {
    @apply tw-text-sm;
  }

  &__container {
    max-width: 1230px;
    @apply tw-flex tw-justify-between tw-items-center tw-w-full tw-mx-auto tw-py-4;
  }
}

.socials {
  @apply tw-flex-shrink-0;

  &__icon {
    @apply tw-text-2xl;
  }

  &__item {
    @apply tw-inline-flex tw-cursor-pointer tw-align-middle tw-ml-2;
    transition: color 0.1s ease;

    @screen md {
      @apply tw-ml-4;

      &:hover {
        @apply tw-text-white;
      }
    }
  }
}
</style>
