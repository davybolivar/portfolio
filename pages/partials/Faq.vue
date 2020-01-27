<template>
  <section>
    <h2 class="base-h2">FAQ</h2>
    <ol class="faq">
      <li v-for="item in faq" class="faq__item tw-mt-8 first:tw-mt-0">
        <p class="faq__question">{{ item.question }}</p>
        <span class="faq__answer">
          <i>{{ item.answer }}</i>
        </span>
      </li>
    </ol>
    <a href="#contact" class="faq__more">
      Have any further questions? ↓
    </a>
  </section>
</template>

<script>
export default {
  name: 'Faq',

  data() {
    const startDate = '2014/01/01'
    const startYear = this.getYear(startDate)
    const yearFromNow = this.getYearDiffFromNow(startDate)

    return {
      faq: [
        {
          question: 'Are you open for job offers?',
          answer: 'No, Not at the moment.'
        },
        {
          question: 'What job positions are you interested in?',
          answer: 'Front-end/Full-stack Javascript Engineer.'
        },
        {
          question: 'How long have you been working as a developer?',
          answer: `I’ve started working since ${startYear} (${yearFromNow} years).`
        }
      ]
    }
  },

  methods: {
    getYearDiffFromNow(from) {
      return new Date().getFullYear() - new Date(from).getFullYear()
    },

    getYear(dt) {
      return new Date(dt).getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  @apply tw-list-none;
  counter-reset: li;

  &__item {
    @apply relative;
  }

  &__question {
    counter-increment: li;
    @apply tw-text-purple-500;

    &:before {
      content: counter(li, decimal-leading-zero) '. ';
      display: inline-block;
      @apply tw-mr-1 tw-text-white;
    }
  }

  &__answer {
    @apply tw-text-white tw-tracking-wide tw-leading-loose tw-text-sm;

    &:before {
      content: '->';
      @apply tw-text-purple-500 tw-mr-5;
    }
  }

  &__more {
    @apply tw-text-purple-500 tw-mt-10 tw-inline-block tw-text-sm tw-no-underline;
    @screen md {
      &:hover {
        @apply tw-text-purple-400 tw-no-underline;
      }
    }
  }
}
</style>
