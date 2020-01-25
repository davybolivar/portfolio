<template>
  <section>
    <h2 class="base-h2">FAQ</h2>
    <ol class="faq">
      <li v-for="item in faq" class="faq__item tw-mt-8 first:tw-mt-0">
        <p class="faq__question">{{ item.question }}</p>
        <span class="faq__answer">
          ->
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

    &:before {
      content: counter(li) '. ';
      display: inline-block;
      @apply tw-mr-3;
    }
  }

  &__answer {
    @apply tw-text-purple-500 tw-tracking-wide tw-leading-loose;
  }

  &__more {
    @apply tw-text-gray-400 tw-mt-10 tw-inline-block tw-text-sm tw-no-underline;
    @screen md {
      &:hover {
        @apply tw-text-gray-300 tw-no-underline;
      }
    }
  }
}
</style>
