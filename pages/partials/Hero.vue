<template>
  <section>
    <div class="tw-mx-auto lg:tw-mx-0">
      <h1 class="base-h1 tw-leading-tight">
        <span class="wave">👋</span>
        <br />
        Hello, I'm Dave!
        <br />
        <span class="tw-text-purple-500">
          I am a front-end
          <br />
          engineer<span class="cursor cursor--blink">_</span>
        </span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.wave {
  animation: wave-animation 2.5s infinite;
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

.cursor {
  display: inline-block;
  @apply tw-text-white;

  &--blink {
    animation: blink-animation 0.35s alternate infinite;
  }
}

@keyframes blink-animation {
  0% {
    opacity: 0;
  }

  90%,
  100% {
    opacity: 1;
  }
}
</style>
